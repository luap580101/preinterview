"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchBar from "@/components/SearchBar";
import RecommendationList from "@/components/RecommendationList";
import ApplicationList from "@/components/ApplicationList";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import SearchApplicationList from "@/components/SearchApplicationList";

function Home() {
  const searchQuery = useSelector((state: RootState) => state.search.query);

  return (
    <div className="relative min-h-0.5">
      <SearchBar />
      <main className="px-4">
        {searchQuery.length > 0 ? (
          <SearchApplicationList />
        ) : (
          <>
            <RecommendationList />
            <ApplicationList />
          </>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
