import React from "react";
import CategoriesListing from "../../../components/Category/Listing";

function ManageCategories() {
  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white
      mt-10 underline ml-10"
      >
        Manage Categories
      </h1>

      <CategoriesListing />
    </>
  );
}

export default ManageCategories;
