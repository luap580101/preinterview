"use client";

import ApplicationCard from "@/components/ApplicationCard";
import SearchBar from "@/components/SearchBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import RecommendationList from "@/components/RecommendationList";
import ApplicationList from "@/components/ApplicationList";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="relative min-h-0.5">
        <SearchBar />
        <main className=" px-4">
          <RecommendationList />
          <ApplicationList />
        </main>
      </div>
    </Provider>
  );
}
