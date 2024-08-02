import { Layout } from "@/app/lib/types/assets";
import Image from "next/image";
import { AssetItem } from "../AssetItem";

interface Props {
  layout: Layout;
}

export function LayoutModal({ layout }: Props) {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h3 className="text-left text-xl font-semibold">Preview Layout</h3>
        <Image
          src="/images/example-layout.png"
          alt="Asset Item"
          width={1280}
          height={720}
          className="rounded-lg shrink-0 max-h-[500px] object-cover"
        />
      </section>

      <section className="flex flex-col gap-4 mt-8">
        {Boolean(layout.kpis.length) && (
          <h3 className="text-left text-xl font-semibold">
            KPI&apos;s Being Used
          </h3>
        )}

        <ul className="flex flex-wrap [&>*:nth-child(odd)]:pl-0 [&>*:nth-child(even)]:pr-0">
          {layout.kpis.map((kpi) => (
            <li key={kpi.id} className="text-left py-2 md:p-2 md:w-1/2">
              <AssetItem asset={kpi} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
