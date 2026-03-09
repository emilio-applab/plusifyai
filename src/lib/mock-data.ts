export type PlushieStatus = "completed" | "processing" | "failed";
export type PlushieStyle = "Classic" | "Kawaii" | "Chibi" | "Realistic";

export interface GalleryItem {
  id: string;
  createdAt: string;
  inputImageUrl: string;
  outputImageUrl: string;
  style: PlushieStyle;
  status: PlushieStatus;
}

export interface UserStats {
  totalGenerated: number;
  creditsRemaining: number;
  plan: string;
}

export interface BeforeAfterPair {
  beforeUrl: string;
  afterUrl: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}

export interface ExampleGalleryItem {
  url: string;
  alt: string;
  label: string;
}

export const MOCK_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "plush-001",
    createdAt: "2026-03-08T10:22:00Z",
    inputImageUrl: "https://placehold.co/400x400/ffc8d6/6b3a52?text=Input+1",
    outputImageUrl: "https://placehold.co/400x400/ffb3c6/6b3a52?text=Plushie+1",
    style: "Kawaii",
    status: "completed",
  },
  {
    id: "plush-002",
    createdAt: "2026-03-07T15:45:00Z",
    inputImageUrl: "https://placehold.co/400x400/d4c8ff/3a2b6b?text=Input+2",
    outputImageUrl: "https://placehold.co/400x400/c8b3ff/3a2b6b?text=Plushie+2",
    style: "Chibi",
    status: "completed",
  },
  {
    id: "plush-003",
    createdAt: "2026-03-06T09:10:00Z",
    inputImageUrl: "https://placehold.co/400x400/fff0b3/6b5c2b?text=Input+3",
    outputImageUrl: "https://placehold.co/400x400/ffe599/6b5c2b?text=Plushie+3",
    style: "Classic",
    status: "completed",
  },
  {
    id: "plush-004",
    createdAt: "2026-03-05T18:30:00Z",
    inputImageUrl: "https://placehold.co/400x400/b3e8ff/1a4a6b?text=Input+4",
    outputImageUrl: "https://placehold.co/400x400/99d9ff/1a4a6b?text=Plushie+4",
    style: "Realistic",
    status: "completed",
  },
  {
    id: "plush-005",
    createdAt: "2026-03-04T12:00:00Z",
    inputImageUrl: "https://placehold.co/400x400/ffc8d6/6b3a52?text=Input+5",
    outputImageUrl: "https://placehold.co/400x400/ffb3c6/6b3a52?text=Plushie+5",
    style: "Kawaii",
    status: "completed",
  },
  {
    id: "plush-006",
    createdAt: "2026-03-03T08:55:00Z",
    inputImageUrl: "https://placehold.co/400x400/d4c8ff/3a2b6b?text=Input+6",
    outputImageUrl: "https://placehold.co/400x400/c8b3ff/3a2b6b?text=Plushie+6",
    style: "Chibi",
    status: "completed",
  },
];

export const MOCK_USER_STATS: UserStats = {
  totalGenerated: 12,
  creditsRemaining: 18,
  plan: "Basic",
};

export const MOCK_BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    beforeUrl: "/example/before.webp",
    afterUrl: "/example/after.webp",
    beforeAlt: "Original photo before plushie transformation",
    afterAlt: "AI-generated kawaii plushie output",
    label: "Person",
  },
  {
    beforeUrl: "https://placehold.co/600x400/d4e8c2/2a5c2a?text=Pet+Before",
    afterUrl: "https://placehold.co/600x400/d4c8ff/3a2b6b?text=Pet+Plushie",
    beforeAlt: "Photo of a pet",
    afterAlt: "Plushie version of a pet",
    label: "Pet",
  },
  {
    beforeUrl: "https://placehold.co/600x400/e8d5c2/5c4a2a?text=Family+Before",
    afterUrl: "https://placehold.co/600x400/fff0b3/6b5c2b?text=Family+Plushie",
    beforeAlt: "Photo of a family",
    afterAlt: "Plushie version of a family",
    label: "Family",
  },
];

export const MOCK_EXAMPLE_GALLERY: ExampleGalleryItem[] = [
  {
    url: "https://placehold.co/400x400/ffc8d6/6b3a52?text=Example+1",
    alt: "Kawaii plushie of a woman with curly hair",
    label: "Kawaii Style",
  },
  {
    url: "https://placehold.co/400x400/d4c8ff/3a2b6b?text=Example+2",
    alt: "Chibi plushie of a man in a suit",
    label: "Chibi Style",
  },
  {
    url: "https://placehold.co/400x400/fff0b3/6b5c2b?text=Example+3",
    alt: "Classic plushie of a golden retriever",
    label: "Pet Classic",
  },
  {
    url: "https://placehold.co/400x400/b3e8ff/1a4a6b?text=Example+4",
    alt: "Realistic plushie of a tabby cat",
    label: "Pet Realistic",
  },
  {
    url: "https://placehold.co/400x400/ffc8d6/6b3a52?text=Example+5",
    alt: "Kawaii plushie of a child",
    label: "Kids Kawaii",
  },
  {
    url: "https://placehold.co/400x400/d4c8ff/3a2b6b?text=Example+6",
    alt: "Chibi plushie of a couple",
    label: "Couple Chibi",
  },
  {
    url: "https://placehold.co/400x400/fff0b3/6b5c2b?text=Example+7",
    alt: "Classic plushie of a whole family",
    label: "Family Classic",
  },
  {
    url: "https://placehold.co/400x400/b3e8ff/1a4a6b?text=Example+8",
    alt: "Kawaii plushie of a pug",
    label: "Pet Kawaii",
  },
];
