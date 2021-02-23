import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    box-sizing: border-box;
    padding: 9px 14px;
    display: grid;
    grid-template-columns: 46px auto;
    grid-column-gap: 14px;
`;

export const ReactionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 9px;
    > div {
        display: flex;
        align-items: center;
        color: rgb(91, 112, 131);
        font-size: 12px;
        cursor: pointer;
        > svg {
            width: 18px;
            height: 18px;
            margin-right: 14px;
        }
    }
    @media screen and (max-width: 690px) {
        > div > svg {
            margin-right: 0;
        }
    }
`;

export const UserWrapper = styled.div`
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.borderGray};
    border-radius: 50%;
    > svg {
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export const UserInfo = styled.div`
    font-size: 14px;
    color: rgb(91, 112, 131);
    .displayName {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.black};
        font-size: 14px;
        margin-right: 14px;
    }
    .time {
        margin-left: 14px;
    }
`;

export const PostContent = styled.p`
    margin: 4px 0 0 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
`;