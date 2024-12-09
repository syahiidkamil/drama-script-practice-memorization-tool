/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lightbulb, Volume2 } from "lucide-react";
import { ROLES } from "@/constants";

const ScriptDisplay = ({ dialogLines, currentLineIndex, selectedRole }) => {
  const [challengeMode, setChallengeMode] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCurrentLine, setShowCurrentLine] = useState(false);

  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Set up line refs array when dialogLines changes
  useEffect(() => {
    lineRefs.current = lineRefs.current.slice(0, dialogLines.length);
  }, [dialogLines]);

  // Scroll to current line
  useEffect(() => {
    if (!containerRef.current || !lineRefs.current[currentLineIndex]) {
      return;
    }

    lineRefs.current[currentLineIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentLineIndex]);

  // Reset scroll position when dialogLines change (scene change or reset)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [dialogLines]);

  const toggleChallengeMode = () => {
    setChallengeMode(!challengeMode);
    setShowHint(false);
    setShowCurrentLine(false);
  };

  // Reset states when moving to next line
  useEffect(() => {
    setShowHint(false);
    setShowCurrentLine(false);
  }, [currentLineIndex]);

  const getHintText = (text) => {
    const words = text.split(" ");
    return words
      .map((word, index) => (index === 0 || index % 4 === 0 ? word : "...."))
      .join(" ");
  };

  const speakLine = (text, characterId) => {
    console.log("characterId", characterId);

    const utterance = new SpeechSynthesisUtterance(text);
    const characterRole = ROLES[characterId];
    const allVoices = window.speechSynthesis.getVoices();

    if (characterRole?.speech) {
      const matchingVoice = allVoices.find((voice) => {
        return voice.name === characterRole.speech.voice;
      });

      if (matchingVoice) {
        console.log("Found voice:", matchingVoice.name);
        utterance.voice = matchingVoice;
        utterance.pitch = characterRole.speech.pitch;
        utterance.rate = characterRole.speech.rate;
        utterance.volume = characterRole.speech.volume;
      } else {
        console.log(
          "No matching voice found for",
          characterId,
          "using default"
        );
        const defaultVoice = allVoices.find(
          (voice) =>
            voice.name === "Google US English" ||
            voice.name === "Daniel (English (United Kingdom))"
        );
        if (defaultVoice) utterance.voice = defaultVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
  };

  const handleShowLine = () => {
    setShowCurrentLine(!showCurrentLine);
    setShowHint(false);
  };

  const handleShowHint = () => {
    setShowHint(!showHint);
    setShowCurrentLine(false);
  };

  const renderDialogLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;
    const isUserLine = line.character === selectedRole;
    const shouldHide = challengeMode && isUserLine;

    let displayText = line.text;
    if (shouldHide) {
      if (isCurrentLine) {
        if (showCurrentLine) {
          displayText = line.text;
        } else if (showHint) {
          displayText = getHintText(line.text);
        } else {
          displayText =
            "........................................................";
        }
      } else {
        displayText =
          "........................................................";
      }
    }

    return (
      <div
        key={index}
        ref={(el) => (lineRefs.current[index] = el)}
        className={`mb-4 p-4 rounded-md transition-all duration-300 ${
          isCurrentLine ? "bg-blue-100 border-2 border-blue-300" : ""
        } ${isUserLine ? "text-blue-700" : "text-gray-700"}`}
      >
        {line.type === "narration" || line.type === "stage_direction" ? (
          <div className="italic text-gray-600">{line.text}</div>
        ) : (
          <>
            <div className="font-bold mb-2">
              {line.character
                .split("_")
                .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
                .join(" ")}
            </div>
            <div className="text-lg leading-relaxed">
              {displayText}
              {line.stage_direction && (
                <span className="italic text-gray-500 ml-2 text-sm">
                  ({line.stage_direction})
                </span>
              )}
            </div>
            {isCurrentLine && isUserLine && (
              <div className="mt-4 space-x-2">
                {challengeMode && (
                  <>
                    <Button
                      onClick={handleShowHint}
                      className="bg-yellow-500 hover:bg-yellow-600"
                    >
                      <Lightbulb className="w-4 h-4 mr-2" />
                      {showHint ? "Revert to ..." : "Show Hint"}
                    </Button>
                    <Button
                      onClick={handleShowLine}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {showCurrentLine ? "Revert to ...." : "Show Line"}
                    </Button>
                  </>
                )}

                <Button
                  onClick={() => speakLine(line.text, line.character)}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Pronunciation
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <Button
          onClick={toggleChallengeMode}
          variant={challengeMode ? "destructive" : "outline-blue"}
          className="flex items-center"
        >
          {challengeMode ? (
            <>
              <EyeOff className="w-4 h-4 mr-2" />
              Challenge Mode: ON
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 mr-2" />
              Challenge Mode: OFF
            </>
          )}
        </Button>
      </div>
      <div
        ref={containerRef}
        className="border rounded-lg bg-white shadow-sm h-96 overflow-y-auto p-6 scroll-smooth"
      >
        {dialogLines.map(renderDialogLine)}
      </div>
    </div>
  );
};

export default ScriptDisplay;
