import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { MDBIcon } from "mdb-react-ui-kit";
import Footer from "../Footer/Footer";
import CreateRecipeForm from "../CreateRecipeForm/CreateRecipeForm";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const CreateRecipeSideBar = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" title="Country">
            <Menu.Item key="1">
              <MDBIcon flag="france" />
              French
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <MDBIcon flag="germany" />
              German
            </Menu.Item>
            <Menu.Item key="3">
              {" "}
              <MDBIcon flag="china" />
              Chinese
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Starter">
            <Menu.Item key="4">Cheese Platter</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="Main Dish">
            <Menu.Item key="5">Burger</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="Dessert">
            <Menu.Item key="6">Chocolate Pudding</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title="Salad">
            <Menu.Item key="7">Ceasar Salad</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title="Soup">
            <Menu.Item key="8">Tomato Soup</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title="Pastry">
            <Menu.Item key="9">Apple Pie</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <CreateRecipeForm />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default CreateRecipeSideBar;
