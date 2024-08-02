interface Props {
  mainText: React.ReactNode;
  subText: React.ReactNode;
}

export function SectionTitle({ mainText, subText }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-semibold">{mainText}</h2>
      <p className="text-slate-400">{subText}</p>
    </div>
  );
}
