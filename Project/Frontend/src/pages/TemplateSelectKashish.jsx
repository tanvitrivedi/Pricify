import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import CircleIconButton from "../components/CircleIconButton";
import FrostedGlassContainer from "../components/FrostedGlassContainer";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";

export const TemplateSelection = () => {
  const [currentTemplate, setCurrentTemplate] = useState(1);
  return (
    <FrostedGlassContainer
      needOnlyGlass
      froastedContainerStyle={"justify-center items-center p-4 gap-5"}
    >
      <CircleIconButton
        icon={<ArrowLeftOutlined />}
        tooltipTile="Previous"
        filled
        onClick={() =>
          setCurrentTemplate((prev) => (prev === 1 ? 1 : prev - 1))
        }
      />
      {currentTemplate === 1 ? <Template1 /> : <Template2 />}
      <CircleIconButton
        icon={<ArrowRightOutlined />}
        tooltipTile="Next"
        filled
        onClick={() =>
          setCurrentTemplate((prev) => (prev === 2 ? 2 : prev + 1))
        }
      />
    </FrostedGlassContainer>
  );
};
