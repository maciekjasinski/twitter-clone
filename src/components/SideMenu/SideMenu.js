import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    Home,
    HomeOutlined,
    Explore,
    ExploreOutlined,
    Notifications,
    NotificationsOutlined,
    Email,
    EmailOutlined,
    Bookmark,
    BookmarkBorder,
    ListAlt,
    SpeakerNotes,
    Person,
    PersonOutline,
    MoreHoriz
} from '@material-ui/icons';
import {
    Wrapper,
    StyledLogo,
    StyledNavLink,
    TweetButton,
    UserWrapper,
    UserName,
    UserDisplayName
} from './SideMenu.styles';

export function SideMenu() {
    const location = useLocation();
    const renderIcon = (path, iconActive, icon) => {
        if (path === location.pathname) {
            return iconActive;
        }
        else {
            return icon
        }
    }
    return (
        <Wrapper>
            <div>
                <StyledLogo />
                <div>
                    <StyledNavLink to="/home">
                        {renderIcon('/home', <Home />, <HomeOutlined />)}
                        <span>Home</span>
                    </StyledNavLink>
                    <StyledNavLink to="/explore">
                        {renderIcon('/explore', <Explore />, <ExploreOutlined />)}
                        <span>Explore</span>
                    </StyledNavLink>
                    <StyledNavLink to="/notifications">
                        {renderIcon('/notifications', <Notifications />, <NotificationsOutlined />)}
                        <span>Notifications</span>
                    </StyledNavLink>
                    <StyledNavLink to="/messages">
                        {renderIcon('/messages', <Email />, <EmailOutlined />)}
                        <span>Messages</span>
                    </StyledNavLink>
                    <StyledNavLink to="/bookmarks">
                        {renderIcon('/bookmarks', <Bookmark />, <BookmarkBorder />)}
                        <span>Bookmarks</span>
                    </StyledNavLink>
                    <StyledNavLink to="/lists">
                        {renderIcon('/lists', <SpeakerNotes />, <ListAlt />)}
                        <span>Lists</span>
                    </StyledNavLink>
                    <StyledNavLink to="/profile">
                        {renderIcon('/profile', <Person />, <PersonOutline />)}
                        <span>Profile</span>
                    </StyledNavLink>
                    <StyledNavLink to="/more">
                        <MoreHoriz />
                        <span>More</span>
                    </StyledNavLink>
                </div>
                <TweetButton>Tweet</TweetButton>
            </div>
            <UserWrapper>
                <div>
                    <Person />
                </div>
                <div>
                    <UserDisplayName>Joe Doe</UserDisplayName>
                    <UserName>@joedoe</UserName>
                </div>
                <MoreHoriz />
            </UserWrapper>
        </Wrapper>
    )
}
