"use client";

import { Flex, Input } from "antd";
import React, { useState } from "react";

const { Search } = Input;

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <>
      <Flex
        className="absolute top-0 w-full p-5 bg-gray-400"
        style={{ padding: "5px" }}
      >
        <Search
          placeholder="搜尋"
          variant="filled"
          onChange={handleSearch}
          className=" bg-gray-100 rounded-sm"
        />
      </Flex>
      {/* <Input placeholder="搜尋" variant="filled" onChange={handleSearch} /> */}
    </>
  );
};

export default SearchBar;
