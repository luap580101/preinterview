"use client";

import React, { useEffect, useState } from "react";
import RecommendationCard from "@/components/Recommendation/RecommendationCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppService from "@/services/AppService";
import { RecommendationEntry } from "@/type/recommendation";

const RecommendationList = React.memo(() => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    cssEase: "ease-in-out",
    swipeToSlide: true,
  };

  const [topGrossingApplications, setTopGrossingApplications] = useState<
    RecommendationEntry[]
  >([]);

  useEffect(() => {
    const fetchTopGrossingApplications = async () => {
      const cachedData = localStorage.getItem("topGrossingApplications");
      const cacheTimestamp = localStorage.getItem(
        "topGrossingApplicationsTimestamp"
      );

      const isCacheValid =
        cachedData &&
        cacheTimestamp &&
        Date.now() - parseInt(cacheTimestamp) < 3600000;

      if (isCacheValid) {
        setTopGrossingApplications(JSON.parse(cachedData));
      } else {
        try {
          const data = await AppService.getTopGrossingApplications();
          const feedData = data?.data?.feed?.entry || [];
          setTopGrossingApplications(feedData);

          localStorage.setItem(
            "topGrossingApplications",
            JSON.stringify(feedData)
          );
          localStorage.setItem(
            "topGrossingApplicationsTimestamp",
            Date.now().toString()
          );
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchTopGrossingApplications();
  }, []);

  return (
    <div className=" mt-4">
      <h1 className=" text-2xl font-bold" style={{ fontWeight: "bold" }}>
        推薦
      </h1>

      <Slider {...settings}>
        {topGrossingApplications.map((item: any, index) => (
          <RecommendationCard
            key={index}
            imageUrl={item["im:image"][2]?.label || ""}
            name={item["im:name"]?.label || "Unknown"}
            contentType={item["title"]?.label || "Unknown"}
          />
        ))}
      </Slider>
    </div>
  );
});

export default RecommendationList;
