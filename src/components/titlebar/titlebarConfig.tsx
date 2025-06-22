import {
  LineOutlined,
  BorderOutlined,
  BorderInnerOutlined,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
  ReloadOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { type ReactNode } from "react";
import useTitlebarStore from "./store/titlebarStore";

interface ButtonConfig {
  key: string;
  tooltipText: string;
  icon: ReactNode;
  action: () => void;
  dynamic?: boolean; // for icon changes like maximize/restore
}

// Right-side controls
export const windowButtons: (isMaximized: boolean) => ButtonConfig[] = (isMaximized) => [
  {
    key: "minimize",
    tooltipText: "Minimize",
    icon: <LineOutlined />,
    action: () => useTitlebarStore.getState().minimize()
  },
  {
    key: "maximize",
    tooltipText: isMaximized ? "Restore Down" : "Maximize",
    icon: isMaximized ? <BorderInnerOutlined /> : <BorderOutlined />,
    action: () => useTitlebarStore.getState().maximize(),
    dynamic: true
  },
  {
    key: "close",
    tooltipText: "Close",
    icon: <CloseOutlined />,
    action: () => useTitlebarStore.getState().close()
  }
];

// Middle cluster
export const centralButtons: ButtonConfig[] = [
  {
    key: "back",
    tooltipText: "Back",
    icon: <LeftOutlined />,
    action: () => window.electron.goBack()
  },
  {
    key: "forward",
    tooltipText: "Forward",
    icon: <RightOutlined />,
    action: () => window.electron.goForward()
  },
  {
    key: "search",
    tooltipText: "Search",
    icon: <SearchOutlined />,
    action: () => console.log("Trigger search popup")
  },
  {
    key: "refresh",
    tooltipText: "Refresh",
    icon: <ReloadOutlined />,
    action: () => window.electron.refresh()
  },
];