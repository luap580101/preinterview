"use client";

import { Input } from "antd";
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
      {/* <Input placeholder="搜尋" variant="filled" onChange={handleSearch} /> */}
      <Search placeholder="搜尋" variant="filled" onChange={handleSearch} />
    </>
  );
};

export default SearchBar;
