import { AnyAsset } from "@/app/lib/types/assets";
import { SectionTitle } from "../SectionTitle";
import { AssetItemList } from "../AssetItemList";

interface Props {
  assets: AnyAsset[];
}

export function FilterResults({ assets }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <SectionTitle
        mainText="Filter Results"
        subText={`Found ${assets.length} assets`}
      />

      <AssetItemList assets={assets} />
    </section>
  );
}
