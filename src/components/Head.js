import React from 'react'
import Head from 'next/head'

const PageHead = ({
  title = 'すみだもくもく会',
}) => {
  return (
    <Head>
      <title>{ title } | 墨田区で開催するもくもく会</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta name="description" content="すみだもくもく会は、墨田区で開催するもくもく会です。プログラミング、デザイン、資格の勉強、語学の勉強など、なんでもOKです。墨田区で集まってもくもくしませんか？" />
      <meta name="keywords" content="すみだもくもく会,墨田区,もくもく会,錦糸町,押上,エンジニア,デザイナー,プログラミング" />
      <meta property="og:title" content={`${ title } | 墨田区で開催するもくもく会`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="すみだもくもく会は、墨田区で開催するもくもく会です。プログラミング、デザイン、資格の勉強、語学の勉強など、なんでもOKです。墨田区で集まってもくもくしませんか？" />
      <meta property="og:url" content="https://sumida-mokumoku.site" />
      <meta property="og:site_name" content="すみだもくもく会" />
      <meta property="og:image" content="https://sumida-mokumoku.site/img/img_og.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@SumidaMokumoku" />
      <meta name="twitter:title" content={`${ title } | 墨田区で開催するもくもく会`} />
      <meta name="twitter:description" content="すみだもくもく会は、墨田区で開催するもくもく会です。" />
      <meta name="twitter:image" content="https://sumida-mokumoku.site/img/img_og.jpg" /> */}
      <link rel="icon" href="/static/assets/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:700&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

export default PageHead