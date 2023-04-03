import React from "react";

import { Card } from "flowbite-react";

import AddBookForm from "../../../components/Books/AddForm";

function AddBook() {
  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white
      mt-10 underline ml-10"
      >
        Add book
      </h1>

      <div className="flex justify-center">
        <Card className="sm:w-10/12 md:w-6/12 mt-10">
          <h1 className="mb-5">Book info</h1>
          <AddBookForm />
        </Card>
      </div>
    </>
  );
}

export default AddBook;
