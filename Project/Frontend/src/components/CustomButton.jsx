// import { Button } from "antd";
// import React from "react";

// const CustomButton = ({
//   title,
//   onClick = () => {},
//   className = "",
//   type = "button",
//   needOutlined = false,
//   ...props
// }) => {
//   return needOutlined ? (
//     <Button
//       type="primary"
//       className={`hover:!bg-purple-950 rounded-full h-10 border-purple-950 border bg-white text-purple-950 ${className}`}
//       htmlType={type}
//       onClick={onClick}
//       {...(type !== "submit" && { onClick })}
//       {...(props.icon !== undefined && { icon: props.icon })}
//       {...props}
//     >
//       {title}
//     </Button>
//   ) : (
//     <Button
//       type="primary"
//       className={`bg-purple-950 rounded-full h-10 hover:border-purple-950 hover:border hover:!bg-white hover:!text-purple-950 ${className}`}
//       htmlType={type}
//       {...(type !== "submit" && { onClick })}
//       {...(props.icon !== undefined && { icon: props.icon })}
//       {...props}
//     >
//       {title}
//     </Button>
//   );
// };

// export default CustomButton;

import { Button } from "antd";
import React from "react";

const CustomButton = ({
  title,
  onClick = () => {},
  className = "",
  type = "button",
  needOutlined = false,
  ...props
}) => {
  return needOutlined ? (
    <Button
      type="primary"
      className={`hover:!bg-[#50328b] rounded-xl h-10 border-2 border-[#50328b] bg-transparent text-[#50328b] ${className}`}
      htmlType={type}
      onClick={onClick}
      {...(type !== "submit" && { onClick })}
      {...(props.icon !== undefined && { icon: props.icon })}
      {...props}
    >
      {title}
    </Button>
  ) : (
    <Button
      type="primary"
      className={`bg-[#50328b] rounded-xl h-10  hover:border hover:!bg-transparent hover:border-[#50328b] hover:!text-[#50328b] ${className}`}
      htmlType={type}
      {...(type !== "submit" && { onClick })}
      {...(props.icon !== undefined && { icon: props.icon })}
      {...props}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
