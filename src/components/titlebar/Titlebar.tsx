import React, { useEffect } from "react";
import { theme, Button, Tooltip, Flex } from "antd";
import { Container, NoDrag } from "./Titlebar.styles";
import useTitlebarStore from "./store/titlebarStore";
import { windowButtons as windowButtonConfig, centralButtons } from "./titlebarConfig";

const Titlebar: React.FC = (props) => {
  const { token } = theme.useToken();
  const isMaximized = useTitlebarStore((s) => s.isMaximized);
  const setIsMaximized = useTitlebarStore((s) => s.setIsMaximized);

  useEffect(() => {
    window.electron.onWindowStateChange((state) => {
      setIsMaximized(state.isMaximized);
    });
  }, [setIsMaximized]);

  const windowButtons = windowButtonConfig(isMaximized);

  return (
    <Container
      bg={token.colorBgContainer}
      border={token.colorBorder}
      radius={`${token.borderRadius}px`}
      color={token.colorText}
      align="center"
      justify="space-between"
      {...props}
    >
      {/* Left: Logo or App Name */}
      <Flex align="center" style={{ userSelect: "none" }}>
        InsightDesk
      </Flex>

      {/* Center: Navigation and Search */}
      <NoDrag>
        {centralButtons.map((btn) =>
          btn.key === "search" ? (
            <Tooltip key={btn.key} title={btn.tooltipText}>
              <Button
                icon={btn.icon}
                type="default"
                style={{ width: 500 }}
                onClick={btn.action}
              >
                Search...
              </Button>
            </Tooltip>
          ) : (
            <Tooltip key={btn.key} title={btn.tooltipText}>
              <Button size="small" type="text" icon={btn.icon} onClick={btn.action} />
            </Tooltip>
          )
        )}
      </NoDrag>

      {/* Right: Window Controls */}
      <NoDrag>
        {windowButtons.map((btn) => (
          <Tooltip key={btn.key} title={btn.tooltipText}>
            <Button
              size="small"
              type="text"
              icon={btn.icon}
              onClick={btn.action}
              style={{ marginLeft: 8, padding: 0 }}
            />
          </Tooltip>
        ))}
      </NoDrag>
    </Container>
  );
};

export default Titlebar;