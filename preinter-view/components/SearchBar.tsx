"use client";

import { Flex, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchInput, setSearchQuery } from "@/redux/searchSlice";
import debounce from "lodash.debounce";

const { Search } = Input;

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = debounce((value: string) => {
    dispatch(setSearchQuery(value));
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchInput(true));
    setQuery(value);
    handleSearch(value);
  };

  return (
    <Flex className="relative min-h-[50px]">
      <Flex
        className="fixed top-0 w-full p-5 bg-gray-100 z-10"
        style={{ padding: "8px" }}
      >
        <Search
          value={query}
          placeholder="搜尋"
          variant="filled"
          onChange={handleChange}
          className="bg-gray-200 rounded-sm"
        />
      </Flex>
    </Flex>
  );
};

export default SearchBar;
