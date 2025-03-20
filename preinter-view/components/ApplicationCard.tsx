"use client";

import { Flex, Image, Typography, Rate } from "antd";
import React from "react";

const { Text } = Typography;

interface CardProps {
  id: string;
  imageUrl: string;
  name: string;
  contentType: string;
  rating: number;
  ratingCount: number;
}

const ApplicationCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  name,
  contentType,
  rating = 0,
  ratingCount = 0,
}) => {
  return (
    <Flex gap="8" className="items-center" style={{ padding: "8px" }}>
      <Flex
        align="center"
        justify="center"
        className="text-4xl text-gray-400 m-4"
        style={{ margin: "0 12px" }}
      >
        {id}
      </Flex>
      <Flex className="mx-4" style={{ margin: "0 12px" }}>
        <Image
          src={imageUrl}
          alt="Application Image"
          preview={false}
          width={120}
          height={120}
          className="rounded-full "
        />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        style={{
          boxSizing: "border-box",
          padding: "4px 0",
          marginLeft: "8px",
          minHeight: "120px",
        }}
      >
        <Flex>
          <Text
            className="text-ellipsis overflow-hidden line-clamp-1 max-w-full text-2xl font-bold"
            style={{ fontSize: "1.2rem" }}
          >
            {name}
          </Text>
        </Flex>
        <Flex>
          <Text
            className="text-ellipsis overflow-hidden line-clamp-1"
            type="secondary"
            style={{ maxWidth: "100%", fontSize: "1rem" }}
          >
            {contentType}
          </Text>
        </Flex>
        <Flex align="center">
          <Rate disabled defaultValue={rating} />
          <Text
            className="max-w-full text-sm ml-2.5"
            type="secondary"
            style={{ maxWidth: "100%", fontSize: "0.8rem", marginLeft: "4px" }}
          >
            ({ratingCount})
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ApplicationCard;
