import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ArticleCard = (props) => {
    const { url, title, description, imageUrl } = props.post;
    return (
        <Card sx={{
            background: '#eaf5ff',
            margin: '1em auto',
            maxWidth: 680,
            padding: '1em',
            textAlign: 'left'
        }}>
            <CardMedia
                component="img"
                height="320"
                image={imageUrl}
                alt={description}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={url}>
                    <Button size="small">Read the article</Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default ArticleCard;