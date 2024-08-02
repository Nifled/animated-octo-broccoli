import {
  BaseAsset,
  AssetType,
  AnyAsset,
  Kpi,
  Layout,
  DataViz,
  Storyboard,
} from "@/app/lib/types/assets";

const mockTags = [
  { id: "145456745745", name: "comms" },
  { id: "25hwehsh", name: "coverage" },
  { id: "334wtywefrhs", name: "stakeholders" },
];

const mockStats = () => {
  return [
    {
      id: "1sdfgaswerhes",
      name: "Used",
      value: `${Math.floor(Math.random() * 3000) + 1}`,
      description: "Number of times this asset has been favorited.",
    },
    { id: "2tykrtyukdst", name: "Type", value: "Universal" },
    {
      id: "3easrtuy354eh",
      name: "Pages No.",
      value: `${Math.floor(Math.random() * 10) + 1}`,
      description: "Total number of pages to be used for layout.",
    },
    { id: "4awryuaikj6jka", name: "Last Updated", value: "07/23/2024" },
  ];
};

const mockQuestions = [
  {
    id: "1asfrt2a3r236tyreasdfg",
    question: "What is the purpose of this layout?",
    answer: "Answer to short description of the item goes nicely here.",
  },
  {
    id: "werthysdjhasdrhaserh",
    question: "What is the purpose of this layout?",
    answer: "Answer to short description of the item goes nicely here.",
  },
  {
    id: "43t6q34hyaejhtasdfgjasdfh",
    question: "What is the purpose of this layout?",
    answer: "Answer to short description of the item goes nicely here.",
  },
  {
    id: "47uq3auefadhjadfhjadfs",
    question: "What is the purpose of this layout?",
    answer: "Answer to short description of the item goes nicely here.",
  },
];

export const mockKpis: Kpi[] = [
  {
    id: "1asfrt2a",
    name: "KPI 1",
    type: AssetType.KPI,
    description:
      "KPI 1 one description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    businessQuestions: mockQuestions,
    metrics: [],
  },
  {
    id: "2hsrfgjkdjk",
    name: "KPI 2",
    type: AssetType.KPI,
    description:
      "KPI 2 two description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    businessQuestions: mockQuestions,
    metrics: [],
  },
  {
    id: "3gjuasje54",
    name: "KPI 3",
    type: AssetType.KPI,
    description:
      "KPI 3 three description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    businessQuestions: mockQuestions,
    metrics: [],
  },
  {
    id: "4se5hyusthjfsd",
    name: "KPI 4",
    type: AssetType.KPI,
    description:
      "KPI 4 four description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    businessQuestions: mockQuestions,
    metrics: [],
  },
];

export const mockDataViz: DataViz[] = [
  {
    id: "14363yhazfsha",
    name: "Data Viz 1",
    type: AssetType.DATA_VIZ,
    description:
      "Data Viz 1 one description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    kpis: mockKpis,
  },
  {
    id: "24yahfdafsdhad",
    name: "Data Viz 2",
    type: AssetType.DATA_VIZ,
    description:
      "Data Viz 2 two description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    kpis: mockKpis,
  },
  {
    id: "3ryay43hrea",
    name: "Data Viz 3",
    type: AssetType.DATA_VIZ,
    description:
      "Data Viz 3 three description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    kpis: mockKpis,
  },
  {
    id: "4fhsdhs5",
    name: "Data Viz 4",
    type: AssetType.DATA_VIZ,
    description:
      "Data Viz 4 four description lorem ipsum dolor sit amet consectetur adipisicing elit Nam lacinia metus elit, in facilisis leo efficitur rhoncus. Nunc aliquam enim vel orci tincidunt.",
    createdAt: "06/27/2024",
    stats: mockStats(),
    tags: mockTags,
    kpis: mockKpis,
  },
];

export const mockLayouts: Layout[] = [
  {
    id: "1sdhawrHjJRTE",
    name: "Layout 1",
    description:
      "That one options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.LAYOUT,
    amountOfPages: 6,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "2RWHYAEHJTJasdf",
    name: "Layout 2",
    description:
      "Those two options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.LAYOUT,
    amountOfPages: 6,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "35yw34y5yherths",
    name: "Layout 3",
    description:
      "Those three options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.LAYOUT,
    amountOfPages: 6,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "4u45y6eryjrae",
    name: "Layout 4",
    description:
      "Those four options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.LAYOUT,
    amountOfPages: 6,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
];

export const mockStoryboards: Storyboard[] = [
  {
    id: "1y6j5ryhjsetsdg",
    name: "Storyboard 1",
    description:
      "That one options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.STORYBOARD,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "243yw53hyuyjet",
    name: "Storyboard 2",
    description:
      "Those Two options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.STORYBOARD,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "35y64wjsrs",
    name: "Storyboard 3",
    description:
      "Those three options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.STORYBOARD,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
  {
    id: "48o67fktyfgx",
    name: "Storyboard 4",
    description:
      "Those four options are already backed in with this model shoot me an email clear blue water but we need distruibutors to evangelize the new line to local markets.",
    type: AssetType.STORYBOARD,
    createdAt: "06/27/2024",
    tags: mockTags,
    stats: mockStats(),
    kpis: mockKpis,
  },
];

export const mockAssets: AnyAsset[] = [
  ...mockKpis,
  ...mockDataViz,
  ...mockLayouts,
  ...mockStoryboards,
];

export const mockFeaturedAssets: AnyAsset[] = [
  mockKpis[0],
  mockDataViz[0],
  mockLayouts[0],
  mockStoryboards[0],
];

export const mockTrendingAssets: AnyAsset[] = [
  mockKpis[1],
  mockDataViz[1],
  mockLayouts[1],
  mockStoryboards[1],
];
