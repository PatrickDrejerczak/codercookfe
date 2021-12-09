import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";

import AdminIngredients from "../AdminOptions/AdminIngredients";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const AdminIngredientSideBar = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" title="Admin Options">
            <Link as={Link} to="/admin/useroption">
              <Menu.Item key="1">User</Menu.Item>
            </Link>
            <Link as={Link} to="/admin/recipeoption">
              <Menu.Item key="2">Recipes</Menu.Item>
            </Link>
            <Link as={Link} to="/admin/ingredientsoption">
              <Menu.Item key="3">Ingredients</Menu.Item>
            </Link>
            <Link as={Link} to="/admin/categoryoption">
              <Menu.Item key="4">Categories</Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <AdminIngredients />
          </div>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default AdminIngredientSideBar;
