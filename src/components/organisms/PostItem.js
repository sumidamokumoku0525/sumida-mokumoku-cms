import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Date from '../atoms/Date'

const PostItem = ({item, ...props}) => {
  const { title, body, image, url_slug } = item.fields
  const { createdAt, updatedAt, id } = item.sys
  const imgsrc = image ? image.fields.file.url : '/static/assets/noimage.jpg'
  
  return (
    <Wrapper {...props}>
      <Link prefetch as={`/blog/${url_slug}`} href={`/blogzoom?id=${id}`} passHref>
        <Inner>
          <ImgBox>
            <Img src={imgsrc} />
          </ImgBox>
          <InfoBox>
            <Ttl>
              <Mark>{title}</Mark>
            </Ttl>
            <StyledDate event_date={createdAt} />
          </InfoBox>
        </Inner>
      </Link>
    </Wrapper>
  )
}

export default PostItem

const Wrapper = styled.li`
`
const Inner = styled.a`
  display: block;
  text-decoration: none;
  background: #fff;
  transition: all .6s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 9px rgba(0, 0, 0, 0.1);
  }
`
const ImgBox = styled.div`
  height: 200px;
  overflow: hidden;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: "object-fit: cover";
  transition: all .6s ease;
  ${Inner}:hover & {
    transform: scale(1.1);
    opacity: .7;
  }
`
const InfoBox = styled.div`
  padding: 15px;
`
const Ttl = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  height: 3em;
  margin-bottom: 20px;
  color: #093945;
  overflow: hidden;
`
const Mark = styled.span`
  background-image: linear-gradient(180deg, transparent 45%, #9ef9d8 0);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background-size .6s ease;
  ${Inner}:hover & {
    background-size: 100% 100%;
  }
`
const StyledDate = styled(Date)`
  ${Inner}:hover & {
    color: #89dcbe;
  }
`
