import React from 'react'
import styled from 'styled-components';
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Blockquote from '../atoms/Blockquote'

const TopAbout = () => {
  return (
    <Wrapper>
      <Ttl>About</Ttl>
      <Txt>すみだもくもく会とは、みんなで集まって墨田区でもくもく作業をする会です。<br />
        参加すると一緒に勉強してくれる仲間が見つかります。</Txt>
      <Txt>そもそも、もくもく会とは…？</Txt>
      <Bq>
        カフェとか誰かの家とかに集まって、<br />
        それぞれ各自もくもくと勉強したり作業したり<br />
        本を読んだりするだけの会のこと。
      </Bq>
      <Txt>プログラミングしたり、資格勉強をしたり、語学の勉強をしたり…<br />
        様々な用途で参加するメンバーがいます。<br />
        すみだもくもく会で一緒にもくもくしましょう！</Txt>
    </Wrapper>
  )
}
export default TopAbout

const Wrapper = styled.div`
  background: url(/static/assets/bg_about_logo.svg), url(/static/assets/pt_about.gif);
  background-repeat: no-repeat, repeat;
  background-size: auto 100%, auto;
  background-position: center center;
  padding: 80px 0;
`
const Ttl = styled(Title)`
  margin-bottom: 50px;
`
const Txt = styled(Paragraph)`
  margin-bottom: 30px;
`
const Bq = styled(Blockquote)`
  margin-bottom: 30px;
`