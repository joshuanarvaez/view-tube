import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle, VapingRooms } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


// First destructure video, then destructure id to get videoId, then destructure snippet. Render an mui Card. Inside the Card, Link to videoId if it exists and render the thumbnail url which is the video image in each card. If it doesn't exist, render the demoVideoUrl.
const VideoCard = ({ video: { id: { videoId }, snippet, statistics } }) => {
    
    var timeStamp = snippet.publishedAt;
    var dateFormat= new Date(timeStamp);
    dateFormat = dateFormat.getHours() + ":" + dateFormat.getMinutes() + " "+ dateFormat.toDateString();

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                    />
            </Link>
            {/* Render an mui CardContent component which displays our video videoTitle, channelTitle using */}
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF" textAlign="center">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} 
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#8789ff" marginTop="8px" textAlign="center">
                        {snippet?.channelTitle || demoChannelTitle} 
                        <CheckCircle sx={{ fontSize: 13, color: '#8789ff', ml: '5px' }} /> 
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold" color="#FFF" textAlign="center" marginTop="7px">
                    {dateFormat}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
  );
}
export default VideoCard;