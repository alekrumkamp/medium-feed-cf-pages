import { Container, Typography } from "@mui/material"
import Feed from "../src/components/Feed/Feed";

const Home = () => {
    return (
        <Container sx={{ padding: '1em', textAlign: 'center'}}>
            <Typography gutterBottom variant="h4" component="div">
                Medium Feed
            </Typography>
            <Feed/>
        </Container>
    )
}

export default Home