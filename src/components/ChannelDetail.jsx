import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}"`).
            then((data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).
            then((data) => setVideos(data?.items[0]))
    }, [id])
    return (
        <Box minHeight='95vh' >
            <Box>
                <div>

                </div>
            </Box>
        </Box >
    )
}

export default ChannelDetail