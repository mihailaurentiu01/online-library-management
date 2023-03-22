import { useState } from "react";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
  EmailRule,
  GroupItem,
  CompareRule,
} from "devextreme-react/form";

import useSignup from "./useSignup";
import User from "../../models/User";
import Loading from "../Loading";

const submitButtonOptions = {
  text: "Signup",
  useSubmitBehavior: true,
  type: "default",
};

const mobileNumberOptions = {
  mask: "+34 XXX XXX XXX",
  maskRules: {
    X: /[01-9]/,
  },
  maskInvalidMessage: "The phone must have a correct Spain phone format",
};

type UserSignup = {
  fullName: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type PasswordOptions = {
  mode: string;
};

function SignupForm() {
  const [formData, setFormData] = useState<UserSignup>({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    mode: "password",
  });

  const { mutate: createNewUser, isLoading } = useSignup();

  const onSubmitSignupForm = (e: React.FormEvent) => {
    e.preventDefault();

    const user = new User(
      formData.fullName,
      +formData.mobileNumber,
      formData.password,
      formData.email
    );

    createNewUser(user);
  };

  const passwordComparisonHandler = () => {
    return formData.password;
  };

  if (isLoading) return <Loading />;

  return (
    <form action="post" onSubmit={onSubmitSignupForm}>
      <Form formData={formData} colCount={1}>
        <GroupItem caption="Personal Data">
          <SimpleItem dataField="fullName" editorType="dxTextBox">
            <RequiredRule message="Full name is required" />
          </SimpleItem>

          <SimpleItem
            dataField="mobileNumber"
            editorOptions={mobileNumberOptions}
          >
            <RequiredRule message="Password is required" />
          </SimpleItem>

          <SimpleItem dataField="email" editorType="dxTextBox">
            <RequiredRule message="Email is required" />
            <EmailRule message="Email is invalid" />
          </SimpleItem>

          <SimpleItem
            dataField="password"
            editorType="dxTextBox"
            editorOptions={passwordOptions}
          >
            <RequiredRule message="Password is required" />
          </SimpleItem>

          <SimpleItem
            dataField="confirmPassword"
            editorType="dxTextBox"
            editorOptions={passwordOptions}
          >
            <RequiredRule message="Confirm password is required" />
            <CompareRule
              message="Password and confirm password do not match"
              comparisonTarget={passwordComparisonHandler}
            />
          </SimpleItem>
        </GroupItem>

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default SignupForm;
