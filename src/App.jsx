import React, { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCcw, Check, Volume2, VolumeX } from "lucide-react";
import { ROLES } from "./constants";
import {
  getCharacterScenes,
  getScriptBySceneId,
  getDialogLines,
  getCharacterDisplayName,
} from "./utils";
import { speak, stopSpeaking, loadVoices } from "./utils";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedScene, setSelectedScene] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const scriptContainerRef = useRef(null);
  const animationRef = useRef(null);
  const speakTimeoutRef = useRef(null);

  // Load voices when component mounts
  useEffect(() => {
    loadVoices().then(() => {
      setVoicesLoaded(true);
    });
  }, []);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setSelectedScene("");
    resetScript();
  };

  const resetScript = () => {
    stopSpeaking();
    setIsPlaying(false);
    setCurrentLineIndex(0);
    setScrollPosition(0);
    setIsUserTurn(false);
    setHasStarted(false);
    setIsSpeaking(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (speakTimeoutRef.current) {
      clearTimeout(speakTimeoutRef.current);
    }
  };

  const speakCurrentLine = () => {
    if (!voicesLoaded || isMuted) return;

    const currentScript = getScriptBySceneId(selectedScene);
    const dialogLines = getDialogLines(currentScript);
    const currentLine = dialogLines[currentLineIndex];

    if (!currentLine) return;

    // Don't speak if it's the user's turn
    if (currentLine.character === selectedRole) return;

    // Don't speak stage directions
    if (currentLine.type === "stage_direction") return;

    setIsSpeaking(true);
    speak(
      currentLine.text,
      currentLine.character,
      () => setIsSpeaking(true),
      () => {
        setIsSpeaking(false);
        if (isPlaying) {
          // Move to next line after a brief pause
          speakTimeoutRef.current = setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 1000);
        }
      }
    );
  };

  const togglePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    if (isPlaying) {
      stopSpeaking();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!isMuted) {
      stopSpeaking();
    }
    setIsMuted(!isMuted);
  };

  const handleFinishTurn = () => {
    setIsUserTurn(false);
    setCurrentLineIndex((prev) => prev + 1);
  };

  // Get current script and its dialog lines
  const currentScript = getScriptBySceneId(selectedScene);
  const dialogLines = getDialogLines(currentScript);

  // Script scrolling animation
  useEffect(() => {
    if (!isPlaying || isUserTurn) return;

    const animate = () => {
      setScrollPosition((prev) => {
        const container = scriptContainerRef.current;
        if (!container) return prev;

        const maxScroll = container.scrollHeight - container.clientHeight;
        if (prev >= maxScroll) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, isUserTurn]);

  // Monitor current line and detect user turns
  useEffect(() => {
    if (selectedRole && dialogLines.length > currentLineIndex) {
      const currentDialog = dialogLines[currentLineIndex];
      if (currentDialog?.character === selectedRole) {
        setIsPlaying(false);
        setIsUserTurn(true);
      } else if (isPlaying && !isSpeaking) {
        speakCurrentLine();
      }
    }
  }, [currentLineIndex, selectedRole, dialogLines, isPlaying, isSpeaking]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (speakTimeoutRef.current) {
        clearTimeout(speakTimeoutRef.current);
      }
    };
  }, []);

  const renderDialogLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;
    const isUserLine = line.character === selectedRole;

    return (
      <div
        key={index}
        className={`mb-4 p-2 rounded ${
          isCurrentLine ? "bg-blue-50 border border-blue-200" : ""
        } ${isUserLine ? "text-blue-700" : "text-gray-700"}`}
      >
        {line.type === "narration" || line.type === "stage_direction" ? (
          <div className="italic text-gray-600">{line.text}</div>
        ) : (
          <>
            <div className="font-semibold">
              {getCharacterDisplayName(line.character)}:
            </div>
            <div className="mt-1">
              {line.text}
              {line.stage_direction && (
                <span className="italic text-gray-500 ml-2">
                  ({line.stage_direction})
                </span>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Script Practice Tool
        </h1>

        {/* Role Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Your Role
          </label>
          <Select value={selectedRole} onValueChange={handleRoleSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a role..." />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(ROLES).map(([roleId, role]) => (
                <SelectItem key={roleId} value={roleId}>
                  <div className="py-1">
                    <div className="font-medium">{role.character}</div>
                    <div className="text-sm text-gray-500">
                      Played by: {role.actor}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Scene Selection */}
        {selectedRole && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Scene
            </label>
            <Select
              value={selectedScene}
              onValueChange={(value) => {
                setSelectedScene(value);
                resetScript();
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a scene..." />
              </SelectTrigger>
              <SelectContent>
                {getCharacterScenes(selectedRole).map((scene) => (
                  <SelectItem key={scene.id} value={scene.id}>
                    <div className="py-1">
                      <div className="font-medium">{scene.title}</div>
                      <div className="text-sm text-gray-500">
                        Location: {scene.location}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Script Teleprompter */}
        {selectedRole && selectedScene && currentScript && (
          <div className="mt-8 space-y-4">
            {/* Controls */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={togglePlayPause}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
                    !hasStarted
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : isPlaying
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                  disabled={isUserTurn}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={24} />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play size={24} />
                      <span>{!hasStarted ? "Start Practice!" : "Resume"}</span>
                    </>
                  )}
                </button>
                {hasStarted && (
                  <>
                    <Button
                      onClick={resetScript}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <RefreshCcw size={20} />
                      <span>Reset</span>
                    </Button>
                    <Button
                      onClick={toggleMute}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Script Display */}
            <div className="relative h-64 border rounded-lg bg-white">
              <div
                ref={scriptContainerRef}
                className="absolute inset-0 p-4 overflow-y-auto"
                style={{ transform: `translateY(-${scrollPosition}px)` }}
              >
                {dialogLines.map(renderDialogLine)}
              </div>
            </div>

            {/* User Turn UI */}
            {isUserTurn && (
              <div className="flex justify-center">
                <Button
                  onClick={handleFinishTurn}
                  className="flex items-center space-x-2"
                >
                  <Check size={20} />
                  <span>Finish Your Turn</span>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
