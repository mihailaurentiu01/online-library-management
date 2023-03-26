import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import useCategory from "../useCategory";

import {
  Form,
  SimpleItem,
  ButtonItem,
  RequiredRule,
} from "devextreme-react/form";

import Category from "../../../models/Category";
import Status from "../../../models/types/CategoryType";
import { RootState } from "../../../store";

import Loading from "../../Loading";

type FormData = {
  categoryName: string;
  status: Status;
};

const submitButtonOptions = {
  text: "Create category",
  useSubmitBehavior: true,
  type: "default",
};

const availableStatuses: Status[] = ["Active", "Inactive"];

const radioGroupOptions = {
  dataSource: availableStatuses,
};

function AddCategoryForm() {
  const [formData, setFormData] = useState<FormData>({
    categoryName: "",
    status: "Active",
  });

  const { mutate: createNewCategory, isLoading } = useCategory();

  const { user } = useSelector((state: RootState) => state.user);

  const onSubmitAddCategoryForm = (e: React.FormEvent) => {
    e.preventDefault();

    const category = new Category(
      formData.categoryName,
      formData.status,
      user?.id
    );

    createNewCategory(category);
  };

  if (isLoading) return <Loading />;

  return (
    <form action="post" onSubmit={onSubmitAddCategoryForm}>
      <Form formData={formData}>
        <SimpleItem dataField="categoryName" editorType="dxTextBox">
          <RequiredRule message="Category requires a name" />
        </SimpleItem>

        <SimpleItem
          dataField="status"
          editorType="dxSelectBox"
          editorOptions={radioGroupOptions}
        >
          <RequiredRule message="Category requires a name" />
        </SimpleItem>

        <ButtonItem
          horizontalAlignment={"left"}
          buttonOptions={submitButtonOptions}
        />
      </Form>
    </form>
  );
}

export default AddCategoryForm;
