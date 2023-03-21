import { useState } from "react";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
  EmailRule,
  GroupItem,
} from "devextreme-react/form";

const submitButtonOptions = {
  text: "Signup",
  useSubmitBehavior: true,
  type: "default",
};

type UserSignup = {
  fullName: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type MobileNumberOptions = {
  mask: string;
  maskRules: {
    X: RegExp;
  };
  maskInvalidMessage: string;
};

function SignupForm() {
  const [formData, setFormData] = useState<UserSignup>({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mobileNumberOptions, setMobileNumberOptions] =
    useState<MobileNumberOptions>({
      mask: "+34 XXX XXX XXX",
      maskRules: {
        X: /[01-9]/,
      },
      maskInvalidMessage: "The phone must have a correct Spain phone format",
    });

  const onSubmitSignupForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

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

          <SimpleItem dataField="password" editorType="dxTextBox">
            <RequiredRule message="Password is required" />
          </SimpleItem>

          <SimpleItem dataField="confirmPassword" editorType="dxTextBox">
            <RequiredRule message="Confirm password is required" />
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
