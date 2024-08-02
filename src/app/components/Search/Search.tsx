import React from "react";
import { Search as SearchIcon, XCircle } from "react-feather";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export function Search({ value, setValue }: Props) {
  return (
    <div className="w-full flex items-center rounded-lg bg-white border border-slate-300 px-4 py-3">
      <SearchIcon className="text-slate-400 mr-2" size={20} />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to search..."
        className="w-full bg-transparent outline-none"
      />

      {value !== "" && (
        <span title="Clear search">
          <XCircle
            onClick={() => setValue("")}
            className="text-slate-400 ml-2 cursor-pointer"
            size={20}
          />
        </span>
      )}
    </div>
  );
}
