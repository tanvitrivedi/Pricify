// import { Button, Tooltip } from "antd";
// import React from "react";

// const CircleIconButton = ({
//   icon,
//   noTooltip = false,
//   tooltipTile = "",
//   className,
//   onClick = () => {},
// }) => {
//   return noTooltip ? (
//     <Button
//       type="default"
//       className={`text-purple-950 border-purple-950 hover:!bg-purple-950 hover:!text-white hover:!border-purple-950 ${className}`}
//       shape="circle"
//       icon={icon}
//       onClick={onClick}
//     />
//   ) : (
//     <Tooltip title={tooltipTile} className={className}>
//       <Button
//         type="default"
//         className="text-purple-950 border-purple-950 hover:!bg-purple-950 hover:!text-white hover:!border-purple-950"
//         shape="circle"
//         icon={icon}
//         onClick={onClick}
//       />
//     </Tooltip>
//   );
// };

// export default CircleIconButton;
import { Button, Tooltip } from "antd";
import React from "react";

const CircleIconButton = ({
  icon,
  noTooltip = false,
  tooltipTile = "",
  className,
  filled = false,
  onClick = () => {},
}) => {
  return noTooltip ? (
    <Button
      type="default"
      className={`text-purple-950 border-purple-950 hover:!bg-purple-950  hover:!border-purple-950 ${className}`}
      shape="circle"
      icon={icon}
      onClick={onClick}
    />
  ) : filled ? (
    <Tooltip title={tooltipTile} className={className}>
      <Button
        type="default"
        className="bg-purple-950 border-purple-950 hover:!bg-purple-800 !text-white hover:!border-purple-950"
        shape="circle"
        icon={icon}
        onClick={onClick}
      />
    </Tooltip>
  ) : (
    <Tooltip title={tooltipTile} className={className}>
      <Button
        type="default"
        className="text-purple-950 border-purple-950 hover:!bg-purple-950 hover:!text-white hover:!border-purple-950"
        shape="circle"
        icon={icon}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default CircleIconButton;
