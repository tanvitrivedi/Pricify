import React from "react";
import { Form, Input, Select } from "antd";

const GenericInput = ({
  label,
  name,
  type,
  placeholder,
  rules,
  className,
  onChange,
}) => {
  // Determine the input component based on the type prop
  let InputComponent;
  switch (type) {
    case "text":
      InputComponent = Input;
      break;
    case "password":
      InputComponent = Input.Password;
      break;
    case "email":
      InputComponent = Input;
      break;
    case "select":
      InputComponent = Select;
      break;
    default:
      InputComponent = Input;
  }

  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      labelAlign="left"
      className={className}
    >
      <InputComponent
        className="h-10 flex"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default GenericInput;
