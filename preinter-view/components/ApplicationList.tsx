"use client";

import React, { useEffect, useState, useRef } from "react";
import { Spin } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplicationCard from "@/components/ApplicationCard";
import AppService from "@/services/AppService";

export default function ApplicationList() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const pageRef = useRef<number>(1);

  const loadApplications = async () => {
    setLoading(true);
    try {
      const data = await AppService.getFreeApplications();
      const feedData = data?.feed?.entry || [];
      setApplications(feedData);

      // if (feedData.length > 0) {
      //   // 使用函數式更新來獲取當前的 applications
      //   setApplications((prevApplications) => {
      //     const newApplications = [
      //       ...prevApplications,
      //       ...feedData.slice((pageRef.current - 1) * 10, pageRef.current * 10),
      //     ];

      //     // 檢查是否超過 100 筆資料
      //     if (newApplications.length >= 100) {
      //       setHasMore(false);
      //     }
      //     pageRef.current += 1;
      //     return newApplications;
      //   });
      // }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleScroll = () => {
  //   console.log("loadApplications page:", pageRef.current);

  //   const scrollPosition =
  //     window.innerHeight + document.documentElement.scrollTop;
  //   const documentHeight = document.documentElement.scrollHeight;
  //   const threshold = 0;

  //   console.log({ scrollPosition, threshold, documentHeight });

  //   if (scrollPosition + threshold >= documentHeight && !loading && hasMore) {
  //     setLoading(true);
  //     setTimeout(() => {
  //       loadApplications();
  //     }, 1000);
  //   }
  // };

  useEffect(() => {
    loadApplications();
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className="mt-3">
      <div className="border-b border-black my-2"></div>
      <div className="flex flex-col">
        {applications.map((item, index) => (
          <ApplicationCard
            key={index}
            imageUrl={item["im:image"][2]?.label || "https://fakeimg.pl/300/"}
            name={item["im:name"]?.label || "Unknown"}
            contentType={item["im:contentType"]?.label || "Unknown"}
            id={(index + 1).toString()}
            rating={item["im:rating"]?.label || 0}
            ratingCount={item["im:ratingCount"]?.label || 0}
          />
        ))}
        {loading && (
          <div className="flex justify-center my-4">
            <Spin size="large" />
          </div>
        )}
        {!hasMore && (
          <div className="text-center my-4">
            <span>已達最底</span>
          </div>
        )}
      </div>
    </div>
  );
}
