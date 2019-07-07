import React from 'react'
import styled from 'styled-components';

const Date = styled.time`
  font-size: 14px;
  color: #757575;
  font-weight: bold;
  transition: color .6s ease;
`

const DateComponent = ({...props}) => <Date {...props} />

export default DateComponent
