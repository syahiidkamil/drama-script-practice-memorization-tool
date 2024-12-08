import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCcw, Check, Volume2, VolumeX } from "lucide-react";
import { getScriptBySceneId, getDialogLines, loadVoices } from "./utils";
import ScriptDisplay from "./components/ScriptDisplay";
import SceneSelection from "./components/SceneSelection";

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
  const utteranceRef = useRef(null);
  const currentScript = getScriptBySceneId(selectedScene);
  const dialogLines = getDialogLines(currentScript);

  // Load voices when component mounts
  useEffect(() => {
    loadVoices().then(() => setVoicesLoaded(true));
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setSelectedScene("");
    resetScript();
  };

  const handleSceneSelect = (sceneId) => {
    setSelectedScene(sceneId);
    resetScript();
  };

  const resetScript = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentLineIndex(0);
    setScrollPosition(0);
    setIsUserTurn(false);
    setHasStarted(false);
    setIsSpeaking(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const speakLine = (line) => {
    return new Promise((resolve, reject) => {
      if (!voicesLoaded || isMuted || !line) {
        resolve();
        return;
      }

      // Don't speak if it's a stage direction or the user's line
      if (line.type === "stage_direction" || line.character === selectedRole) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(line.text);
      utteranceRef.current = utterance;

      utterance.onend = () => {
        utteranceRef.current = null;
        setIsSpeaking(false);
        resolve();
      };

      utterance.onerror = (error) => {
        console.error("Speech error:", error);
        utteranceRef.current = null;
        setIsSpeaking(false);
        reject(error);
      };

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    });
  };

  // Handle auto-progression of lines
  useEffect(() => {
    let timeoutId;

    const progressLine = async () => {
      if (!isPlaying || isUserTurn || currentLineIndex >= dialogLines.length) {
        return;
      }

      const currentLine = dialogLines[currentLineIndex];

      try {
        await speakLine(currentLine);

        // Only progress if still playing and not user's turn
        if (isPlaying && !isUserTurn) {
          timeoutId = setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 1000); // Delay between lines
        }
      } catch (error) {
        console.error("Error speaking line:", error);
      }
    };

    progressLine();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [
    currentLineIndex,
    isPlaying,
    isUserTurn,
    dialogLines,
    isMuted,
    voicesLoaded,
  ]);

  // Handle user turns
  useEffect(() => {
    if (selectedRole && dialogLines.length > currentLineIndex) {
      const currentDialog = dialogLines[currentLineIndex];
      if (currentDialog?.character === selectedRole) {
        setIsPlaying(false);
        setIsUserTurn(true);
      }
    }
  }, [currentLineIndex, selectedRole, dialogLines]);

  const togglePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    if (isPlaying) {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!isMuted && utteranceRef.current) {
      window.speechSynthesis.cancel();
    }
    setIsMuted(!isMuted);
  };

  const handleFinishTurn = () => {
    setIsUserTurn(false);
    setIsPlaying(true);
    setCurrentLineIndex((prev) => prev + 1);
  };

  // Handle scroll animation
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Script Practice Tool
        </h1>

        <SceneSelection
          selectedRole={selectedRole}
          selectedScene={selectedScene}
          onRoleSelect={handleRoleSelect}
          onSceneSelect={handleSceneSelect}
        />

        {/* Script Display */}
        {selectedRole && selectedScene && currentScript && (
          <div className="mt-8 space-y-4">
            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={togglePlayPause}
                className={`flex items-center space-x-2 ${
                  !hasStarted
                    ? "bg-green-600 hover:bg-green-700"
                    : isPlaying
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
                disabled={isUserTurn}
              >
                {isPlaying ? (
                  <>
                    <Pause size={20} />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    <span>{!hasStarted ? "Start Practice!" : "Resume"}</span>
                  </>
                )}
              </Button>

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

            {/* Script Display */}
            <ScriptDisplay
              dialogLines={dialogLines}
              currentLineIndex={currentLineIndex}
              selectedRole={selectedRole}
            />

            {/* User Turn UI */}
            {isUserTurn && (
              <div className="flex justify-center mt-4">
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
