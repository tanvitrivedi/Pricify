import React from "react";
import { Button } from "antd";

const GenericButton = ({
  type,
  customType,
  className,
  htmlType,
  onClick,
  children,
}) => {
  const buttonType = customType || "primary";
  const buttonClass =
    type === "outlined"
      ? "hover:bg-purple-950 hover:border-purple-950 hover:text-white rounded-full h-10 border-purple-950 border bg-white text-purple-950"
      : "bg-purple-950 text-white rounded-full h-10 hover:!bg-white hover:!text-purple-950 hover:border-purple-950";

  return (
    <Button
      type={buttonType}
      className={buttonClass + (className ? ` ${className}` : "")}
      htmlType={htmlType}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
