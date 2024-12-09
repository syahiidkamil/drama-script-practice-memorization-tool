import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_6_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_6.id,
  sceneId: SCENES.SCENE_6.id,
  title: SCENES.SCENE_6.title,
  description: SCENES.SCENE_6.description,
  location: SCENES.SCENE_6.location,
  characters: SCENES.SCENE_6.characters,
  props: SCENES.SCENE_6.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "At the office,",
      emotion: "neutral",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Ben's hard work starts to make a difference at the office, impressing those around him.",
      emotion: "proud",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Wow Ben! Did you do all of this?",
      emotion: "impressed",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Yeah, I just want to be a good intern.",
      emotion: "modest",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "You know what? It never happened before! Jules will be happy when she sees this",
      emotion: "excited",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Wow... really?",
      emotion: "surprised",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Yeah! You know that I'm not a liar! But Ben, I'm sorry I have to leave first! I have something urgent to do! Bye, Ben! Don't force yourself too much! Take a little rest!",
      emotion: "hurried",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna buru buru pergi sambil beresin tasnya",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Yeah yeah... Just go!",
      emotion: "dismissive",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben mencoba melanjutkan pekerjaannya, tapi ternyata baru sadar bahwa dompet Anna tertinggal",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben mencoba mengejar Anna tetapi ternyata Anna sudah jauh dari pandangannya. Ben berniat untuk mengantarkan dompet Anna ke rumahnya",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup:
      "Office setting with Ben's desk area showing evidence of organized work",
    lighting: "Bright office lighting",
    mood: "Professional and positive, then transitioning to subtle tension",
  },

  emotional_arc: {
    start: "pride and accomplishment",
    middle: "casual interaction",
    end: "concern and determination",
  },

  themes: {
    primary: "Dedication to work",
    secondary: "Attention to detail",
    development: "Setup for future conflict",
  },

  scenic_notes: {
    importance:
      "This scene serves as a pivotal setup for the next major plot development",
    transition:
      "The lost wallet becomes the catalyst for the next scene's revelations",
  },
};
