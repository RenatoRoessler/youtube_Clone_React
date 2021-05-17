import { Box, Button, Grid } from "@material-ui/core"
import React from "react"

import Layout from 'src/components/Layout'
import VideoCard from 'src/components/VideoCard'


function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} xs={12}>
              <VideoCard item={item}></VideoCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 01',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarURL',
      views: 10,
      thumb: '/thumbs/next01.png',
      videoUrl: 'url',
      updateAt: new Date()
    },
    {
      id: 2,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 02]',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarURL',
      views: 10,
      thumb: '/thumbs/next02.png',
      videoUrl: 'url',
      updateAt: new Date()
    },
    {
      id: 3,
      title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER [PARTE 02',
      authorId: 1,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarURL',
      views: 10,
      thumb: '/thumbs/next03.png',
      videoUrl: 'url',
      updateAt: new Date()
    },
  ]
  return {
    
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }
  }
}



export default Home