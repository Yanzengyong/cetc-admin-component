import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PathLine = styled.span`
  font-family: 'Monaco', 'Menlo', 'Courier', 'monospace';
  font-size: 16px;
  font-weight: 900;
  color: #057588;
`;

export const PathlineRenderer = ({ children }) => (
  <Container>
    <PathLine>{children}</PathLine>
  </Container>
);

export default PathlineRenderer;
