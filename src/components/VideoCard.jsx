import { CheckCircle } from '@mui/icons-material'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constant'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }} />

            </Link>
        </Card>
    )
}

export default VideoCard