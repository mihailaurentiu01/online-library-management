import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import useAuthor from "../useAuthor";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
} from "devextreme-react/form";

import { RootState } from "../../../store";

import Loading from "../../Loading";
import Author from "../../../models/Author";

type FormData = {
  authorName: string;
};

const submitButtonOptions = {
  text: "Create author",
  useSubmitBehavior: true,
  type: "default",
};

function AddAuthorForm() {
  const [formData, setFormData] = useState<FormData>({
    authorName: "",
  });

  const { mutate: createNewAuthor, isLoading } = useAuthor();

  const { user } = useSelector((state: RootState) => state.user);

  const onSubmitAddAuthorForm = (e: React.FormEvent) => {
    e.preventDefault();

    const author = new Author(formData.authorName, user?.id);

    createNewAuthor(author);
  };

  if (isLoading) return <Loading />;

  return (
    <form action="post" onSubmit={onSubmitAddAuthorForm}>
      <Form formData={formData}>
        <SimpleItem dataField="authorName" editorType="dxTextBox">
          <RequiredRule message="Author requires a name" />
        </SimpleItem>

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default AddAuthorForm;
