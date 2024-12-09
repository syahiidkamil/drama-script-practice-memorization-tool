import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_3_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_3.id,
  sceneId: SCENES.SCENE_3.id,
  title: SCENES.SCENE_3.title,
  description: SCENES.SCENE_3.description,
  location: SCENES.SCENE_3.location,
  characters: SCENES.SCENE_3.characters,
  props: SCENES.SCENE_3.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "On a busy morning... Jules does something incredibly stupid...",
      emotion: "suspenseful",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben menemui jules sambil membawa berkas yang dibutuhkan",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules berjalan sambil agak sedikit marah dan panik",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Hi Jules! Where will we go?",
      emotion: "curious",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Hi Ben! Wait a minute, I have a couple of things to do first!",
      emotion: "distracted",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules sibuk dengan handphone nya",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules mengetikkan sesuatu di HP nya dengan marah dan buru buru",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "This is ridiculous! Why is my mother always so bothersome? She is always so loud. And she is so annoying... UGGHHHRR... I hate her!!",
      emotion: "angry",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules sambil marah marah memencet tombol 'send'",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules mematung dalam beberapa detik",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules tersadar, mulai panik",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Oh no. I sent it to her! I meant to forward it to Becky. AARRGGHH...",
      emotion: "panicked",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Becky ikutan panik",
      emotion: null,
    },
    {
      character: ROLES.BECKY.id,
      type: "dialog",
      text: "What's wrong, Jules?",
      emotion: "concerned",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules panik",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I just sent a rant about my mom... to my mom.",
      emotion: "mortified",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Becky semakin panik dan mondar mandir karena panik",
      emotion: null,
    },
    {
      character: ROLES.BECKY.id,
      type: "dialog",
      text: "Are you serious? What did you say?",
      emotion: "alarmed",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "That she's always such a... you know what... forget it!!! We need to delete it before she reads it!",
      emotion: "desperate",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben mencoba menenangkan",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Sounds like you need a plan. What's the situation?",
      emotion: "calm",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I accidentally emailed my mom something I shouldn't have. Ben, I need help.",
      emotion: "pleading",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben mencoba menenangkan",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Okay, where's your mom right now?",
      emotion: "strategic",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "At home. But she's always on her laptop.",
      emotion: "worried",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Alright, let's handle this. Becky, I need you to clear William's and John's schedules. Tell them it's urgent!",
      emotion: "decisive",
    },
    {
      character: ROLES.BECKY.id,
      type: "dialog",
      text: "Okee Ben!! I'll call William and John right now. If they have meetings, I'll make sure to reschedule them. Give me two minutes, and I'll confirm their availability.",
      emotion: "determined",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Becky buru2 pergi sambil panik",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jason mencoba membuntuti Becky",
      emotion: null,
    },
    {
      character: ROLES.JASON.id,
      type: "dialog",
      text: "Wait, are we breaking into her mom's house? This is insane! Count me in.",
      emotion: "excited",
    },
    {
      character: ROLES.BECKY.id,
      type: "dialog",
      text: "No way, Jason. You've got a mountain of work waiting on your desk. We'll handle this.",
      emotion: "dismissive",
    },
    {
      character: ROLES.JASON.id,
      type: "dialog",
      text: "Fine, but if you need backup, you know where to find me!",
      emotion: "playful",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Becky mengabaikan Jason dan buru-buru pergi",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jason balik ke meja kerjanya",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup: "Office setting with Jules and Ben near her office area",
    lighting: "Bright office lighting",
    mood: "Starting casual then building tension and panic",
  },

  pronunciation_notes: {
    key_phrases: [
      {
        text: "bothersome",
        ipa: "/ˈbɒðəsəm/",
        emphasis: "Stress on first syllable",
      },
    ],
  },

  emotional_arc: {
    start: "casual",
    middle: "frustrated anger",
    end: "panic and chaos",
  },
};
