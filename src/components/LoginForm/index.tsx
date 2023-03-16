import { Form, SimpleItem, ButtonItem } from "devextreme-react/form";
const employee = {
  name: "John Heart",
  officeNumber: 901,
  hireDate: new Date(2012, 4, 13),
};

const hireDateOptions = {
  disabled: true,
};

const submitButtonOptions = {
  text: "Submit the Form",
  useSubmitBehavior: true,
  type: "default",
};

function LoginForm() {
  return (
    <Form formData={employee}>
      <SimpleItem dataField="name" />
      <SimpleItem dataField="officeNumber" />
      <SimpleItem dataField="hireDate" editorOptions={hireDateOptions} />

      <ButtonItem
        horizontalAlignment={"left"}
        buttonOptions={submitButtonOptions}
      />
    </Form>
  );
}

export default LoginForm;
