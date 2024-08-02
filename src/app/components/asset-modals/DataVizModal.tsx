import { DataViz } from "@/app/lib/types/assets";
import Image from "next/image";
import { AssetItemList } from "../AssetItemList";
import { AssetItem } from "../AssetItem";

interface Props {
  dataViz: DataViz;
}

export function DataVizModal({ dataViz }: Props) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h3 className="text-left text-xl font-semibold">Preview Chart</h3>
        <Image
          src="/images/example-chart.png"
          alt="Asset Item"
          width={1280}
          height={720}
          className="rounded-lg shrink-0 max-h-[500px] object-cover"
        />
      </section>

      <section className="flex flex-col gap-4 mt-8">
        {Boolean(dataViz.kpis.length) && (
          <h3 className="text-left text-xl font-semibold">Applicable KPIs</h3>
        )}

        <ul className="flex flex-wrap [&>*:nth-child(odd)]:pl-0 [&>*:nth-child(even)]:pr-0">
          {dataViz.kpis.map((kpi) => (
            <li key={kpi.id} className="text-left py-2 md:p-2 md:w-1/2">
              <AssetItem asset={kpi} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
