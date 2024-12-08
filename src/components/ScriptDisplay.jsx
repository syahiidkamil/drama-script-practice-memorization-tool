/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lightbulb, Volume2 } from "lucide-react";

const ScriptDisplay = ({ dialogLines, currentLineIndex, selectedRole }) => {
  const [challengeMode, setChallengeMode] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCurrentLine, setShowCurrentLine] = useState(false);

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
    // Show first word, then every 4th word, rest as dots
    return words
      .map((word, index) => (index === 0 || index % 4 === 0 ? word : "...."))
      .join(" ");
  };

  const speakLine = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleShowLine = () => {
    setShowCurrentLine(true);
    setShowHint(false); // Reset hint state when showing full line
  };

  const renderDialogLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;
    const isUserLine = line.character === selectedRole;
    const shouldHide = challengeMode && isUserLine;

    let displayText = line.text;
    if (shouldHide) {
      if (isCurrentLine) {
        // Only show hints or full text for current line
        if (showCurrentLine) {
          displayText = line.text;
        } else if (showHint) {
          displayText = getHintText(line.text);
        } else {
          displayText =
            "........................................................";
        }
      } else {
        // All other user lines are hidden in challenge mode
        displayText =
          "........................................................";
      }
    }

    return (
      <div
        key={index}
        className={`mb-4 p-4 rounded-md ${
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
                {challengeMode && !showCurrentLine && (
                  <Button
                    onClick={() => setShowHint(true)}
                    className="bg-yellow-500 hover:bg-yellow-600"
                    disabled={showHint}
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Show Hint
                  </Button>
                )}
                <Button
                  onClick={handleShowLine}
                  className="bg-green-500 hover:bg-green-600"
                  disabled={showCurrentLine}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Show Line
                </Button>
                <Button
                  onClick={() => speakLine(line.text)}
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
          variant={challengeMode ? "destructive" : "outline"}
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
      <div className="border rounded-lg bg-white shadow-sm h-96 overflow-y-auto p-6">
        {dialogLines.map(renderDialogLine)}
      </div>
    </div>
  );
};

export default ScriptDisplay;
