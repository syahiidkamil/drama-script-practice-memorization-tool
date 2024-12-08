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
