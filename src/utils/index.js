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

export const speak = (text, characterId, onStart, onEnd) => {
  if (!window.speechSynthesis) {
    console.error("Speech synthesis not supported");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const character = ROLES[characterId];
  if (!character) {
    console.error("Character not found:", characterId);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Apply character's speech settings
  const speechSettings = character.speech;
  if (speechSettings) {
    // Find the specified voice
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((v) => v.name === speechSettings.voice) || voices[0];

    utterance.voice = voice;
    utterance.pitch = speechSettings.pitch;
    utterance.rate = speechSettings.rate;
    utterance.volume = speechSettings.volume;
  }

  // Set up event handlers
  utterance.onstart = () => {
    console.log(`Started speaking for ${character.character}`);
    onStart?.();
  };

  utterance.onend = () => {
    console.log(`Finished speaking for ${character.character}`);
    onEnd?.();
  };

  utterance.onerror = (error) => {
    console.error(`Speech error for ${character.character}:`, error);
    onEnd?.();
  };

  // Start speaking
  window.speechSynthesis.speak(utterance);
};

export const stopSpeaking = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};

// Load voices and return a promise that resolves when voices are available
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
