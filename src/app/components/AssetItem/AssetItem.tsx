import { AssetType, BaseAsset } from "@/app/lib/types/assets";
import { getIconImgForAssetType } from "@/app/lib/utils";
import Image from "next/image";

interface Props {
  asset: BaseAsset;
  onClick?: () => void;
}

export function AssetItem({ asset, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-4 p-4 bg-white border border-slate-200 rounded-lg cursor-pointer`}
    >
      <Image
        src={getIconImgForAssetType(asset.type)}
        alt={asset.name}
        width={100}
        height={100}
        className="rounded-lg shrink-0 max-h-[100px] p-5 bg-slate-100"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold md:text-md">{asset.name}</h3>
        <p className="line-clamp-2" title={asset.description}>
          {asset.description}
        </p>
        <p className="mt-auto text-slate-400 text-sm">{asset.createdAt}</p>
      </div>
    </div>
  );
}
