import { useState } from "react";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";

const submitButtonOptions = {
  text: "Submit the Form",
  useSubmitBehavior: true,
  type: "default",
};

type UserLogin = {
  email: string;
  password: string;
};

function LoginForm() {
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const onSubmitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form action="post" onSubmit={onSubmitLoginForm}>
      <Form formData={formData}>
        <SimpleItem dataField="email" editorType="dxTextBox">
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
        </SimpleItem>

        <SimpleItem dataField="password" editorType="dxTextBox">
          <RequiredRule message="Password is required" />
        </SimpleItem>

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default LoginForm;
