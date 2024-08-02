import { AssetType } from "./types/assets";

export const getIconImgForAssetType = (assetType: AssetType) => {
  switch (assetType) {
    case AssetType.DATA_VIZ:
      return "/images/pie-chart.svg";
    case AssetType.LAYOUT:
      return "/images/layout.svg";
    case AssetType.KPI:
      return "/images/target.svg";
    case AssetType.STORYBOARD:
      return "/images/book-open.svg";
    default:
      return "";
  }
};
