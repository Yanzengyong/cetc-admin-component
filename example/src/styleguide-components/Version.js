import React from 'react';
import styled from 'styled-components';

const Rainbow = styled.p`
  background-image: linear-gradient(to left, violet, indigo, cyan, pink, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

export function VersionRenderer({ children }) {
  return <Rainbow aria-label="version">当前版本：v{children}</Rainbow>;
}

export default VersionRenderer;
