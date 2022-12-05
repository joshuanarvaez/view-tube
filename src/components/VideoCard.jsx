import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

// First destructure video, then destructure id to get videoId, then destructure snippet. Render an mui Card. Inside the Card, Link to videoId if it exists and render the thumbnail url which is the video image in each card. If it doesn't exist, render the demoVideoUrl.
const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
    console.log(snippet);
  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: 358, height: 180 }}
                />
        </Link>
        {/* Render an mui CardContent component which displays our video videoTitle, channelTitle using */}
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard