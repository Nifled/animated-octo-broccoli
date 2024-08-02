export enum AssetType {
  "KPI" = "KPI",
  "DATA_VIZ" = "Data Viz",
  "LAYOUT" = "Layout",
  "STORYBOARD" = "Storyboard",
}

export type AnyAsset = Kpi | DataViz | Layout | Storyboard;

export interface BaseAsset {
  id: string;
  name: string;
  description: string;
  type: AssetType;
  tags: AssetTag[];
  stats: AssetStat[];
  createdAt: string;
}

export interface Kpi extends BaseAsset {
  type: AssetType.KPI;
  businessQuestions: AssetQuestion[];
  metrics: AssetMetric[];
}

export interface DataViz extends BaseAsset {
  type: AssetType.DATA_VIZ;
  kpis: Kpi[];
}

export interface Layout extends BaseAsset {
  type: AssetType.LAYOUT;
  amountOfPages: number;
  kpis: Kpi[];
}

export interface Storyboard extends BaseAsset {
  type: AssetType.STORYBOARD;
  kpis: Kpi[];
}

export interface AssetTag {
  id: string;
  name: string;
}

export interface AssetStat {
  id: string;
  name: string;
  value: string;
  description?: string; // Verbose help text (for info icon)
}

export interface AssetMetric {
  id: string;
  name: string;
  description: string;
  value: string;
  unit: string;
}

export interface AssetQuestion {
  id: string;
  question: string;
  answer: string;
}
