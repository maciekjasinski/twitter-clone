import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Wrapper = styled.div`
    height: 100vh;
    padding: 14px;
    box-sizing: border-box;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1280px) {
        width: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const StyledLogo = styled(Logo)`
    fill: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    padding-left: 14px;
    @media screen and (max-width: 1280px) {
        padding: 0
    }
`;

const activeClassName = 'active'

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    color: ${({ theme }) => theme.colors.black};
    height: 44px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    width: fit-content;
    box-sizing: border-box;
    padding: 0 14px;
    margin-bottom: 14px;
    &.${activeClassName} {
        color: ${({ theme }) => theme.colors.primary};
    }
    > svg {
        margin-right: 16px;
    }
    &:hover {
        background-color: rgba(29, 161, 242, 0.1);
        color: ${({ theme }) => theme.colors.primary};
        border-radius: 9999px;
    }
    @media screen and (max-width: 1280px) {
        width: 44px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        > span {
            display: none;
        }
        > svg {
            margin: 0;
        }
    }
`;

export const TweetButton = styled.button`
    height: 44px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 9999px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    @media screen and (max-width: 1280px) {
        width: 44px;
        height: 44px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        font-size: 0;
    }
`;

export const UserWrapper = styled.div`
    display: grid;
    grid-template-columns: 37px auto 18px;
    align-items: center;
    grid-column-gap: 12px;
    height: 37px;
    box-sizing: border-box;
    padding-left: 14px;
    > div:first-child {
        width: 37px;
        height: 37px;
        background-color: ${({ theme }) => theme.colors.gray};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        > svg {
            color: ${({ theme }) => theme.colors.white};
        }
    }
    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        padding: 0;
        > svg {
            display: none;
        }
    }
    > svg {
        fill: ${({ theme }) => theme.colors.black};
    }
`;

export const UserDisplayName = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: bold;
    @media screen and (max-width: 1280px) {
        display: none;
    }
`;

export const UserName = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    @media screen and (max-width: 1280px) {
        display: none;
    }
`;