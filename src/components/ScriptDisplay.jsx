/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const ScriptDisplay = ({ dialogLines, currentLineIndex, selectedRole }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Set up line refs array
  useEffect(() => {
    lineRefs.current = lineRefs.current.slice(0, dialogLines.length);
  }, [dialogLines]);

  // Auto-scroll effect
  useEffect(() => {
    if (!containerRef.current || !lineRefs.current[currentLineIndex]) {
      return;
    }

    lineRefs.current[currentLineIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentLineIndex]);

  const renderDialogLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;
    const isUserLine = line.character === selectedRole;

    return (
      <div
        key={index}
        ref={(el) => (lineRefs.current[index] = el)}
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
              {line.text}
              {line.stage_direction && (
                <span className="italic text-gray-500 ml-2 text-sm">
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
    <div
      ref={containerRef}
      className="border rounded-lg bg-white shadow-sm h-96 overflow-y-auto p-6"
    >
      {dialogLines.map(renderDialogLine)}
    </div>
  );
};

export default ScriptDisplay;
