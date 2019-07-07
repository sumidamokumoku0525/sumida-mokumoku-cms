import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  text-align: center;
  line-height: 1.6;
`

const ParagraphComponent = ({...props}) => <Paragraph {...props} />

export default ParagraphComponent
