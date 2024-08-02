"use client";

import { Search } from "@/app/components/Search";
import { SectionTitle } from "@/app/components/SectionTitle";
import { AssetItemList } from "@/app/components/AssetItemList";
import { Modal } from "./components/Modal";
import { useEffect, useState } from "react";
import {
  mockAssets,
  mockDataViz,
  mockFeaturedAssets,
  mockKpis,
  mockLayouts,
  mockStoryboards,
} from "@/mock-data/mock-assets";
import { Delete, UserPlus } from "react-feather";
import { RequestForm } from "./components/RequestForm/RequestForm";
import { FilterResults } from "./components/FilterResults";
import { AnyAsset, AssetType } from "./lib/types/assets";

const filterTabs = [
  { label: "Featured", value: "Featured" },
  { label: "KPI", value: AssetType.KPI },
  { label: "Layouts", value: AssetType.LAYOUT },
  { label: "Storyboards", value: AssetType.STORYBOARD },
];

export default function Home() {
  const [arrayToFilter, setArrayToFilter] = useState(mockAssets);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filteredAssets = arrayToFilter
    .filter(
      (asset) =>
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((asset) => {
      if (activeFilter === "Featured") return true;
      return asset.type === activeFilter;
    });

  // Featured assets
  useEffect(() => {
    if (activeFilter === "Featured") {
      setArrayToFilter(mockFeaturedAssets);
    } else {
      setArrayToFilter(mockAssets);
    }
  }, [activeFilter]);

  return (
    <main className="lg:w-[1100px] px-8 pb-10 lg:px-24 mx-auto flex min-h-screen flex-col gap-12">
      <Modal>
        <Modal.OpenButton>
          <button className="md:absolute right-4 top-4 px-6 py-2 md:py-4 my-4 md:my-0 rounded-lg bg-slate-500 text-white">
            <span className="flex justify-center items-center gap-2">
              <UserPlus size={20} /> Request
            </span>
          </button>
        </Modal.OpenButton>

        <Modal.Contents>
          <Modal.Controls>
            <button className="hover:text-slate-400">
              <Delete size={24} />
            </button>
          </Modal.Controls>

          <RequestForm />
        </Modal.Contents>
      </Modal>

      <header className="flex flex-col items-center py-6 text-center gap-8">
        <h1 className="text-5xl font-extrabold">Library</h1>
        <p className="text-lg">
          Browse for assets needed to report and present analysis.
        </p>
      </header>

      <section className="w-full">
        <Search value={searchTerm} setValue={setSearchTerm} />
      </section>

      {/* Filter Tabs */}
      <section>
        <ul className="flex justify-between p-1.5 rounded-lg bg-slate-100">
          {filterTabs.map((tab) => (
            <li
              key={tab.value}
              className={`flex-1 rounded-md p-2 text-center cursor-pointer ${
                activeFilter === tab.value ? "bg-white" : "text-slate-500"
              }`}
              onClick={() => setActiveFilter(tab.value)}
            >
              <span className="font-semibold">{tab.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* If search term is empty and filter is featured, hide the filter results */}
      {searchTerm === "" && activeFilter === "Featured" ? null : (
        <FilterResults assets={filteredAssets} />
      )}

      {/* Featured section */}
      <section className="flex flex-col gap-6">
        <SectionTitle
          mainText="Featured"
          subText="Curated top picks for this week"
        />

        <AssetItemList
          assets={[
            mockKpis[0],
            mockDataViz[0],
            mockLayouts[0],
            mockStoryboards[0],
          ]}
        />
      </section>

      {/* Trending section */}
      <section className="flex flex-col gap-6">
        <SectionTitle
          mainText="Trending"
          subText="Most popular picks from the community"
        />

        <AssetItemList
          assets={[
            mockKpis[0],
            mockDataViz[0],
            mockLayouts[0],
            mockStoryboards[0],
          ]}
        />
      </section>
    </main>
  );
}
