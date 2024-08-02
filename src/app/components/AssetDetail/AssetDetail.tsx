import {
  AssetType,
  BaseAsset,
  DataViz,
  Kpi,
  Layout,
  Storyboard,
} from "@/app/lib/types/assets";
import React from "react";
import { Bookmark, Info, Layout as LayoutIcon } from "react-feather";
import { LayoutModal } from "../asset-modals/LayoutModal";
import { DataVizModal } from "../asset-modals/DataVizModal";
import { KpiModal } from "../asset-modals/KpiModal";
import { StoryboardModal } from "../asset-modals/StoryboardModal";

type AssetDetailContext = {
  asset: BaseAsset;
};

const AssetDetailContext = React.createContext<AssetDetailContext | null>(null);

interface Props extends React.PropsWithChildren {
  asset: BaseAsset;
}

export function AssetDetail({ asset, children }: Props) {
  return (
    <AssetDetailContext.Provider value={{ asset }}>
      <div className="-mt-4 text-center flex flex-col items-center">
        {children}
      </div>
    </AssetDetailContext.Provider>
  );
}

AssetDetail.Description = function Description() {
  const { asset } = React.useContext(AssetDetailContext)!;

  return (
    <div className="flex flex-col items-center">
      <span className="mb-4 p-3 rounded-md bg-slate-100 text-slate-600">
        <LayoutIcon size={40} />
      </span>

      {/* Title */}
      <div className="flex justify-center items-center gap-2">
        <h2 className="text-4xl font-semibold">{asset.name}</h2>
        <span className="p-1 rounded-sm text-xs text-slate-400 bg-slate-100">
          {asset.type}
        </span>
      </div>

      <p className="my-3">{asset.description}</p>
    </div>
  );
};

AssetDetail.Tags = function Tags() {
  const { asset } = React.useContext(AssetDetailContext)!;

  return (
    <ul className="flex gap-2 my-2">
      {asset.tags.map((tag) => (
        <li key={tag.id}>
          <span className="p-1 rounded-md text-slate-400 bg-slate-100 border border-slate-300">
            #{tag.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

AssetDetail.Stats = function Stats() {
  const { asset } = React.useContext(AssetDetailContext)!;

  return (
    <ul className="flex flex-wrap md:divide-x mt-10 mb-6">
      {asset.stats.map((stat) => (
        <li
          key={stat.id}
          className="w-1/2 md:w-1/4 flex flex-col items-center px-8 py-2 md-py-0"
        >
          <p className="text-lg font-bold">{stat.value}</p>
          <span className="flex items-center gap-1 text-slate-400">
            <p className="text-sm font-medium text-nowrap">{stat.name}</p>
            {Boolean(stat.description) && (
              <span title={stat.description}>
                <Info size={13} />
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

AssetDetail.Contents = function Contents({
  children,
}: React.PropsWithChildren) {
  const { asset } = React.useContext(AssetDetailContext)!;

  const renderModal = () => {
    switch (asset.type) {
      case AssetType.LAYOUT:
        return <LayoutModal layout={asset as Layout} />;
      case AssetType.DATA_VIZ:
        return <DataVizModal dataViz={asset as DataViz} />;
      case AssetType.KPI:
        return <KpiModal kpi={asset as Kpi} />;
      case AssetType.STORYBOARD:
        return <StoryboardModal storyboard={asset as Storyboard} />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col gap-2 mt-6">
      {renderModal()}
      {children}
    </section>
  );
};

/**
 * Extendable Actions section that will show "favorite" button by default.
 */
AssetDetail.Actions = function Actions({ children }: React.PropsWithChildren) {
  const { asset } = React.useContext(AssetDetailContext)!;
  const [clicked, setClicked] = React.useState(false); // Dummy state

  return (
    <section className="w-full flex flex-col gap-2 mt-4">
      <button
        onClick={() => setClicked(!clicked)} // TODO: Call api to favorite asset
        className="w-full bg-gray-900 text-white rounded-lg"
      >
        <span className="flex justify-center items-center p-3 text-sm gap-1">
          <Bookmark size={16} fill={clicked ? "white" : "none"} />
          Favorite Item
        </span>
      </button>
      {children}
    </section>
  );
};
