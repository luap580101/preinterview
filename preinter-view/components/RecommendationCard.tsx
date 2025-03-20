"use client";

import { Flex, Image, Typography } from "antd";
import React from "react";

const { Text } = Typography;

interface CardProps {
  imageUrl: string;
  name: string;
  contentType: string;
}

const RecommendationCard: React.FC<CardProps> = ({
  imageUrl,
  name,
  contentType,
}) => {
  return (
    <Flex
      className="flex flex-col max-w-[136px] gap-1 hover:bg-gray-200 hover:border-gray-400 rounded-2xl"
      style={{ padding: "8px", boxSizing: "border-box" }}
    >
      <Image
        src={imageUrl}
        alt="Recommendation Image"
        preview={false}
        width={120}
        height={120}
        className="rounded-xl"
      />
      <Text className="text-lg font-bold text-ellipsis overflow-hidden line-clamp-2 cursor-pointer h-12">
        {name}
      </Text>
      <Text className="text-gray-500 text-sm text-ellipsis overflow-hidden line-clamp-1 cursor-pointer">
        {contentType}
      </Text>
    </Flex>
  );
};

export default RecommendationCard;
