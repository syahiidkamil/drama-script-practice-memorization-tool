import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RefreshCcw, Check } from "lucide-react";
import { getScriptBySceneId, getDialogLines, loadVoices } from "./utils";
import ScriptDisplay from "./components/ScriptDisplay";
import SceneSelection from "./components/SceneSelection";
import { ROLES } from "./constants";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedScene, setSelectedScene] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

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
    setIsUserTurn(false);
    setHasStarted(false);
  };

  const speakLine = (line) => {
    return new Promise((resolve, reject) => {
      if (!voicesLoaded || !line) {
        resolve();
        return;
      }

      // Don't speak if it's a stage direction or the user's line
      if (line.type === "stage_direction" || line.character === selectedRole) {
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(line.text);
      const characterRole = ROLES[line.character];
      const allVoices = window.speechSynthesis.getVoices();

      if (characterRole?.speech) {
        // Try to match the voice by name
        const matchingVoice = allVoices.find(
          (voice) => voice.name === characterRole.speech.voice
        );

        console.log("Found matching voice:", matchingVoice?.name);

        if (matchingVoice) {
          utterance.voice = matchingVoice;
          utterance.pitch = characterRole.speech.pitch;
          utterance.rate = characterRole.speech.rate;
          utterance.volume = characterRole.speech.volume;
        } else {
          console.log("No matching voice found for", line.character);
          const defaultVoice = allVoices.find(
            (voice) =>
              voice.name === "Google US English" ||
              voice.name === "Daniel (English (United Kingdom))"
          );
          if (defaultVoice) utterance.voice = defaultVoice;
        }
      }

      utteranceRef.current = utterance;

      utterance.onend = () => {
        utteranceRef.current = null;
        resolve();
      };

      utterance.onerror = (error) => {
        console.error("Speech error:", error);
        utteranceRef.current = null;
        reject(error);
      };

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
  }, [currentLineIndex, isPlaying, isUserTurn, dialogLines, voicesLoaded]);

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

  const handleFinishTurn = () => {
    setIsUserTurn(false);
    setIsPlaying(true);
    setCurrentLineIndex((prev) => prev + 1);
  };

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
                <Button
                  onClick={resetScript}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <RefreshCcw size={20} />
                  <span>Reset</span>
                </Button>
              )}
            </div>

            <ScriptDisplay
              dialogLines={dialogLines}
              currentLineIndex={currentLineIndex}
              selectedRole={selectedRole}
            />

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
