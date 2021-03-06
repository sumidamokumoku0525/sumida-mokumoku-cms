import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
  background: #329CB5;
  display: inline-block;
  min-width: 274px;
  padding: 18px 20px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: background-color .5s ease, box-shadow .5s ease;
  cursor: pointer;
  &:after {
    content: "";
    display: inline-block;
    background: url(/static/assets/arrow_btn.svg) no-repeat center center;
    width: 6px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 10px;
    transition: transform .5s ease;
  }
  &:hover {
    background: #5dc0d6;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
    &:after {
      transform: translateX(2px);
    }
  }
`

const BtnComponent = props => (
  <Btn {...props} />
)

export default BtnComponent