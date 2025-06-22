import styled from "styled-components";
import { Flex } from "antd";

export const NoDrag = styled(Flex)`
  -webkit-app-region: no-drag;
  align-items: center;
  gap: 0.3rem;
  user-select: none;
`;

export const Container = styled(Flex)<{
  bg: string;
  border: string;
  radius: string | number;
  color?: string;
}>`
  height: 45px;
  padding: 0.5rem;
  background-color: ${(props) => props.bg};
  border: 1px solid ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color};
  -webkit-app-region: drag;
  user-select: none;
  flex-shrink: 0;
  grid-area: titlebar;
`;