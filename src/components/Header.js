import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../constants/theme';
import { GrayButton, BlueButton } from './Items/Button';

const Header = props => {
  const { handleLogin, handleLogout, dispatch, user, history } = props;

  return (
    <header>
      <Link to="/"><Title>Re-Meetting</Title></Link>
      <HeaderRight>
        <HeaderSubText>
          {
            user && user.isLogin
              ? (
                <p>
                  {user.name}
                  {' '}
                  님
                </p>
              )
              : <p>로그인 후 이용해주세요.</p>
          }
        </HeaderSubText>
        {
          user && user.isLogin
            ? (
              <GrayButton
                grayLine
                grayText
                inline
                onClick={() => {
                  handleLogout(dispatch);
                  history.push('/');
                }}
              >
                Logout
              </GrayButton>
            )
            : <BlueButton inline onClick={() => handleLogin(dispatch)}>로그인</BlueButton>
        }
      </HeaderRight>
    </header>
  );
};

const Title = styled.h1`
  display: inline;
  line-height: 1.6em;
  margin: 0 .5em;
`;

const HeaderRight = styled.div`
  float: right;
  margin: .5em;
`;

const HeaderSubText = styled.span`
  display: inline-block;
  color: ${theme.COLOR_WHITE};
`;

export default memo(Header);
