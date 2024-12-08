import { ROLES } from "../constants/roles";
import { SCENES } from "../constants/scenes";
import * as ScriptModules from "../constants/scripts";

export const getCharacterScenes = (characterId) => {
  return Object.values(SCENES).filter((scene) =>
    scene.characters.includes(characterId)
  );
};

export const getSceneCharacters = (sceneId) => {
  const scene = SCENES[sceneId];
  return scene ? scene.characters.map((charId) => ROLES[charId]) : [];
};

export const getScriptBySceneId = (sceneId) => {
  if (!sceneId) return null;

  const scriptKey = Object.keys(ScriptModules).find(
    (key) => ScriptModules[key].sceneId === sceneId
  );

  return scriptKey ? ScriptModules[scriptKey] : null;
};

export const getDialogLines = (script) => {
  if (!script || !script.dialog || !Array.isArray(script.dialog)) {
    return [];
  }
  return script.dialog;
};

export const getCharacterDisplayName = (characterId) => {
  if (characterId === "BENS_FRIEND") return "Ben's Friend";
  return ROLES[characterId]?.character || characterId;
};

export const speak = (dialogLine, onFinishSpeaking) => {
  if (!dialogLine) return;

  const utterance = new SpeechSynthesisUtterance(dialogLine.text);

  utterance.onend = () => {
    onFinishSpeaking?.();
  };

  utterance.onerror = (error) => {
    console.error("Speech error:", error);
    onFinishSpeaking?.();
  };

  window.speechSynthesis.speak(utterance);
};

export const loadVoices = () => {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }

    // Wait for voices to be loaded
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
};

export const stopSpeaking = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};
