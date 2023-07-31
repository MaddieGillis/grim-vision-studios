import { Card, CardMedia } from "@mui/material";

const VideoCard = () => {

    return (
        <Card sx={{ bgcolor: 'error.main' }}>
            <CardMedia>
                {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zTCEJVA3Av8" title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/CCNrnTz0qp8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
            </CardMedia>
        </Card>
    );
}

export default VideoCard;