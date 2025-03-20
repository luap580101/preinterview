"use client";

import Image from "next/image";
import RecommendationCard from "@/components/RecommendationCard";
import ApplicationCard from "@/components/ApplicationCard";
import SearchBar from "@/components/SearchBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
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

  return (
    <div className="relative min-h-0.5">
      <SearchBar />
      <main className=" px-4">
        <div className=" mt-4">
          <h1 className=" text-2xl font-bold" style={{ fontWeight: "bold" }}>
            推介
          </h1>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 9, 8, 7].map((item, index) => (
              <RecommendationCard
                imageUrl="https://fakeimg.pl/300/"
                name={item.toString()}
                contentType="contentType123543"
              />
            ))}
          </Slider>
        </div>
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
  );
}
