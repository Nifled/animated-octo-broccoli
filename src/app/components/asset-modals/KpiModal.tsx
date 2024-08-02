import { Kpi } from "@/app/lib/types/assets";

interface Props {
  kpi: Kpi;
}

export function KpiModal({ kpi }: Props) {
  return (
    <>
      <section className="flex flex-col gap-2 my-6">
        {Boolean(kpi.businessQuestions.length) && (
          <h3 className="text-left text-xl font-semibold">
            Business Questions
          </h3>
        )}

        <ul className="flex flex-wrap [&>*:nth-child(odd)]:pl-0 [&>*:nth-child(even)]:pr-0">
          {kpi.businessQuestions.map((businessQuestion) => (
            <li
              key={businessQuestion.id}
              className="w-full text-left py-2 md:p-2 md:w-1/2"
            >
              <div className="p-3 rounded-md bg-slate-100">
                <p className="text-sm font-semibold">
                  {businessQuestion.question}
                </p>
                <p className="text-sm text-slate-400">
                  {businessQuestion.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
