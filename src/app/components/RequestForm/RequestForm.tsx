import { Send } from "react-feather";
import { SectionTitle } from "../SectionTitle";

export function RequestForm() {
  return (
    <form className="flex flex-col items-center gap-6">
      <span className="text-center">
        <SectionTitle
          mainText="Request"
          subText="Fill in the form to request an asset"
        />
      </span>

      <div className="w-10/12 flex flex-col gap-2">
        <label className="text-sm" htmlFor="assetName">
          Asset Name
        </label>
        <input
          className="shadow bg-transparent rounded-md border border-slate-300 px-4 py-2"
          id="assetName"
          type="text"
          placeholder="Enter asset name"
        />
      </div>

      <div className="w-10/12 flex flex-col gap-2">
        <label className="text-sm" htmlFor="assetInfo">
          Additional Information
        </label>
        <textarea
          className="shadow bg-transparent rounded-md border border-slate-300 px-4 py-2"
          id="assetInfo"
          placeholder="Enter asset details"
        />
      </div>

      <div className="w-10/12 flex flex-col gap-2">
        <label className="text-sm" htmlFor="requesterName">
          Requester Name
        </label>
        <input
          className="shadow bg-transparent rounded-md border border-slate-300 px-4 py-2"
          id="requesterName"
          placeholder="Enter asset requester name"
        />
      </div>

      <button className="w-10/12 mt-4 py-3 rounded-md bg-gray-900 text-white ">
        <span className="flex justify-center items-center gap-2">
          <Send size={16} />
          Submit
        </span>
      </button>
    </form>
  );
}
