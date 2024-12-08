import { ROLES } from "../constants/roles";
import { SCENES } from "../constants/scenes";

export const getCharacterScenes = (characterId) => {
  return Object.values(SCENES).filter((scene) =>
    scene.characters.includes(characterId)
  );
};

export const getSceneCharacters = (sceneId) => {
  const scene = SCENES[sceneId];
  return scene ? scene.characters.map((charId) => ROLES[charId]) : [];
};
