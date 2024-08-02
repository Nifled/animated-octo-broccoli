import { Link } from "react-feather";

interface Props {
  link: string;
}

export function CopyLinkButton({ link }: Props) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(link)}
      className="hover:text-slate-400"
    >
      <Link size={25} />
    </button>
  );
}
