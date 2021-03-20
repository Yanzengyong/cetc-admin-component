import React from 'react'
import styled from 'styled-components'
import Markdown from 'rsg-components/Markdown'
import Ribbon from 'rsg-components/Ribbon';
import Version from 'rsg-components/Version'
import './index.css'

const sidebarWidth = 300;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`
const Header = styled.header`
  color: #fff;
  background-color: #2a335a;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`
const HeaderContent = styled.div`
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const HeaderNav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const Body = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const Sidebar = styled.div`
  background-color: #2a335a;
  width: ${sidebarWidth}px;
  height: 100%;
  overflow: auto;
`

const Main = styled.main`
  width: calc(100% - 300px);
  height: 100%;
  overflow: auto;
  padding: 0 36px;
  box-sizing: border-box;
`

const Footer = styled.footer`
  color: lightgray;
  font-size: 12px;
`

export function StyleGuideRenderer({ title, version, children, toc }) {

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img className='header_logo' src={require('./mainLogo.png')} alt=""/>
          <span>{title}</span>
        </HeaderContent>
        <HeaderNav>
          <a href='https://github.com/Yanzengyong' target='_blank' rel="noopener noreferrer">
            <img className='github_logo' src={require('./GitHub-Mark-Light.png')} alt="github icon" />
          </a>
        </HeaderNav>
      </Header>
      <Body>
        <Sidebar>
          <Version>{version}</Version>
          {toc}
        </Sidebar>
        <Main>
          {children}
          <Footer>
            <Markdown text={`智能数据服务前端小组贡献 ❤️`} />
          </Footer>
        </Main>
      </Body>

      <Ribbon />
    </Container>
  );
}

export default StyleGuideRenderer;
