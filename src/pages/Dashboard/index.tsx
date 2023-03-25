import React from "react";

import { Card } from "flowbite-react";

import BookOpenIcon from "@heroicons/react/24/solid/BookOpenIcon";
import ArrowLeftOnRectangle from "@heroicons/react/24/solid/ArrowLeftOnRectangleIcon";
import UserGroup from "@heroicons/react/24/solid/UserGroupIcon";
import User from "@heroicons/react/24/solid/UserIcon";
import ArchiveBox from "@heroicons/react/24/solid/ArchiveBoxIcon";

import "./styles.css";

function Dashboard() {
  return (
    <>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white
      mt-10 underline ml-10"
      >
        Admin Dashboard
      </h1>

      <div className="flex flex-wrap mt-10 ml-10">
        <Card className="w-3/12 md:w-2/12 cursor-pointer hover:bg-gray-100 mr-10 mb-10">
          <BookOpenIcon className="text-green-500" />
          <p className="text-center">8</p>
          <p className="text-center">Books Listed</p>
        </Card>

        <Card className="w-3/12 md:w-2/12 cursor-pointer hover:bg-gray-100 mr-10 mb-10">
          <ArrowLeftOnRectangle className="text-yellow-500" />
          <p className="text-center">1</p>
          <p className="text-center">Books not returned yet</p>
        </Card>

        <Card className="w-3/12 md:w-2/12 cursor-pointer hover:bg-gray-100 sm:mr-10 mb-10">
          <UserGroup className="text-red-500" />
          <p className="text-center">5</p>
          <p className="text-center">Registered users</p>
        </Card>

        <Card className="w-3/12 md:w-2/12 cursor-pointer hover:bg-gray-100 mr-10 mb-10">
          <User className="text-lime-500" />
          <p className="text-center">11</p>
          <p className="text-center">Authors Listed</p>
        </Card>

        <Card className="w-3/12 md:w-2/12 cursor-pointer hover:bg-gray-100 mb-10">
          <ArchiveBox className="text-blue-500" />
          <p className="text-center">11</p>
          <p className="text-center">Authors Listed</p>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
