import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_5_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_5.id,
  sceneId: SCENES.SCENE_5.id,
  title: SCENES.SCENE_5.title,
  description: SCENES.SCENE_5.description,
  location: SCENES.SCENE_5.location,
  characters: SCENES.SCENE_5.characters,
  props: SCENES.SCENE_5.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "At Jules' house, Ben finds himself stepping into a moment of family tension.",
      emotion: "tense",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "As Carla struggles with her feelings of being left behind",
      emotion: "emotional",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Ben try to calm her",
      emotion: "caring",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben mengetuk pintu rumah jules",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ostin buka pintu",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Hi, I am Matt, you must be Ben! Please come in. Jules is still doing some makeup.",
      emotion: "welcoming",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Thank you!",
      emotion: "polite",
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Taking care of a kid is so tiring! I'm sorry if my house is a mess!",
      emotion: "apologetic",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "That's okay!",
      emotion: "understanding",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Carla lari larian didalam ruang tamu sampai jatuh",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Carla, don't do that! That's rude!!",
      emotion: "stern",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "I'm sorry Daddy 🙁.",
      emotion: "apologetic",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Carla malu malu",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Carla penasaran dan nunjuk ke Ben",
      emotion: null,
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "Daddy… who is this old man? Why is his hair all grey?!",
      emotion: "curious",
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "Hey… it's so rude! I'm sorry Ben. She didn't mean it!",
      emotion: "embarrassed",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "It's fine! Hi, my name is Ben. Nice to meet you, Carla!",
      emotion: "friendly",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "Nice to meet you too Ben",
      emotion: "shy",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules dateng, menyapa semua orang diruangan",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Carla merajuk karena mau ditinggal lagi sama ibunya",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Sorry Ben! I makes you wait",
      emotion: "apologetic",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "Why are you so busy mom! You are always busy and never be around for me! I hate you, Mom! You never care about me!",
      emotion: "hurt",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules kaget, dan speechless",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ostin mencoba menenangkan Carla",
      emotion: null,
    },
    {
      character: ROLES.MATT_OSTIN.id,
      type: "dialog",
      text: "It's not true Carla. Your mom loves you! And she is busy so you can have anything in this world.",
      emotion: "reassuring",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "I know that must hurt, but let me tell you something. Your mom loves you more than anything. She works hard because she wants to give you the best life possible.",
      emotion: "gentle",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "But why can't she be here more?",
      emotion: "sad",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Sometimes, when grown-ups have big responsibilities, They have to make tough choices. But that doesn't mean she loves you any less. Have you told her how you feel?",
      emotion: "understanding",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "Not really.",
      emotion: "thoughtful",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Maybe you should. She'd want to know.",
      emotion: "encouraging",
    },
    {
      character: ROLES.CARLA_OSTIN.id,
      type: "dialog",
      text: "Okay Mom, I'm sorry 🙁 I love you!!",
      emotion: "emotional",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Love you too!!",
      emotion: "loving",
    },
  ],

  stage_directions: {
    initial_setup: "Jules' house living room with sofa and Carla's toys",
    lighting: "Warm, home lighting",
    mood: "Emotional family moment",
  },

  emotional_arc: {
    start: "casual introduction",
    middle: "emotional confrontation",
    end: "tender resolution",
  },

  themes: {
    primary: "Family bonds",
    secondary: "Work-life balance",
    resolution: "Understanding and communication",
  },
};
