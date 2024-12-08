import { SCENES } from "../scenes";

export const SCENE_1_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_1.id,
  sceneId: SCENES.SCENE_1.id,
  title: SCENES.SCENE_1.title,
  description: SCENES.SCENE_1.description,
  location: SCENES.SCENE_1.location,
  characters: SCENES.SCENE_1.characters,
  props: SCENES.SCENE_1.props,

  dialog: [
    {
      character: "NARRATOR",
      type: "narration",
      text: "Love and work. Work and love. Ben, an old man who had to face a hard time to lose both of them. His wife was dead at the same time as he had to retire from his job. He misses her in every way. He tried to travel all along the globe but the places could not heal him. Today, he will go to the market to buy something. Then he meet one of his friends.",
      emotion: "contemplative",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "Hai Ben! How is your life?",
      emotion: "friendly",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Great!",
      emotion: "gloomy",
      stage_direction: "wajah sedikit gloomy",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "Great! How is your life after your wife is gone? Your face looks so gloomy today!",
      emotion: "concerned",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Don't get me wrong! I'm not a sad person. I just know there's a hole in my life, and I need to fill it soon!",
      emotion: "introspective",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "Great! I heard you have already traveled all around the world. You should be very happy! Isn't it enough to fill the hole?",
      emotion: "encouraging",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "No, it is not enough. The problem is … no matter where I went … as soon as I got home, I missed my wife so much.",
      emotion: "melancholic",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "I think you have to get a job so you can reduce it a little bit.",
      emotion: "thoughtful",
      stage_direction: "Ben's friend berpikir",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "ooohh… I remember … I have these flyers for you! Just look at it!",
      emotion: "excited",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Hemmm… Let me see",
      emotion: "curious",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "There are several requirements, let me read it for you! - Applicants must be over 65 years of age. - Have organizational skills - A genuine interest in education - And a roll up your sleeves attitude",
      emotion: "helpful",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Hemmm …. EnigmaCamp.com… Isn't that the Bootcamp that was …. Yeah yeah yeah … Thank you for the information!",
      emotion: "interested",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "Are you thinking about applying?",
      emotion: "curious",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Why not? it might be nice to have a place to go every day.",
      emotion: "hopeful",
    },
    {
      character: "BENS_FRIEND",
      type: "dialog",
      text: "Good! It is great to hear your excitement. If you need help, just tell me, Ben!",
      emotion: "supportive",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "George dan Ben pergi dari panggung",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup:
      "Ben dan George bertemu di pasar, Ben membawa paper bag belanjaan",
    lighting: "Natural daylight",
    mood: "Melancholic yet hopeful",
  },

  pronunciation_notes: {
    key_phrases: [
      {
        text: "EnigmaCamp.com",
        ipa: "/ɪˈnɪɡmə kæmp dɒt kɒm/",
        emphasis: "Equal stress on 'nig' and 'camp'",
      },
    ],
  },

  emotional_arc: {
    start: "melancholic",
    middle: "reflective",
    end: "hopeful",
  },
};
