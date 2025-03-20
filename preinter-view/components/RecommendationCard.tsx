"use client";

import { Flex, Image, Typography } from "antd";
import React, { useEffect } from "react";

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
  useEffect(() => {
    console.log(Typography);
    console.log(Text);
  }, []);

  return (
    <Flex className="flex flex-col max-w-[120px] gap-1">
      <Image
        src={imageUrl}
        alt="Recommendation Image"
        preview={false}
        width={120}
        height={120}
        className="rounded-xl"
      />
      <Text className="text-lg font-bold text-ellipsis overflow-hidden line-clamp-2">
        {name}
      </Text>
      <Text className="text-gray-500 text-sm text-ellipsis overflow-hidden line-clamp-1">
        {contentType}
      </Text>
    </Flex>
  );
};

export default RecommendationCard;
