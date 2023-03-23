import { useState } from "react";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import useLogin from "./useLogin";
import Loading from "../Loading";

const submitButtonOptions = {
  text: "Login",
  useSubmitBehavior: true,
  type: "default",
};

type UserLogin = {
  email: string;
  password: string;
};

type PasswordOptions = {
  mode: string;
};

function LoginForm() {
  const [formData, setFormData] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const [passwordOptions, setPasswordOptions] = useState<PasswordOptions>({
    mode: "password",
  });

  const { isFetching, performLoginAsUser } = useLogin();

  const onSubmitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();

    const loginResult = performLoginAsUser(formData.email, formData.password);
  };

  if (isFetching) return <Loading />;

  return (
    <form action="post" onSubmit={onSubmitLoginForm}>
      <Form formData={formData}>
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

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default LoginForm;
