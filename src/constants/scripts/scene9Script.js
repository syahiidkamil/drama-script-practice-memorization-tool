import { ROLES } from "../roles";
import { SCENES } from "../scenes";

export const SCENE_9_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_9.id,
  sceneId: SCENES.SCENE_9.id,
  title: SCENES.SCENE_9.title,
  description: SCENES.SCENE_9.description,
  location: SCENES.SCENE_9.location,
  characters: SCENES.SCENE_9.characters,
  props: SCENES.SCENE_9.props,

  dialog: [
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Karena Ben melihat Jules yang tampak sangat overwhelmed",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Dan masih ada waktu sekitar 2 jam menuju jadwal meeting berikutnya. Ben mengajak Jules untuk duduk sebentar disebuah taman.",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Jules, let's sit here for a while. Let's finish this coffee first",
      emotion: "caring",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben dan Jules meminum kopinya",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules mulai terlihat sedikit lebih tenang",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules mulai sedikit terbuka tapi masih berwajah overwhelmed",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Ben, I need to tell you something. I'm thinking about stepping down as a CEO.",
      emotion: "vulnerable",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "What's making you consider that?",
      emotion: "concerned",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Everything feels out of control. The company's growing faster than I can handle, and... I found out my husband is cheating on me.",
      emotion: "overwhelmed",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben kaget karena ternyata Jules sudah tau kalau suaminya selingkuh",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben berusaha tetap tenang",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Ben berusaha mencari kata kata yang tepat dan bijak untuk menanggapi Jules",
      emotion: null,
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Jules, I'm so sorry. That's a lot to carry. But stepping away from something you have poured your heart into might not be the solution.",
      emotion: "wise",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I just feel like I'm failing everywhere. At work... at home.... Maybe hiring a CEO is the right move. Let someone else take the pressure.",
      emotion: "defeated",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "You are not failing, Jules. You are dealing with more than most people could handle. But think about this... is stepping down what you really want? Or is it a reaction to everything else going on?",
      emotion: "supportive",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I don't know. I'm scared that if I stay, I'll lose myself. And if I go, I'll lose the company I built.",
      emotion: "conflicted",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "You're stronger than you think. And you don't have to face this alone. The people who care about you at work... and home... They want to help. Let them.",
      emotion: "encouraging",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules menatap ke kejauhan mencoba menimbang kembali keputusannya",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I've never been good at asking for help.",
      emotion: "reflective",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "That's what makes you a great leader. But even the best leaders know when to lean on others.",
      emotion: "wise",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I've made up my mind. I'm staying as CEO.",
      emotion: "determined",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "Jules, I'm proud of you. And remember, your husband's mistakes are his own. There's no reason to give up on your dreams.",
      emotion: "proud",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "You're right. I won't let someone else's failures bury what I have built. Thank you, Ben. You've always believed in me, even when I doubted myself.",
      emotion: "grateful",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules dengan percaya diri menelefon Cameron untuk membatalkan rencana untuk merekrut orang baru untuk menjadi CEO",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Di telefon",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Suara tut tut telefon",
      emotion: null,
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "Hello Jules. What happened? Is there something that I need to do? Or something I need to prepare for you?",
      emotion: "curious",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "I've made up my mind. I'm staying as CEO.",
      emotion: "confident",
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "Great! You are the heart of this company, Jules. No one else can do what you do.",
      emotion: "happy",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "It wasn't an easy decision. But I realized I don't need someone else to validate what I have built.",
      emotion: "empowered",
    },
    {
      character: ROLES.CAMERON.id,
      type: "dialog",
      text: "Trust me, the investors will be happy to hear this. And honestly, I think it's the right decision. No one understands this company like you do.",
      emotion: "supportive",
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "Thanks, Cameron. I appreciate your support. Let's discuss the new plan as I arrive at the office!",
      emotion: "energized",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Mematikan telefonnya dan memasang wajah bahagia didepan Ben",
      emotion: null,
    },
    {
      character: ROLES.JULES_OSTIN.id,
      type: "dialog",
      text: "That felt good. It's time to show everyone why this company is where it is.",
      emotion: "determined",
    },
    {
      character: ROLES.BEN_WHITTAKER.id,
      type: "dialog",
      text: "That's the spirit, Jules. You've got this.",
      emotion: "proud",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "stage_direction",
      text: "Jules senyum dan sekarang dia semakin percaya diri untuk melanjutkan mimpinya menjadi CEO",
      emotion: null,
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "And so, Jules made her decision... Not to step back, But to step forward with renewed confidence.",
      emotion: "triumphant",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "She learned that leadership wasn't about doing everything herself but about trusting the team she built and believing in her own vision.",
      emotion: "wise",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "Ben's journey as a senior intern turned out to be so much more than a job. It was a chance to connect, to guide, and to remind Jules of the strength she already possessed.",
      emotion: "reflective",
    },
    {
      character: ROLES.NARRATOR.id,
      type: "narration",
      text: "In the end, For Jules, Ben, and everyone involved, it was more than a workplace. It was a place to grow, to heal, and to thrive.",
      emotion: "hopeful",
    },
  ],

  stage_directions: {
    initial_setup: "Park bench near the office",
    lighting: "Natural daylight",
    mood: "Intimate and contemplative, then triumphant",
  },

  emotional_arc: {
    start: "vulnerability and doubt",
    middle: "reflection and support",
    end: "empowerment and determination",
  },

  themes: {
    primary: "Self-belief and empowerment",
    secondary: "Mentorship and support",
    resolution: [
      "Personal strength",
      "Leadership growth",
      "Value of experience",
    ],
  },

  resolution_notes: {
    character_growth: "Jules finds her confidence and true leadership voice",
    relationships: "Ben proves the value of experience and wisdom",
    story_closure:
      "Both professional and personal challenges are faced with renewed strength",
  },
};
