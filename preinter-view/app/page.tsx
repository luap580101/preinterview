"use client";

import Image from "next/image";
import RecommendationCard from "@/components/RecommendationCard";
import ApplicationCard from "@/components/ApplicationCard";
import SearchBar from "@/components/SearchBar";
export default function Home() {
  return (
    <div className=" relative min-h-0.5">
      <SearchBar />
    </div>
  );
}
