"use client";

import React, { useEffect, useState, useRef } from "react";
import { Spin } from "antd";
import ApplicationCard from "@/components/ApplicationCard";
import AppService from "@/services/AppService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSearchInput } from "@/redux/searchSlice";

export default function SearchApplicationList() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchQuery = useSelector((state: RootState) => state.search.query);
  const searchInput = useSelector(
    (state: RootState) => state.search.searchInput
  );
  const dispatch = useDispatch();

  const searchApplications = async (input: string) => {
    setLoading(true);
    try {
      const data = await AppService.getFreeApplications();
      const feedData = data?.feed?.entry || [];
      const filteredData = feedData.filter((item: any) => {
        const name = item["im:name"]?.label?.toLowerCase() || "";
        const summary = item["summary"]?.label?.toLowerCase() || "";
        const title = item["title"]?.label?.toLowerCase() || "";
        const query = searchQuery.toLowerCase();
        return (
          name.includes(query) ||
          summary.includes(query) ||
          title.includes(query)
        );
      });

      setApplications(filteredData);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setTimeout(() => {
        console.log("end");
        setLoading(false);
        dispatch(setSearchInput(false));
      }, 200);
    }
  };

  useEffect(() => {
    searchApplications(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    console.log(searchInput);
    if (searchInput === true) {
      setLoading(true);
    }
  }, [searchInput]);

  return (
    <div className="mt-3">
      <div className="flex flex-col">
        {!loading && applications.length > 0
          ? applications.map((item, index) => (
              <ApplicationCard
                key={index}
                imageUrl={
                  item["im:image"][2]?.label || "https://fakeimg.pl/300/"
                }
                name={item["im:name"]?.label || "Unknown"}
                contentType={item["title"]?.label || "Unknown"}
                rating={item["im:rating"]?.label || 0}
                ratingCount={item["im:ratingCount"]?.label || 0}
              />
            ))
          : !loading && (
              <div className="flex my-4">
                <div className="text-gray-500">查無此 APP</div>
              </div>
            )}
        {loading && (
          <div className="flex justify-center my-4">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
}
