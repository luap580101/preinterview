import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplicationCard from "@/components/ApplicationCard";
import AppService from "@/services/AppService";

const ApplicationList = React.memo(() => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadApplications = async () => {
    setLoading(true);
    try {
      const cachedData = localStorage.getItem("applications");
      const cachedTimestamp = localStorage.getItem("applicationsTimestamp");

      const currentTime = new Date().getTime();
      const cacheExpiryTime = 10 * 60 * 1000;

      if (
        cachedData &&
        cachedTimestamp &&
        currentTime - Number(cachedTimestamp) < cacheExpiryTime
      ) {
        setApplications(JSON.parse(cachedData));
        return;
      }

      const data = await AppService.getFreeApplications();
      const feedData = data?.feed?.entry || [];
      setApplications(feedData);

      localStorage.setItem("applications", JSON.stringify(feedData));
      localStorage.setItem("applicationsTimestamp", currentTime.toString());
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
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
            contentType={item["title"]?.label || "Unknown"}
            rating={item["im:rating"]?.label || 0}
            ratingCount={item["im:ratingCount"]?.label || 0}
            applicationId={(index + 1).toString()}
          />
        ))}
        {loading && (
          <div className="flex justify-center my-4">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
});

export default ApplicationList;
