import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_8_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_8.id,
  sceneId: SCENES.SCENE_8.id,
  title: SCENES.SCENE_8.title,
  description: SCENES.SCENE_8.description,
  location: SCENES.SCENE_8.location,
  characters: SCENES.SCENE_8.characters,
  props: SCENES.SCENE_8.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "In the midst of chaos...",
      emotion: "tense",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Jules and Cameron (Senior Manager in Enigma Camp) face a critical moment.",
      emotion: "serious",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "As Cameron pushes for a CEO to secure the company's growth,",
      emotion: "determined",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Jules struggles to let go of control over what she's built.",
      emotion: "conflicted",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Their conversation is not just about leadership",
      emotion: "thoughtful",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "It's about the heart and who's best to protect it.",
      emotion: "emotional",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Cameron duduk di mejanya sambil mengetikkan sesuatu dilaptopnya",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Meja kerjanya berantakan karena ada banyak yang harus dia kerjakan",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ketika sibuk mengerjakan, tiba tiba Jules datang. Dibelakangnya ada Ben",
      emotion: null,
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "Jules, you are late again. Why are you so late today? We have so many things to do! And you know, we need to discuss the CEO candidates.",
      emotion: "frustrated",
      stage_direction: "Kesel",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Sorry Cameron! Like always... Family matters! Cameron, I'm not sure we need a CEO. I have run this company from day one.",
      emotion: "defensive",
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "You have done an amazing job, so we are growing fast. But... Investors want a seasoned executive to help manage the workload. It seems difficult for you to fully focus on work matters. So... I think you have to rethink about having a new CEO",
      emotion: "diplomatic",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "This is my company. No one will care about it the way I do.",
      emotion: "protective",
      stage_direction: "Nada menahan marah",
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "Jules, think of it as delegating, not replacing you. You are still the heart of this company.",
      emotion: "reassuring",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "But will they let me make decisions? Or will I be reporting to someone else?",
      emotion: "worried",
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "We will find someone who aligns with your vision. Let's explore the options together. Calm down, Jules... You will be the only person to choose which candidate becomes the CEO.",
      emotion: "supportive",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "OK then!",
      emotion: "reluctant",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules berjalan sambil diikuti Ben",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup:
      "Cameron's office, cluttered desk showing signs of heavy workload",
    lighting: "Office lighting",
    mood: "Tense business discussion with underlying emotional stakes",
  },

  emotional_arc: {
    start: "professional tension",
    middle: "confrontation about control",
    end: "reluctant consideration",
  },

  themes: {
    primary: "Leadership and control",
    secondary: "Growth versus identity",
    conflict: "Personal attachment versus business necessity",
  },

  business_context: {
    situation: "Company growth requiring leadership change",
    stakes: "Company's future direction and Jules' role",
    pressure_points: [
      "Investor expectations",
      "Work-life balance",
      "Control and decision-making power",
    ],
  },
};
