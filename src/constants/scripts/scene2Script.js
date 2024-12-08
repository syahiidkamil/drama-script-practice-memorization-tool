import { SCENES } from "../scenes";

export const SCENE_2_SCRIPT = {
  id: "SCRIPT_" + SCENES.SCENE_2.id,
  sceneId: SCENES.SCENE_2.id,
  title: SCENES.SCENE_2.title,
  description: SCENES.SCENE_2.description,
  location: SCENES.SCENE_2.location,
  characters: SCENES.SCENE_2.characters,
  props: SCENES.SCENE_2.props,

  dialog: [
    {
      character: "NARRATOR",
      type: "narration",
      text: "After arriving in his house, Ben submitted his job application … And then after several days … Finally, he got the good news about it … He passed the test! And today will be his first day as the senior intern …",
      emotion: "upbeat",
      note: "Use enthusiastic tone especially for 'He passed the test!'",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Ben berjalan dengan percaya diri masuk ke dalam ruangan dan duduk di kursinya. Ben mengeluarkan barang barang yang dia bawa sambil melihat rekan rekannya.",
      emotion: null,
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Jason nyamperin Ben yang ada di mejanya",
      emotion: null,
    },
    {
      character: "JASON",
      type: "dialog",
      text: "Hey, Ben! Welcome aboard. I'm Jason. I'm a Junior Project Manager in here",
      emotion: "friendly",
      pronunciation: {
        words: [
          {
            text: "aboard",
            ipa: "/əˈbɔːrd/",
          },
        ],
      },
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Nice to meet you, Jason.",
      emotion: "polite",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "Your face looks slightly worried… Calm down Ben! You are gonna fit right in here. Trust me, the office is not as scary as it seems. Just don't let the techy stuff throw you off. You will catch up quickly.",
      emotion: "reassuring",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "I'll manage, I just need a bit of time to catch up.",
      emotion: "determined",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "Well, if you need anything, I'm here. I'll be the one who gives you the grand tour!",
      emotion: "enthusiastic",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Jason ngacungin jempol sebelum pergi",
      emotion: null,
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Becky nyamperin Ben",
      emotion: null,
    },
    {
      character: "BECKY",
      type: "dialog",
      text: "So, how's it going, Ben? Getting used to the tech world?",
      emotion: "friendly",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Ben senyum",
      emotion: null,
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "It's a lot to take in, but I'm managing. The younger generation is faster with their gadgets.",
      emotion: "humble",
    },
    {
      character: "BECKY",
      type: "dialog",
      text: "Yeah, but you've got something they don't – years of experience. Trust me, that counts for a lot around here. Don't let the tech overwhelm you. We all learn at our own pace.",
      emotion: "supportive",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Jason nyamperin lagi sambil bawa laptop atau tab",
      emotion: null,
    },
    {
      character: "BECKY",
      type: "dialog",
      text: "Jason, are you sure you're the right person to introduce Ben to Jules? Remember the last time you made someone nervous?",
      emotion: "concerned",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "Come on, Becky. I'm just being honest. Ben deserves to know what he is walking into.",
      emotion: "defensive",
    },
    {
      character: "BECKY",
      type: "dialog",
      text: "You mean scaring him for fun.",
      emotion: "skeptical",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "Hey, it's not scaring—it's preparing!",
      emotion: "playful",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "I will take you to the CEO's room, she is nice but sometimes she's crazy, so you have to be careful when you are around her, Ben. Let's go!",
      emotion: "cautionary",
      stage_direction: "Jason menghadap ke Ben",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Ben berjalan ke ruangan jules",
      emotion: null,
    },
    {
      character: "JASON",
      type: "dialog",
      text: "This is Jules's room, good luck man!!",
      emotion: "encouraging",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Thank you!",
      emotion: "grateful",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Sampe depan ruangan Jason pergi",
      emotion: null,
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Hi, I'm Ben Whittaker, your new intern.",
      emotion: "confident",
    },
    {
      character: "JULES_OSTIN",
      type: "dialog",
      text: "Ben, I'm going to be honest. I'm not sure how much I'll have for you to do.",
      emotion: "direct",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "That's fine. I'm here to learn and help.",
      emotion: "accommodating",
    },
    {
      character: "JULES_OSTIN",
      type: "dialog",
      text: "Listen, ben. I'm not the type of person who can rely on others and I don't want you to push yourself too hard!",
      emotion: "assertive",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "That's fine!",
      emotion: "understanding",
    },
    {
      character: "JULES_OSTIN",
      type: "dialog",
      text: "Okay you can leave this room, Ben!",
      emotion: "dismissive",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Ben jalan keluar ruangan",
      emotion: null,
    },
    {
      character: "BECKY",
      type: "dialog",
      text: "Ok, Ben, You have to pack your things as soon as possible Because you have to accompany Jules to interview the candidate for the new CEO.",
      emotion: "urgent",
    },
    {
      character: "JASON",
      type: "dialog",
      text: "And trust me, Ben, This is going to be one of the most intense interviews you have ever seen! Jules doesn't hold back.",
      emotion: "warning",
    },
    {
      character: "BEN_WHITTAKER",
      type: "dialog",
      text: "Ok, Becky! Thanks for the heads up, Jason!",
      emotion: "composed",
    },
    {
      character: "NARRATOR",
      type: "stage_direction",
      text: "Buru buru packing barang tapi Ben tetep kalem",
      emotion: null,
    },
  ],

  stage_directions: {
    initial_setup:
      "Office setting with Ben's desk area and Jules's office visible",
    lighting: "Bright office lighting",
    mood: "Professional office environment with touches of nervous energy",
  },

  pronunciation_notes: {
    key_phrases: [
      {
        text: "Project Manager",
        ipa: "/ˈprɒdʒekt ˈmænɪdʒər/",
        emphasis: "Stress on 'pro' and 'man'",
      },
      {
        text: "intern",
        ipa: "/ˈɪntɜːn/",
        emphasis: "Stress on first syllable",
      },
    ],
  },

  emotional_arc: {
    start: "nervous anticipation",
    middle: "growing confidence",
    end: "composed determination",
  },
};
