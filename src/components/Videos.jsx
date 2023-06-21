import { Stack, Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {
    console.log(videos, "videos")

    return (
        <Stack
            direction='row' flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}
        >
            {videos && videos.map((item, idx) => {
                return (<Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.chanelId && <ChannelCard chanelDetail={item} />}
                </Box>)
            })}
        </Stack>
    )
}

export default Videos