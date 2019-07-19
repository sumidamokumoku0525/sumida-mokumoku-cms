import React from 'react'
import styled from 'styled-components';

const EventDate = styled.time`
  font-size: 14px;
  color: #757575;
  font-weight: bold;
  transition: color .6s ease;
`

const weekChars = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

const DateComponent = ({ event_date, ...props }) => {
  const eventDate = new Date(event_date)
  const year = eventDate.getFullYear()
  const month = ('0' + (eventDate.getMonth() + 1) ).slice(-2)
  const date = ('0' + (eventDate.getDate()) ).slice(-2)
  const day = weekChars[eventDate.getDay()]
  
  return (
    <EventDate datetime={event_date} {...props}>{`${year}.${month}.${date} ${day}`}</EventDate>
  )
}

export default DateComponent
