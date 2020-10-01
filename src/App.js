import React from "react";
import starlinkLogo from "./images/starlink_logo.svg";
import { Layout } from "antd";
import Main from "./components/Main";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <img src={starlinkLogo} className="App-logo" alt="logo" />
        <p className="title">Telescope</p>
      </Header>
      <Content>
        <Main />
      </Content>
      <Footer>
        (c) 2020 Telescope, a Starlink tracker. All Rights Reserved. Website
        Made by Feng You
      </Footer>
    </Layout>
  );
}

export default App;
