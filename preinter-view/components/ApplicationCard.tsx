"use client";

import { Flex, Image, Typography, Rate } from "antd";
import React from "react";

const { Text } = Typography;

interface CardProps {
  applicationId?: string;
  imageUrl: string;
  name: string;
  contentType: string;
  rating: number;
  ratingCount: number;
}

const ApplicationCard: React.FC<CardProps> = ({
  applicationId,
  imageUrl,
  name,
  contentType,
  rating = 0,
  ratingCount = 0,
}) => {
  const setting = {
    maxHeight: 80,
  };

  return (
    <Flex
      gap="8"
      className="items-center  hover:bg-gray-200 hover:border-gray-400 cursor-pointer"
      style={{ padding: "8px" }}
    >
      {!!applicationId && (
        <Flex
          align="center"
          justify="center"
          className="text-2xl text-gray-400 m-4 w-12"
          style={{ margin: "0 12px" }}
        >
          {applicationId}
        </Flex>
      )}
      <Flex className="mx-4" style={{ margin: "0 12px" }}>
        <Image
          src={imageUrl}
          alt="Application Image"
          preview={false}
          width={setting.maxHeight}
          height={setting.maxHeight}
          className="rounded-full "
        />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        className={`box-border min-h-[${setting.maxHeight}px]`}
        style={{ padding: "4px 0", marginLeft: "8px" }}
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
        <Flex align="center" className=" flex-wrap">
          <Rate disabled defaultValue={rating} className="text-sm" />
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
