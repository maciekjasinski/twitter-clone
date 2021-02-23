import {
    StarBorder,
    ImageOutlined,
    GifOutlined,
    EqualizerOutlined,
    EmojiEmotionsOutlined,
    EventOutlined,
    Person
} from '@material-ui/icons';
import {
    SectionTitle,
    HeaderWrapper,
    Wrapper,
    InputWrapper,
    Button,
    IconsWrapper,
    UserIconWrapper
} from './CreateTweet.styles';


export function CreateTweet() {
    return (
        <div>
            <HeaderWrapper>
                <SectionTitle>Home</SectionTitle>
                <StarBorder />
            </HeaderWrapper>
            <Wrapper>
                <UserIconWrapper>
                    <Person />
                </UserIconWrapper>
                <InputWrapper>
                    <textarea placeholder="What's happening?"></textarea>
                    <div>
                        <IconsWrapper>
                            <ImageOutlined />
                            <GifOutlined />
                            <EqualizerOutlined />
                            <EmojiEmotionsOutlined />
                            <EventOutlined />
                        </IconsWrapper>
                        <Button>Tweet</Button>
                    </div>
                </InputWrapper>
            </Wrapper>
        </div>
    )
}
