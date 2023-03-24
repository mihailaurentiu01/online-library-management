import { useState } from "react";
import useLogin from "./useLogin";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "../../js/routes";
import { setIsLoggedIn, setLoggedInUser } from "../../store/modules/user";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";

import Loading from "../Loading";

import User from "../../models/User";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, performLoginAsUser } = useLogin();

  const onSubmitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();

    const loginResult: User | null = performLoginAsUser(
      formData.email,
      formData.password
    );

    if (loginResult) {
      dispatch(setIsLoggedIn(true));
      dispatch(setLoggedInUser(loginResult));

      navigate(routes.dashboard);
    }
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
