import { CreateTweet } from '../../components/CreateTweet/CreateTweet';
import { FeedPost } from '../../components/FeedPost/FeedPost';
import { Container } from './Home.styles';

export function Home() {
    return (
        <Container>
            <CreateTweet />
            <FeedPost />
            <FeedPost />
        </Container>
    )
}
