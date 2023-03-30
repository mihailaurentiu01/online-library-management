import React from "react";
import AuthorsListing from "../../../components/Author/Listing";

function ManageAuthors() {
  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white
      mt-10 underline ml-10"
      >
        Manage Authors
      </h1>

      <AuthorsListing />
    </>
  );
}

export default ManageAuthors;
