import { KittenPhoto, LoveLetter, GiftItem, ReasonItem, SecretMessageItem, ScrapbookPhoto, QuizQuestion } from '../types';

// Curated high quality stable Unsplash kitten photos
export const KITTEN_GALLERY: KittenPhoto[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    caption: 'Literally Dhruvi looking for attention 🥺',
    category: 'portrait',
    categoryLabel: 'Looking into Camera',
    sweetNote: 'That exact look you give me when you want kisses!'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    caption: 'My little sleepyhead taking her 5th nap of the day 💤',
    category: 'sleepy',
    categoryLabel: 'Sleepy Kittens',
    sweetNote: 'Wake up sleepy princess, someone is thinking of you!'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    caption: 'Certified cutie pie wearing cool vibes 🎀',
    category: 'bows',
    categoryLabel: 'Wearing Bows',
    sweetNote: 'The most stylish princess in all 9 realms.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    caption: 'Orange fluffy baby waiting for treats 🐾',
    category: 'orange',
    categoryLabel: 'Orange Fluffy',
    sweetNote: 'Just like you waiting for chocolates!'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=800&q=80',
    caption: 'Tiny white snowball kitten cuddling tightly ❄️',
    category: 'white',
    categoryLabel: 'Tiny White',
    sweetNote: 'Pure, precious, and 100% squishable.'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80',
    caption: 'Someone needs unlimited cuddles immediately 🧸',
    category: 'teddy',
    categoryLabel: 'Hugging Plushies',
    sweetNote: 'Sending emergency virtual cuddles right now!'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    caption: 'Tucked inside cozy blankets like a tiny burrito 🌯',
    category: 'blanket',
    categoryLabel: 'Sleeping in Blankets',
    sweetNote: 'Stay warm, cozy and safe my baby.'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    caption: 'If "I didn’t do it" was a face 😇',
    category: 'funny',
    categoryLabel: 'Funny Expressions',
    sweetNote: 'Your face whenever you pretend you were innocent!'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80',
    caption: 'Kitten admiring pretty pink petals 🌸',
    category: 'flowers',
    categoryLabel: 'Holding Flowers',
    sweetNote: 'Still not half as pretty as you, Dhruvi.'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80',
    caption: 'Found the coziest cardboard fortress 📦',
    category: 'box',
    categoryLabel: 'Cardboard Boxes',
    sweetNote: 'If it fits, Dhruvi sits!'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
    caption: 'Tiny baby energy in a tiny kitten body 🍼',
    category: 'white',
    categoryLabel: 'Tiny White',
    sweetNote: 'You will always be my little baby, no matter how big you grow.'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80',
    caption: 'This face deserves the entire universe 🪐',
    category: 'portrait',
    categoryLabel: 'Looking into Camera',
    sweetNote: 'I would conquer 500 galaxies just to see you smile.'
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80',
    caption: 'My favourite little troublemaker making a scene 😼',
    category: 'funny',
    categoryLabel: 'Funny Expressions',
    sweetNote: 'Troublemaker, but specifically MY favourite troublemaker.'
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=800&q=80',
    caption: 'Soft golden fur basking in warm morning sunlight ☀️',
    category: 'orange',
    categoryLabel: 'Orange Fluffy',
    sweetNote: 'You bring warmth into every single day of my life.'
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80',
    caption: 'Ready for princess high tea and desserts 🍰',
    category: 'bows',
    categoryLabel: 'Wearing Bows',
    sweetNote: 'Only royal cupcakes for her Royal Highness Dhruvi.'
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=800&q=80',
    caption: 'Deepest snuggles under the duvet 🛌',
    category: 'blanket',
    categoryLabel: 'Sleeping in Blankets',
    sweetNote: 'Wish I was holding you in my arms right now.'
  },
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&w=800&q=80',
    caption: 'Sniffing spring blossoms and daisies 🌼',
    category: 'flowers',
    categoryLabel: 'Holding Flowers',
    sweetNote: 'A bouquet of flowers for the sweetest girl in town.'
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?auto=format&fit=crop&w=800&q=80',
    caption: 'Holding tight to teddy bear bestie 🧸',
    category: 'teddy',
    categoryLabel: 'Hugging Plushies',
    sweetNote: 'Never let go of your softness and playful heart.'
  },
  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80',
    caption: 'Poking tiny head out of secret hiding spot 🐾',
    category: 'box',
    categoryLabel: 'Cardboard Boxes',
    sweetNote: 'Peek-a-boo! I see someone unbelievably pretty.'
  },
  {
    id: 20,
    url: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?auto=format&fit=crop&w=800&q=80',
    caption: 'Sleepy yawn of pure contentment 🥱✨',
    category: 'sleepy',
    categoryLabel: 'Sleepy Kittens',
    sweetNote: 'Rest easy, my angel. You are loved beyond words.'
  }
];

export const LOVE_LETTERS: LoveLetter[] = [
  {
    id: 1,
    title: 'OPEN WHEN YOU MISS ME',
    sealColor: '#FF6B8B',
    envelopeBg: 'from-pink-100 to-rose-200',
    icon: '💌',
    content: [
      'Dear Dhruvi,',
      "If you're reading this because you miss me, imagine me pulling you into the warmest hug ever.",
      'I wish I could teleport right now, hold your hands, kiss your forehead and remind you how much you mean to me.',
      'Until then, consider this letter a tiny hug delivered straight to your heart.'
    ],
    signoff: 'Mwahhhhh! ❤️'
  },
  {
    id: 2,
    title: 'OPEN WHEN YOU FEEL SAD',
    sealColor: '#93C5FD',
    envelopeBg: 'from-blue-100 to-indigo-200',
    icon: '🧸',
    content: [
      'My little baby,',
      "You don't have to pretend to be okay all the time.",
      "It's okay to have difficult days. It's okay to feel overwhelmed. You don't always need to figure everything out.",
      'I hope you remember that you deserve kindness, patience and understanding.',
      "I'm always rooting for your happiness, Dhruvi."
    ],
    signoff: 'Sending you the biggest virtual hug. 🧸'
  },
  {
    id: 3,
    title: 'OPEN WHEN YOU NEED A SMILE',
    sealColor: '#FDE047',
    envelopeBg: 'from-amber-100 to-pink-200',
    icon: '✨',
    content: [
      'HEY YOUUU!!',
      'Why are you reading this with that adorable face? 😭',
      'Smile immediately!',
      'You are ridiculously cute, unnecessarily adorable and probably the biggest distraction in my entire universe.',
      'Now go drink some water and give yourself a little smile.'
    ],
    signoff: 'Mwah! 💋'
  },
  {
    id: 4,
    title: "OPEN WHEN YOU CAN'T SLEEP",
    sealColor: '#C084FC',
    envelopeBg: 'from-purple-100 to-pink-200',
    icon: '🌙',
    content: [
      'My sleepy princess,',
      'Put your worries aside for a moment.',
      'Imagine a tiny kitten sleeping beside you, a warm blanket around you, and the entire world becoming quiet.',
      'I hope you sleep peacefully and wake up with the prettiest smile.'
    ],
    signoff: 'Goodnight, my little baby. 🌙'
  },
  {
    id: 5,
    title: 'OPEN WHEN YOU FORGET HOW SPECIAL YOU ARE',
    sealColor: '#F472B6',
    envelopeBg: 'from-rose-100 to-pink-300',
    icon: '👑',
    content: [
      'Dhruvi,',
      'You are more precious than you probably realize.',
      'Your little habits, your expressions, your laughter, your silly moments and the smallest things about you make you special.',
      'Never underestimate how much happiness you bring into my life.',
      'You deserve beautiful things, beautiful moments and endless love.',
      'Never forget that. ❤️'
    ],
    signoff: 'Forever your biggest admirer. 💖'
  }
];

export const MYSTERY_GIFTS: GiftItem[] = [
  {
    id: 1,
    title: 'Gift of Warmth',
    boxColor: 'bg-rose-200 border-rose-300',
    ribbonColor: 'bg-rose-500',
    icon: '🧸',
    unlockedTitle: 'THE VIRTUAL HUG',
    message: "Come here, little baby. Here's the biggest hug in the universe! Wrapping my arms around you so tightly, you can feel all my warmth.",
    type: 'hug'
  },
  {
    id: 2,
    title: 'Gift of Sweetness',
    boxColor: 'bg-pink-200 border-pink-300',
    ribbonColor: 'bg-pink-500',
    icon: '💋',
    unlockedTitle: 'UNLIMITED KISSES',
    message: "Mwahhhhh! Mwahhhhh! Mwahhhhh! 💋 Forehead kisses, cheek kisses, nose boops, and butterfly kisses just for you!",
    type: 'kisses'
  },
  {
    id: 3,
    title: 'Sweet Tooth Heaven',
    boxColor: 'bg-amber-100 border-amber-300',
    ribbonColor: 'bg-amber-600',
    icon: '🍫',
    unlockedTitle: 'CHOCOLATE HEAVEN',
    message: "Your personal chocolate supply. Unfortunately, virtual. Fortunately, unlimited. Strawberries dipped in chocolate, cupcakes, and truffle candies!",
    type: 'chocolates'
  },
  {
    id: 4,
    title: 'Sparkle Box',
    boxColor: 'bg-purple-200 border-purple-300',
    ribbonColor: 'bg-purple-500',
    icon: '💬',
    unlockedTitle: 'THE COMPLIMENT MACHINE',
    message: "Press the button inside for infinite reasons why you're a masterpiece!",
    type: 'compliments'
  },
  {
    id: 5,
    title: 'Fairy Tale Relic',
    boxColor: 'bg-sky-200 border-sky-300',
    ribbonColor: 'bg-sky-500',
    icon: '🪞',
    unlockedTitle: 'THE MAGIC MIRROR',
    message: "Mirror, mirror on the screen, who's the cutest girl I've ever seen? Answer: Dhruvi. Obviously. No competition.",
    type: 'mirror'
  },
  {
    id: 6,
    title: 'Enchanted Mystery',
    boxColor: 'bg-gradient-to-r from-gray-900 to-pink-900 border-pink-400',
    ribbonColor: 'bg-pink-400',
    icon: '✨',
    unlockedTitle: 'THE SECRET GIFT',
    message: "If I could choose my favourite person in every universe, I'd still choose you. Every single time, in every timeline, without hesitation.",
    type: 'secret'
  }
];

export const COMPLIMENT_POOL: string[] = [
  "You're my favourite notification on my phone.",
  "Your smile is my favourite view in the entire galaxy.",
  "You're cuter than every single kitten on this planet combined.",
  "You make ordinary, boring days feel like magical holidays.",
  "You're my favourite little human to ever walk this Earth.",
  "Hearing your voice instantly fixes whatever kind of day I'm having.",
  "The way you scrunch your nose when laughing is criminally cute.",
  "Your little dramatic sighs are 10/10 Oscar worthy.",
  "You have the sweetest, gentlest heart, Dhruvi.",
  "You're the prettiest distraction in my life."
];

export const FIFTY_REASONS: ReasonItem[] = [
  { id: 1, reason: "Your adorable smile that lights up my whole world.", emoji: "✨" },
  { id: 2, reason: "Your silly expressions when you're caught off guard.", emoji: "😋" },
  { id: 3, reason: "Your little dramatic tantrums that are impossibly cute.", emoji: "🥺" },
  { id: 4, reason: "Your sweet, cute voice that calms all my chaos.", emoji: "🎶" },
  { id: 5, reason: "The way you get excited about tiny little things.", emoji: "🎀" },
  { id: 6, reason: "Your sleepy face when you just woke up and rub your eyes.", emoji: "💤" },
  { id: 7, reason: "Your random, hilarious stories that make zero sense.", emoji: "📖" },
  { id: 8, reason: "Your adorable, charming, unforgettable personality.", emoji: "🌸" },
  { id: 9, reason: "Your laughter that is the best music I have ever heard.", emoji: "💖" },
  { id: 10, reason: "The way you turn ordinary, mundane moments into pure magic.", emoji: "🪄" },
  { id: 11, reason: "Your little dramatic gasps when something unexpected happens.", emoji: "🫢" },
  { id: 12, reason: "Your big, beautiful, caring heart.", emoji: "❤️" },
  { id: 13, reason: "Your sweet innocence, playfulness, and childlike wonder.", emoji: "🧸" },
  { id: 14, reason: "Your effortless ability to make me smile without even trying.", emoji: "😊" },
  { id: 15, reason: "Simply because you're Dhruvi, and there's no one else like you.", emoji: "👑" },
  { id: 16, reason: "The way you hold onto things tightly when you love them.", emoji: "🤝" },
  { id: 17, reason: "The funny nicknames you come up with.", emoji: "🍯" },
  { id: 18, reason: "Your soft cheeks that deserve endless gentle squishes.", emoji: "🥟" },
  { id: 19, reason: "How you look in oversized comfy hoodies.", emoji: "👕" },
  { id: 20, reason: "Your taste in cute things, kittens, and sweets.", emoji: "🧁" },
  { id: 21, reason: "The way your eyes sparkle when you're genuinely happy.", emoji: "🌟" },
  { id: 22, reason: "How you pretend to be mad for 3 seconds before giggling.", emoji: "🤭" },
  { id: 23, reason: "Your warmth and kindness to everyone around you.", emoji: "🌻" },
  { id: 24, reason: "The cute little habits you have without even realizing.", emoji: "🐾" },
  { id: 25, reason: "The way you send me memes or cute reels.", emoji: "📱" },
  { id: 26, reason: "Your hugs that feel like coming home after a long journey.", emoji: "🏡" },
  { id: 27, reason: "How deeply you care about the people you love.", emoji: "💌" },
  { id: 28, reason: "The way you pronounce certain words with extra cuteness.", emoji: "💬" },
  { id: 29, reason: "Your endless curiosity about the world.", emoji: "🔭" },
  { id: 30, reason: "How you make me feel like the luckiest person alive.", emoji: "🍀" },
  { id: 31, reason: "Your gentle reminder to take a break and breathe.", emoji: "☕" },
  { id: 32, reason: "The way you snuggle when you're tired.", emoji: "🛌" },
  { id: 33, reason: "How you look when you're concentrating on something.", emoji: "🧠" },
  { id: 34, reason: "Your silly little dance moves when your favorite song plays.", emoji: "💃" },
  { id: 35, reason: "The cute pout you make when teasing me.", emoji: "😚" },
  { id: 36, reason: "Your thoughtful advice whenever I need a listening ear.", emoji: "🕊️" },
  { id: 37, reason: "The sweet goodnight texts that make me sleep peacefully.", emoji: "🌙" },
  { id: 38, reason: "Your courage to face challenges even when you're scared.", emoji: "🦁" },
  { id: 39, reason: "The way you love chocolates and desserts with your whole soul.", emoji: "🍫" },
  { id: 40, reason: "How you brighten up any room the moment you enter it.", emoji: "💡" },
  { id: 41, reason: "Your lovely hand that fits so perfectly in mine.", emoji: "🤲" },
  { id: 42, reason: "The fact that thinking of you always makes my chest feel warm.", emoji: "🔥" },
  { id: 43, reason: "Your pure, genuine reaction to pleasant surprises.", emoji: "🎁" },
  { id: 44, reason: "How you never lose that playful spark inside of you.", emoji: "🎈" },
  { id: 45, reason: "The way you care about animals and little furry creatures.", emoji: "🐱" },
  { id: 46, reason: "Your beautiful soul that shines brighter than the stars.", emoji: "✨" },
  { id: 47, reason: "How you can be completely yourself with me.", emoji: "🦋" },
  { id: 48, reason: "The promise of all the future adventures waiting for us.", emoji: "🗺️" },
  { id: 49, reason: "Because every love song suddenly makes sense when I look at you.", emoji: "🎵" },
  { id: 50, reason: "Because you are, and always will be, my forever favourite human.", emoji: "💍" }
];

export const HIDDEN_SECRETS: SecretMessageItem[] = [
  {
    id: 1,
    hint: 'Behind a tiny paw in the Kitten Gallery',
    location: 'Kitten Gallery Paw',
    message: "Pssttt Dhruvi... you're the prettiest little distraction in my life.",
    icon: '🐾'
  },
  {
    id: 2,
    hint: 'A secret glowing star tucked in the footer',
    location: 'Footer Star',
    message: "If I could pause one moment, it would be one where you're smiling.",
    icon: '⭐'
  },
  {
    id: 3,
    hint: 'A clickable teddy bear near the hero badge',
    location: 'Hero Teddy',
    message: "I wish I could steal a thousand more cheek kisses from you.",
    icon: '🧸'
  },
  {
    id: 4,
    hint: 'A delicate pink daisy hidden in the header banner',
    location: 'Header Flower',
    message: "You don't have to be perfect to be my favourite person.",
    icon: '🌸'
  },
  {
    id: 5,
    hint: 'A mini mystery envelope tucked inside the 50 reasons',
    location: '50 Reasons Letter',
    message: "One little secret: I still get excited thinking about you.",
    icon: '💌'
  },
  {
    id: 6,
    hint: 'A tiny paw-print trail near the hug station',
    location: 'Hug Station Trail',
    message: "You are my favourite notification, my favourite hello and my favourite goodnight.",
    icon: '🐾'
  },
  {
    id: 7,
    hint: 'A dreamy cloud floating above the Childhood Room',
    location: 'Childhood Cloud',
    message: "Even on your most ordinary days, you're extraordinary to me.",
    icon: '☁️'
  },
  {
    id: 8,
    hint: 'A sweet cupcake sticker in the virtual date night',
    location: 'Date Night Cupcake',
    message: "Congratulations! You've discovered another reason why you're loved.",
    icon: '🧁'
  },
  {
    id: 9,
    hint: 'A secret sparkle next to the giant love button',
    location: 'Love Button Sparkle',
    message: "Come closer, baby. Imagine me giving you a forehead kiss.",
    icon: '✨'
  },
  {
    id: 10,
    hint: 'A pastel ribbon bow hidden in the scrapbook',
    location: 'Scrapbook Bow',
    message: "Somewhere in this universe, there's a person smiling because you exist. It's me.",
    icon: '🎀'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "1. Who is officially the cutest girl in this entire universe?",
    options: ["A cute fluffy kitten", "Dhruvi (The Little Princess)", "A baby panda", "Sleeping beauty"],
    correctAnswer: "Dhruvi (The Little Princess)",
    reaction: "CORRECT! Was there ever even a question?! 😭👑"
  },
  {
    question: "2. Who deserves unlimited cuddles, hugs and pampering 24/7?",
    options: ["Dhruvi (My Baby)", "A giant teddy bear", "Nobody else", "Dhruvi again!"],
    correctAnswer: "Dhruvi (My Baby)",
    reaction: "Spot on! Unlimited cuddle pass granted forever! 🧸❤️"
  },
  {
    question: "3. Who is someone's absolute favourite notification on their phone?",
    options: ["Instagram likes", "Dhruvi's texts & calls", "Food delivery app", "Game alerts"],
    correctAnswer: "Dhruvi's texts & calls",
    reaction: "YESSS! Nothing makes my screen glow brighter! 📱✨"
  },
  {
    question: "4. Who deserves a lifetime supply of virtual and real chocolates?",
    options: ["Dhruvi", "Princess Dhruvi", "Little Baby Dhruvi", "All of the above (Dhruvi)"],
    correctAnswer: "All of the above (Dhruvi)",
    reaction: "Deliciously true! Sweet treats forever for my girl! 🍫🍓"
  },
  {
    question: "5. Who is loved endlessly, yesterday, today, and for every tomorrow?",
    options: ["Dhruvi, always and forever", "Dhruvi in this universe", "Dhruvi in all universes", "All the Dhruvis in the multiverse"],
    correctAnswer: "Dhruvi, always and forever",
    reaction: "100/100! Endlessly, unconditionally, irrevocably! 💖"
  }
];

export const SCRAPBOOK_INITIAL: ScrapbookPhoto[] = [
  {
    id: 1,
    title: 'Our Little Universe',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=700&q=80',
    date: 'A Golden Memory',
    caption: 'Our little universe filled with laughter and warmth.',
    rotation: -2
  },
  {
    id: 2,
    title: 'My Favourite Memory',
    url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=80',
    date: 'Under The Sunset Sky',
    caption: 'One of those days I wish I could replay on loop.',
    rotation: 3
  },
  {
    id: 3,
    title: 'One of My Favourite Humans',
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=80',
    date: 'Sweet Moments',
    caption: 'Holding hands and making goofy faces.',
    rotation: -1
  },
  {
    id: 4,
    title: 'Forever My Cutie Pie',
    url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80',
    date: 'Princess Hour',
    caption: 'Looking effortlessly adorable as always.',
    rotation: 2
  },
  {
    id: 5,
    title: 'Moments Worth Keeping',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    date: 'Unfiltered Joy',
    caption: 'Pure smiles, innocent laughter, and warm coffee.',
    rotation: -3
  },
  {
    id: 6,
    title: 'Candid Smiles',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    date: 'Happy Afternoon',
    caption: 'Caught mid-laugh, the prettiest sight.',
    rotation: 1
  },
  {
    id: 7,
    title: 'Little Adventures',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80',
    date: 'Strolling Together',
    caption: 'Every journey is better when shared with you.',
    rotation: -2
  },
  {
    id: 8,
    title: 'Warm Hugs & Good Vibes',
    url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=700&q=80',
    date: 'Cozy Evening',
    caption: 'Wrapped up in warmth and endless conversations.',
    rotation: 3
  },
  {
    id: 9,
    title: 'Ice Cream Dates',
    url: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=700&q=80',
    date: 'Sweet Cravings',
    caption: 'Strawberry scoops and sticky fingers.',
    rotation: -1
  },
  {
    id: 10,
    title: 'Starry Eyed Dreams',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
    date: 'Late Night Talks',
    caption: 'Talking about everything and nothing under the stars.',
    rotation: 2
  }
];

export const VIRTUAL_DATES = [
  {
    id: 'icecream',
    title: 'Virtual Ice Cream Date 🍦',
    icon: '🍨',
    bg: 'from-pink-100 to-rose-200',
    scene: 'Sitting on a pastel bench under blooming cherry blossom trees, sharing two huge scoops of strawberry gelato and chocolate drizzle.',
    dialogue: "Imagine us sitting together, sharing ice cream, laughing at the silliest things and forgetting about the rest of the world. I'd definitely let you have the cherry on top!"
  },
  {
    id: 'stargazing',
    title: 'Midnight Stargazing 🌙',
    icon: '✨',
    bg: 'from-indigo-900 to-purple-950 text-white',
    scene: 'Lying on a soft picnic blanket on a quiet grassy hill under a deep velvet sky twinkling with thousands of glowing stars and shooting meteors.',
    dialogue: "Whenever I see a shooting star, my wish is already granted because I already have you. We'd point at constellations and make up our own silly shapes."
  },
  {
    id: 'movie',
    title: 'Cozy Movie Night 🍿',
    icon: '🎬',
    bg: 'from-amber-100 to-orange-200',
    scene: 'A giant blanket fort filled with fluffy pillows, fairy lights, buttery popcorn, and watching your favorite animated film.',
    dialogue: "You'd be wrapped up like a tiny burrito in my arms, and even though the movie is playing, I'd probably spend 90% of the time just looking at your face."
  },
  {
    id: 'chocodate',
    title: 'Chocolate & Cupcake Date 🧁',
    icon: '🍫',
    bg: 'from-rose-100 to-pink-200',
    scene: 'A cute Parisian-style café table decorated with fresh pink peonies, hot cocoa with mini marshmallows, and fresh strawberry cupcakes.',
    dialogue: "Feeding you sweet chocolate truffles, wiping a tiny dab of frosting off your nose, and kissing your cheeks until you blush!"
  }
];

export const LOVE_BUTTON_MESSAGES = [
  "You're loved, baby. More than words could ever describe. ❤️",
  "Come here, let me squish your cheeks! 🥟",
  "Sending unlimited forehead kisses directly to you! 💋",
  "You're my favourite person in every timeline. 🌟",
  "Don't forget to smile, princess! It looks so pretty on you. 😊",
  "You're doing amazing, my little girl. I'm so proud of you. 🧸",
  "Mwahhhhh! Emergency cuddle package arriving in 3... 2... 1! 🚀",
  "You are 100% certified sunshine on a cloudy day. ☀️",
  "Drink some water, take a deep breath, and remember I adore you. 💧",
  "If cuteness was a crime, you would be serving a life sentence without parole. 🚨"
];

export const MASCOT_QUOTES = [
  "Meowww! Dhruvi is officially the queen of this wonderland! 👑",
  "Psst! Have you checked behind the kitten gallery yet? 🐾",
  "Purrrrr... Sending you a warm fuzzy paw boop! 🐾",
  "I'm Dhruvi's personal bodyguard kitty! 😼",
  "Did you know? You have the prettiest smile in the universe! ✨",
  "Don't forget to open all the mystery gifts! 🎁"
];

