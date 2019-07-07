import React from 'react';
import styled from 'styled-components';
import { mixins, colors } from '../styles'

const Title = styled.h2`
  ${mixins.font_noto}
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`

const TitleComponent = ({...props}) => <Title {...props} />

export default TitleComponent
