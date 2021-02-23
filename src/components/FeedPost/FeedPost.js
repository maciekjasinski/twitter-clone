import {
    CachedOutlined,
    FavoriteBorderOutlined,
    ChatBubbleOutlineOutlined,
    ShareOutlined,
    Person
} from '@material-ui/icons';
import {
    Container,
    ReactionsWrapper,
    UserInfo,
    UserWrapper,
    PostContent
} from './FeedPost.styles';

export function FeedPost() {
    return (
        <Container>
            <UserWrapper>
                <Person />
            </UserWrapper>
            <div>
                <UserInfo>
                    <span className="displayName">Joe Doe</span>
                    <span className="username">@joedoe</span>
                    <span className="time">16h</span>
                </UserInfo>
                <PostContent>
                    MrBeast Burger has sold over 1,000,000 sandwiches in under 2 months
                </PostContent>
                <ReactionsWrapper>
                    <div>
                        <ChatBubbleOutlineOutlined /> 2.9K
                    </div>
                    <div>
                        <CachedOutlined /> 3.5K
                    </div>
                    <div>
                        <FavoriteBorderOutlined /> 166.4K
                    </div>
                    <div>
                        <ShareOutlined />
                    </div>
                </ReactionsWrapper>
            </div>
        </Container>
    )
}
