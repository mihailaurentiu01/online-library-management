import React from "react";

import SignupForm from "../../components/SignupForm";
import { Card } from "flowbite-react";

function SignUp() {
  return (
    <>
      <div className="flex justify-center">
        <Card className="sm:w-10/12 md:w-4/12 mt-10">
          <h1>Signup</h1>
          <SignupForm />
        </Card>
      </div>
    </>
  );
}

export default SignUp;
