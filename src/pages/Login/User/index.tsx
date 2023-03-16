import React from "react";
import LoginForm from "../../../components/LoginForm";
import { Card } from "flowbite-react";
function UserLoginPage() {
  return (
    <>
      <div className="flex justify-center">
        <Card className="sm:w-10/12 md:w-4/12 mt-10">
          <h1>Login</h1>
          <LoginForm />
        </Card>
      </div>
    </>
  );
}

export default UserLoginPage;
