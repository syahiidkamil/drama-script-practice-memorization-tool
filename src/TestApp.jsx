import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TestApp = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState(
    "Hello! This is a test of the speech synthesis API."
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log("Available voices:", availableVoices);
      setVoices(availableVoices);
    };

    // Load voices immediately
    loadVoices();

    // Also set up the event listener for async loading
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis not supported");
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      console.log("Started speaking");
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      console.log("Finished speaking");
      setIsSpeaking(false);
    };

    utterance.onerror = (error) => {
      console.error("Speech error:", error);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="max-w-xl mx-auto">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">Speech Synthesis Test</h1>

          {/* Voice Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Voice</label>
            <Select
              value={selectedVoice?.name}
              onValueChange={(name) => {
                const voice = voices.find((v) => v.name === name);
                setSelectedVoice(voice);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a voice..." />
              </SelectTrigger>
              <SelectContent>
                {voices.map((voice) => (
                  <SelectItem key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Text Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Text to Speak</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-32 p-2 border rounded-md"
            />
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <Button
              onClick={speak}
              disabled={isSpeaking}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Speak
            </Button>
            <Button onClick={stop} disabled={!isSpeaking} variant="outline">
              Stop
            </Button>
          </div>

          {/* Debug Info */}
          <div className="text-sm text-gray-500">
            <p>
              Speech Synthesis Available: {String(!!window.speechSynthesis)}
            </p>
            <p>Available Voices: {voices.length}</p>
            <p>Selected Voice: {selectedVoice?.name || "None"}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestApp;
