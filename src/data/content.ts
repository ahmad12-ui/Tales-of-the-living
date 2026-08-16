/* =============================================================
   TALES OF THE LIVING — CONTENT DATA
   -------------------------------------------------------------
   ⚠️  DEMO / PLACEHOLDER CONTENT
   Every entry below is sample content used to demonstrate the
   layout. Replace the `IMAGES` URLs with your own photography and
   swap the `stories` / `videos` / `facts` arrays with your real
   published episodes. Nothing here should be treated as verified
   editorial content.
   ============================================================= */

const px = (id: number, ext: "jpeg" | "png" = "jpeg", w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}`;

/** Swap these with your own asset URLs (e.g. /images/hero.jpg). */
export const IMAGES = {
  hero: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/hero.jpeg",
  heroAlt: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/heri-alt.jpeg",
  introEditorial: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/intro-editorial.jpeg",
  featuredCattle: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/feautred%20cattle.jpg",
  storytelling: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/story%20telling.jpg",
  aboutPortrait: px(33900116, "jpeg", 1400),
  aboutWide: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/about-wide.jpeg",
  contactWide: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/contact%20wide.jpg?updatedAt=1786888341984",
  storiesHero: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/stories%20hero.jpg",
  exploreHero: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/explore%20hero.jpg",
  tiger: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/tiger.jpg",
  bee: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/bee.jpeg",
  elephant: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/elephant.jpg?updatedAt=1786888350357",
  peacock: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/peacoock.jpeg",
  peacockClose: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/peacocok-close.jpeg",
  cowsIndia: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/cover%20india.jpg?updatedAt=1786888350196",
  cowsPair: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/cow%20pair.jpg?updatedAt=1786888351427",
  banyan: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/banyan%20tree.jpg?updatedAt=1786888352718",
  canopy: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/canopy.jpg?updatedAt=1786888351000",
  sequoia: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/sequio.jpg",
  mangoTree: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/mangoes.jpeg",
  mangoes: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/amouintmango.jpg?updatedAt=1786888349930",
  mangoOrchard: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/orchard-mango.jpeg",
  butterfly: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/butterfly.jpg",
  butterflies: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/pair-butterflies.jpeg",
  birdsSunset: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/birdsunset.jpg",
  birdsEvening: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/birdevening.jpg",
  wetland: "https://ik.imagekit.io/rnegdq5vb/Tales%20of%20the%20living/wet%20land.jpg",
} as const;

export type CategoryId =
  | "animals"
  | "birds"
  | "cattle"
  | "plants"
  | "fruits"
  | "insects"
  | "nature";

export interface Category {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
  image: string;
  accent: string;
}

export const categories: Category[] = [
  {
    id: "animals",
    name: "Animals",
    short: "Animals",
    description:
      "From the smallest mammals to the giants of the plains — behaviour, habitat and survival.",
    image: IMAGES.elephant,
    accent: "Wild & Domestic",
  },
  {
    id: "birds",
    name: "Birds",
    short: "Birds",
    description:
      "Feathers, flight, calls and migration — the stories written across our skies.",
    image: IMAGES.peacock,
    accent: "Flight & Song",
  },
  {
    id: "cattle",
    name: "Cattle & Livestock",
    short: "Cattle",
    description:
      "Indigenous breeds, farming traditions and the animals that shaped rural life.",
    image: IMAGES.cowsIndia,
    accent: "Breeds & Heritage",
  },
  {
    id: "plants",
    name: "Plants & Trees",
    short: "Plants",
    description:
      "Ancient trees, quiet growth and the green architecture that holds the world together.",
    image: IMAGES.banyan,
    accent: "Roots & Canopy",
  },
  {
    id: "fruits",
    name: "Fruits",
    short: "Fruits",
    description:
      "Where our food begins — varieties, seasons, origins and the science of ripening.",
    image: IMAGES.mangoTree,
    accent: "Origins & Varieties",
  },
  {
    id: "insects",
    name: "Insects",
    short: "Insects",
    description:
      "The tiny engineers of every ecosystem — pollinators, builders and travellers.",
    image: IMAGES.butterfly,
    accent: "Small & Mighty",
  },
  {
    id: "nature",
    name: "Nature & Ecosystems",
    short: "Nature",
    description:
      "Forests, wetlands and grasslands — how living things connect into one system.",
    image: IMAGES.wetland,
    accent: "Systems & Balance",
  },
];

export const categoryMap: Record<CategoryId, Category> = categories.reduce(
  (acc, c) => ({ ...acc, [c.id]: c }),
  {} as Record<CategoryId, Category>,
);

export interface Story {
  id: string;
  title: string;
  category: CategoryId;
  excerpt: string;
  image: string;
  readTime: string;
  watchTime?: string;
  published: string; // ISO date — demo values
  popularity: number; // demo ranking signal
  hasVideo: boolean;
  tags: string[];
}

/** DEMO STORIES — replace with your published episodes. */
export const stories: Story[] = [
  {
    id: "sahiwal-cattle",
    title: "The Remarkable Sahiwal Cow",
    category: "cattle",
    excerpt:
      "A heat-tolerant breed from the Indian subcontinent, valued by farming families for generations. We trace its names, its home and why it matters.",
    image: IMAGES.cowsPair,
    readTime: "8 min read",
    watchTime: "9:42",
    published: "2026-02-14",
    popularity: 98,
    hasVideo: true,
    tags: ["Sahiwal", "Breeds", "Livestock", "Punjab"],
  },
  {
    id: "secret-life-peacock",
    title: "The Secret Life of a Peacock",
    category: "birds",
    excerpt:
      "Behind the famous display is a bird with a complex social life, a startling call and a habitat that stretches across South Asia.",
    image: IMAGES.peacockClose,
    readTime: "6 min read",
    watchTime: "7:15",
    published: "2026-02-08",
    popularity: 94,
    hasVideo: true,
    tags: ["Peafowl", "Display", "South Asia"],
  },
  {
    id: "mango-varieties",
    title: "Why Do Mangoes Have So Many Varieties?",
    category: "fruits",
    excerpt:
      "Hundreds of named cultivars, one ancient tree. A story of grafting, geography and generations of careful selection.",
    image: IMAGES.mangoes,
    readTime: "7 min read",
    watchTime: "6:30",
    published: "2026-02-02",
    popularity: 91,
    hasVideo: true,
    tags: ["Mango", "Cultivars", "Orchards"],
  },
  {
    id: "how-trees-communicate",
    title: "How Trees Communicate",
    category: "plants",
    excerpt:
      "Researchers continue to study how trees exchange signals below ground. Here is what the science suggests — and what remains an open question.",
    image: IMAGES.canopy,
    readTime: "9 min read",
    published: "2026-01-27",
    popularity: 88,
    hasVideo: false,
    tags: ["Forests", "Roots", "Research"],
  },
  {
    id: "hidden-world-butterflies",
    title: "The Hidden World of Butterflies",
    category: "insects",
    excerpt:
      "Four lives in one: egg, caterpillar, chrysalis, wing. A close look at metamorphosis and the plants butterflies depend on.",
    image: IMAGES.butterflies,
    readTime: "5 min read",
    watchTime: "5:48",
    published: "2026-01-19",
    popularity: 85,
    hasVideo: true,
    tags: ["Metamorphosis", "Pollinators"],
  },
  {
    id: "why-birds-migrate",
    title: "Why Birds Migrate",
    category: "birds",
    excerpt:
      "Thousands of kilometres, no map. What drives migration, how routes are learned, and the wetlands that make the journey possible.",
    image: IMAGES.birdsSunset,
    readTime: "8 min read",
    watchTime: "8:20",
    published: "2026-01-11",
    popularity: 83,
    hasVideo: true,
    tags: ["Migration", "Wetlands", "Navigation"],
  },
  {
    id: "elephant-memory",
    title: "The Elephant and the Long Memory",
    category: "animals",
    excerpt:
      "Herds led by matriarchs, routes remembered across decades. What field studies tell us about elephant social knowledge.",
    image: IMAGES.elephant,
    readTime: "10 min read",
    watchTime: "11:05",
    published: "2026-01-04",
    popularity: 80,
    hasVideo: true,
    tags: ["Elephants", "Herds", "Behaviour"],
  },
  {
    id: "banyan-tree",
    title: "The Banyan: A Tree That Becomes a Forest",
    category: "plants",
    excerpt:
      "Aerial roots that harden into trunks, shade that hosts a village. The banyan is less a tree than a slowly-built ecosystem.",
    image: IMAGES.banyan,
    readTime: "7 min read",
    published: "2025-12-22",
    popularity: 76,
    hasVideo: false,
    tags: ["Banyan", "Ficus", "Heritage Trees"],
  },
  {
    id: "honeybee-hive",
    title: "Inside the Honeybee's Working Day",
    category: "insects",
    excerpt:
      "Foraging routes, hive temperature, and the quiet coordination that keeps a colony alive through the seasons.",
    image: IMAGES.bee,
    readTime: "6 min read",
    watchTime: "6:12",
    published: "2025-12-15",
    popularity: 74,
    hasVideo: true,
    tags: ["Bees", "Pollination", "Colony"],
  },
  {
    id: "tiger-territory",
    title: "Reading a Tiger's Territory",
    category: "animals",
    excerpt:
      "Scratch marks, scent and silence. How a solitary predator maps hundreds of square kilometres of forest.",
    image: IMAGES.tiger,
    readTime: "9 min read",
    watchTime: "10:30",
    published: "2025-12-06",
    popularity: 72,
    hasVideo: true,
    tags: ["Tiger", "Territory", "Conservation"],
  },
  {
    id: "wetlands-alive",
    title: "Wetlands: The Quietest Ecosystem We Need Most",
    category: "nature",
    excerpt:
      "Filters, nurseries and flood buffers. Why the muddiest landscapes are among the most productive on earth.",
    image: IMAGES.wetland,
    readTime: "8 min read",
    published: "2025-11-28",
    popularity: 69,
    hasVideo: false,
    tags: ["Wetlands", "Ecosystems", "Water"],
  },
  {
    id: "cattle-of-the-subcontinent",
    title: "Indigenous Cattle of the Subcontinent",
    category: "cattle",
    excerpt:
      "Sahiwal, Red Sindhi, Tharparkar and more — a field guide to the breeds shaped by climate, culture and careful keeping.",
    image: IMAGES.cowsIndia,
    readTime: "11 min read",
    watchTime: "12:40",
    published: "2025-11-20",
    popularity: 67,
    hasVideo: true,
    tags: ["Breeds", "Zebu", "Farming"],
  },
  {
    id: "mango-grows",
    title: "How a Mango Grows",
    category: "fruits",
    excerpt:
      "From flowering panicle to ripened stone fruit — the full season of a mango tree, month by month.",
    image: IMAGES.mangoOrchard,
    readTime: "5 min read",
    watchTime: "5:05",
    published: "2025-11-10",
    popularity: 64,
    hasVideo: true,
    tags: ["Mango", "Seasons", "Growth"],
  },
  {
    id: "morning-chorus",
    title: "The Morning Chorus, Explained",
    category: "nature",
    excerpt:
      "Why so many birds sing at first light, and what the changing chorus tells us about a landscape's health.",
    image: IMAGES.birdsEvening,
    readTime: "6 min read",
    published: "2025-10-30",
    popularity: 61,
    hasVideo: false,
    tags: ["Birdsong", "Dawn", "Ecology"],
  },
];

export interface Video {
  id: string;
  title: string;
  category: CategoryId;
  duration: string;
  thumbnail: string;
  blurb: string;
}

/** DEMO VIDEOS — connect these to your YouTube / Facebook uploads. */
export const videos: Video[] = [
  {
    id: "v-sahiwal",
    title: "5 Amazing Facts About Sahiwal Cattle",
    category: "cattle",
    duration: "9:42",
    thumbnail: IMAGES.cowsIndia,
    blurb: "Dadi introduces a Sahiwal — and a story about heat, milk and heritage begins.",
  },
  {
    id: "v-peacock",
    title: "The Secret Life of the Peacock",
    category: "birds",
    duration: "7:15",
    thumbnail: IMAGES.peacock,
    blurb: "The display everyone knows, and the behaviour almost nobody talks about.",
  },
  {
    id: "v-mango",
    title: "How a Mango Grows",
    category: "fruits",
    duration: "5:05",
    thumbnail: IMAGES.mangoOrchard,
    blurb: "One season in an orchard, from first flower to the fruit in your hand.",
  },
  {
    id: "v-trees",
    title: "Why Trees Matter",
    category: "plants",
    duration: "8:33",
    thumbnail: IMAGES.sequoia,
    blurb: "Shade, soil, water and air — a quiet accounting of what a tree does.",
  },
];

/** DEMO FACTS — sample content, not verified claims. */
export const facts: { text: string; source: string; category: string }[] = [
  {
    text: "Some plants can respond to changes in their environment through chemical and electrical signalling.",
    source: "Sample fact — verify before publishing",
    category: "Plants & Trees",
  },
  {
    text: "Many indigenous cattle breeds of South Asia are noted by farmers for their tolerance of heat and humidity.",
    source: "Sample fact — verify before publishing",
    category: "Cattle & Livestock",
  },
  {
    text: "A peacock's famous 'tail' is formed by elongated upper tail covert feathers rather than the tail itself.",
    source: "Sample fact — verify before publishing",
    category: "Birds",
  },
  {
    text: "Butterflies taste with sensory receptors located on their feet, which helps them find the right host plant.",
    source: "Sample fact — verify before publishing",
    category: "Insects",
  },
  {
    text: "A single banyan tree can spread across a large area as its aerial roots thicken into new supporting trunks.",
    source: "Sample fact — verify before publishing",
    category: "Plants & Trees",
  },
  {
    text: "Wetlands are often described as natural filters because vegetation and sediment can trap pollutants.",
    source: "Sample fact — verify before publishing",
    category: "Nature & Ecosystems",
  },
];

export const journey = [
  {
    step: "01",
    title: "Curiosity",
    text: "It starts with a question — often a simple one, asked out loud.",
  },
  {
    step: "02",
    title: "Discovery",
    text: "We go looking: the field, the farm, the forest, the research.",
  },
  {
    step: "03",
    title: "Knowledge",
    text: "Names, habitat, diet, lifespan, importance — told as a story, not a list.",
  },
  {
    step: "04",
    title: "Appreciation",
    text: "You never look at that living thing the same way again.",
  },
];

export const socials = [
  { name: "YouTube", href: "https://www.youtube.com/channel/UCuXqyQYOLMdSVSLY70PL8aQ", handle: "@talesoftheliving" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61593092353873", handle: "/talesoftheliving" },
  { name: "Instagram", href: "https://www.instagram.com/tales_oftheliving/", handle: "@talesoftheliving" },
  { name: "TikTok", href: "#", handle: "@talesoftheliving" },
] as const;

export const navLinks = [
  { label: "Home", href: "#/" },
  { label: "Explore", href: "#/explore" },
  { label: "Stories", href: "#/stories" },
  { label: "About", href: "#/about" },
  { label: "Contact", href: "#/contact" },
] as const;
