import { useContext } from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

import ActionBox from 'src/components/ActionBox/ActionBox'
import ActiveHm from 'src/components/ActiveHm/ActiveHm'
import FarcasterCastsCell from 'src/components/FarcasterCastsCell'
import FarcasterUserCell from 'src/components/FarcasterUserCell'
import { HivemindContext } from 'src/providers/context/HivemindContext'

import 'swiper/css'

const HomePage = () => {
  // const f = useContext(HivemindContext).setActiveHmData
  // const flap = () => {
  //   f({
  //     __typename: 'Hivemind',
  //     id: 8,
  //     name: 'Tris',
  //     profileImageURL: 'https://cdn.filestackcontent.com/4LTarcuERwbrGJeGAJD9',
  //     aboutInformation: 'This is what h/tris is all about',
  //   })
  // }

  const setFarcasterName = useContext(HivemindContext).activeHmData.username
  const farcasterName = setFarcasterName ? setFarcasterName : 'tris'

  return (
    <>
      {/* <Swiper
        spaceBetween={50}
        onSlideChange={() => {
          flap()
        }}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
        <SwiperSlide>
          <ActiveHm />
        </SwiperSlide>
      </Swiper> */}

      <ActiveHm />

      <FarcasterUserCell profileId={1} />

      {farcasterName !== 'add' && (
        <div>
          <ActionBox />
          <FarcasterCastsCell userName={farcasterName} />
        </div>
      )}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="tristangrace"
        theme="dark"
        noHeader="true"
        noFooter="true"
        noBorders="true"
        tweetLimit="20"
        transparent="true"
        options={
          {
            // autoHeight: true,
            // noHeader: true,
            // noFooter: true,
            // noBorders: true,
          }
        }
      />
      <TwitterTimelineEmbed
        sourceType="likes"
        screenName="tristangrace"
        theme="dark"
        noHeader="true"
        noFooter="true"
        noBorders="true"
        tweetLimit="20"
        transparent="true"
        options={
          {
            // autoHeight: true,
            // noHeader: true,
            // noFooter: true,
            // noBorders: true,
          }
        }
      />
    </>
  )
}

export default HomePage
