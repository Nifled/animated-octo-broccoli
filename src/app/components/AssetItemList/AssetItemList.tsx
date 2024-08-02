import { BaseAsset, AssetType, Layout } from "@/app/lib/types/assets";
import { AssetItem } from "../AssetItem";
import { Modal } from "../Modal";
import { AssetDetail } from "../AssetDetail";
import { CopyLinkButton } from "../CopyLinkButton";

interface Props {
  assets: BaseAsset[];
}

export function AssetItemList({ assets }: Props) {
  return (
    <ul className="flex flex-wrap [&>*:nth-child(odd)]:pl-0 [&>*:nth-child(even)]:pr-0">
      {assets.map((asset) => (
        <li key={asset.id} className="py-2 md:p-2 md:w-1/2">
          <Modal>
            <Modal.OpenButton>
              <AssetItem asset={asset} />
            </Modal.OpenButton>

            <Modal.Contents>
              <Modal.Controls>
                <CopyLinkButton link={asset.id} />
              </Modal.Controls>

              <AssetDetail asset={asset}>
                <AssetDetail.Description />
                <AssetDetail.Tags />
                <AssetDetail.Stats />
                <AssetDetail.Contents />
                <AssetDetail.Actions />
              </AssetDetail>
            </Modal.Contents>
          </Modal>
        </li>
      ))}
    </ul>
  );
}
