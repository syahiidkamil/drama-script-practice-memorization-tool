import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_7_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_7.id,
  sceneId: SCENES.SCENE_7.id,
  title: SCENES.SCENE_7.title,
  description: SCENES.SCENE_7.description,
  location: SCENES.SCENE_7.location,
  characters: SCENES.SCENE_7.characters,
  props: SCENES.SCENE_7.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Returning Anna's wallet,",
      emotion: "neutral",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Ben discovers something he never expected",
      emotion: "suspenseful",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "a secret that could change everything for Jules.",
      emotion: "foreboding",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben membunyikan bel lebih dari 2x tapi belum ada jawaban",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Setelah menunggu agak lama baru terdengar pelan suara dua orang yang sedang bercakap cakap didalam",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Whose the hack is it? So annoying!",
      emotion: "angry",
      stage_direction: "marah",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Wait a minute honey. I will open the door.",
      emotion: "calming",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna berusaha menenangkan Matt",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna jalan ke pintu buat buka pintu",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna buka pintu",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna kaget ngeliat Ben ada di depan rumahnya",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna berusaha memastikan kalo Ben nggak liat Matt ada dirumahnya",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna berusaha tenang",
      emotion: null,
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Oh haai Ben! What happened?",
      emotion: "nervous",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Did you lose something?",
      emotion: "neutral",
      stage_direction: "Mengacungkan dompet",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Oh God! I thought that it was gone! Thank's Ben! You've saved my life again!",
      emotion: "overly cheerful",
      stage_direction: "nada ceria",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Matt denger suara Anna yang ceria cemburu dan berjalan menuju pintu",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Matt mau cari tau siapa suara cowok yang bikin Anna bersuara riang",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Who is it honey?",
      emotion: "suspicious",
      stage_direction:
        "Jalan sambil melihat Anna, masih belum sadar kalo tamunya Ben",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Honey?!!",
      emotion: "shocked",
    },
    {
      character: ROLES.ANNA_SCOTT.id,
      type: "dialog",
      text: "Oh Ben! It is not as it seems! I can explain it to you!",
      emotion: "panicked",
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Oh Ben! I... I... I can explain it to you! Please don't take it wrong!",
      emotion: "desperate",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "You two... Please take care of it before Jules finds it! I will try to stay away from it!",
      emotion: "controlled anger",
      stage_direction: "menahan marah",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jalan pergi sambil marah",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Thank you Ben! I will fix it soon!",
      emotion: "desperate",
      stage_direction: "Teriak teriak",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Anna dan Matt cekcok sambil masuk ke rumah",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup: "Outside Anna's house, evening",
    lighting: "Exterior porch lighting",
    mood: "Tense and revelatory",
  },

  emotional_arc: {
    start: "casual errand",
    middle: "shocking discovery",
    end: "moral conflict and anger",
  },

  themes: {
    primary: "Betrayal",
    secondary: "Moral responsibility",
    conflict: "Personal loyalty versus professional duty",
  },

  dramatic_notes: {
    pivotal_moment:
      "This scene reveals the affair that will affect multiple relationships",
    tension_points: [
      "The moment of discovery",
      "Ben's controlled reaction",
      "The implicit threat to Jules' marriage",
    ],
  },
};
