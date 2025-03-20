"use client";

import ApplicationCard from "@/components/ApplicationCard";
import SearchBar from "@/components/SearchBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import RecommendationList from "@/components/RecommendationList";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="relative min-h-0.5">
        <SearchBar />
        <main className=" px-4">
          <RecommendationList />
          <div className=" mt-3">
            <div className=" border-b border-black"></div>
            <div className=" flex flex-col">
              {[1, 2, 3, 4, 5, 6, 9, 8, 7].map((item, index) => (
                <ApplicationCard
                  key={index}
                  imageUrl="https://fakeimg.pl/300/"
                  name={item.toString()}
                  contentType="contentType123543"
                  id={item.toString()}
                  rating={0}
                  ratingCount={0}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}
