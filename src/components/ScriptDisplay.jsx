/* eslint-disable react/prop-types */
const ScriptDisplay = ({
  dialogLines,
  currentLineIndex,
  selectedRole,
  scrollPosition,
}) => {
  const renderDialogLine = (line, index) => {
    const isCurrentLine = index === currentLineIndex;
    const isUserLine = line.character === selectedRole;

    return (
      <div
        key={index}
        className={`mb-4 p-2 rounded transition-colors duration-200 ${
          isCurrentLine ? "bg-blue-50 border border-blue-200" : ""
        } ${isUserLine ? "text-blue-700" : "text-gray-700"}`}
      >
        {line.type === "narration" || line.type === "stage_direction" ? (
          <div className="italic text-gray-600">{line.text}</div>
        ) : (
          <>
            <div className="font-semibold mb-1">
              {line.character
                .split("_")
                .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
                .join(" ")}
              :
            </div>
            <div className="text-lg">
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
    <div className="relative border rounded-lg bg-white shadow-sm h-96">
      <div
        className="h-full overflow-y-scroll px-6 py-4 scroll-smooth"
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {dialogLines.map(renderDialogLine)}
      </div>
    </div>
  );
};

export default ScriptDisplay;
