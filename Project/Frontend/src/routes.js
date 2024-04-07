import UserProfile from "./pages/UserProfile";
import CustomizeTemplate from "./pages/CustomizeTemplate";
import { TemplateSelection } from "./pages/TemplateSelection";
import { TemplatePreview } from "./pages/TemplatePreview";
import TemplateManagement from "./pages/TemplateManagement";

export const routes = [
  {
    name: TemplateManagement,
    path: "/home",
  },
  {
    name: TemplatePreview,
    path: "/preview-template",
  },
  {
    name: TemplateSelection,
    path: "/select-template",
  },
  {
    name: UserProfile,
    path: "/user-profile",
  },
  {
    name: CustomizeTemplate,
    path: "/edit-template",
  },
];
