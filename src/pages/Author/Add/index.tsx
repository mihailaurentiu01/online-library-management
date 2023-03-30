import React from "react";

import { Card } from "flowbite-react";
import AddAuthorForm from "../../../components/Author/AddForm";

function AddAuthor() {
  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white
      mt-10 underline ml-10"
      >
        Add author
      </h1>

      <div className="flex justify-center">
        <Card className="sm:w-10/12 md:w-4/12 mt-10">
          <h1 className="mb-5">Author info</h1>
          <AddAuthorForm />
        </Card>
      </div>
    </>
  );
}

export default AddAuthor;
