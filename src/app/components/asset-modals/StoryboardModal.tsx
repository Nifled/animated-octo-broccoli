import { Storyboard } from "@/app/lib/types/assets";
import { AssetItem } from "../AssetItem";

interface Props {
  storyboard: Storyboard;
}

export function StoryboardModal({ storyboard }: Props) {
  return (
    <>
      <section className="flex flex-col gap-4 mt-8">
        {Boolean(storyboard.kpis.length) && (
          <h3 className="text-left text-xl font-semibold">
            Coupled KPI&apos;s
          </h3>
        )}

        <ul className="flex flex-wrap [&>*:nth-child(odd)]:pl-0 [&>*:nth-child(even)]:pr-0">
          {storyboard.kpis.map((kpi) => (
            <li key={kpi.id} className="text-left py-2 md:p-2 md:w-1/2">
              <AssetItem asset={kpi} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
