import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
} from "devextreme-react/form";

import { RootState } from "../../../store";

import Loading from "../../Loading";
import Author from "../../../models/Author";
import useCategory from "../../Category/useCategory";
import Category from "../../../models/Category";

type FormData = {
  bookName: string;
  category: string;
  author: string;
  isbn: number;
  price: number;
  picture: string;
};

type radioGroupOptionsType = {
  dataSource: Category[] | undefined;
  displayExpr: string;
  valueExpr: string;
};

const submitButtonOptions = {
  text: "Add book",
  useSubmitBehavior: true,
  type: "default",
};

const radioGroupOptions: radioGroupOptionsType = {
  dataSource: [],
  displayExpr: "name",
  valueExpr: "id",
};

function AddBookForm() {
  const [formData, setFormData] = useState<FormData>({
    bookName: "",
    category: "",
    author: "",
    isbn: 0,
    price: 0,
    picture: "",
  });

  const { user } = useSelector((state: RootState) => state.user);

  const { isFetching, getAllActiveCategories } = useCategory();

  if (isFetching) return <Loading />;

  radioGroupOptions.dataSource = getAllActiveCategories();

  const onSubmitAddBookForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form action="post" onSubmit={onSubmitAddBookForm}>
      <Form formData={formData} colCount={2}>
        <SimpleItem dataField="bookName" editorType="dxTextBox">
          <RequiredRule message="Book requires a name" />
        </SimpleItem>

        <SimpleItem
          dataField="category"
          editorType="dxSelectBox"
          editorOptions={radioGroupOptions}
        >
          <RequiredRule message="Category requires a name" />
        </SimpleItem>

        <SimpleItem dataField="author" editorType="dxTextBox">
          <RequiredRule message="Author requires a name" />
        </SimpleItem>

        <SimpleItem dataField="isbn" editorType="dxNumberBox">
          <RequiredRule message="ISBN is required" />
        </SimpleItem>

        <SimpleItem dataField="price" editorType="dxNumberBox">
          <RequiredRule message="Price is required" />
        </SimpleItem>

        <SimpleItem dataField="picture" editorType="dxTextBox">
          <RequiredRule message="Book picture is required" />
        </SimpleItem>

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default AddBookForm;
