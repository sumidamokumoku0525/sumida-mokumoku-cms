import React from 'react';
import styled from 'styled-components';

const Blockquote = styled.blockquote`
  background: rgba(228, 228, 228, 0.5);
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 14px;
  text-align: center;
`

const BlockquoteComponent = ({...props}) => <Blockquote {...props} />

export default BlockquoteComponent
