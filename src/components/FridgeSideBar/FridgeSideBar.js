import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { MDBIcon } from "mdb-react-ui-kit";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import FridgeRender from "../FridgeRender/FridgeRender";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const FridgeSideBar = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" title="Country">
            <Link as={Link} to="/category/mexican">
              <Menu.Item key="1">
                <MDBIcon flag="mexico" />
                Mexican
              </Menu.Item>
            </Link>
            <Link as={Link} to="/category/japanese">
              <Menu.Item key="2">
                {" "}
                <MDBIcon flag="japan" />
                Japanese
              </Menu.Item>
            </Link>
            <Link as={Link} to="/category/chinese">
              <Menu.Item key="3">
                {" "}
                <MDBIcon flag="china" />
                Chinese
              </Menu.Item>
            </Link>
            <Link as={Link} to="/category/italian">
              <Menu.Item key="4">
                <MDBIcon flag="italy" />
                Italian
              </Menu.Item>
            </Link>
            <Link as={Link} to="/category/western">
              <Menu.Item key="5">
                <MDBIcon flag="us" />
                Western
              </Menu.Item>
            </Link>
          </SubMenu>
          <SubMenu key="sub2" title="Starter">
            <Menu.Item key="6">Cheese Platter</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="Main Dish">
            <Link as={Link} to="/category/vegetarian">
              <Menu.Item key="7">Vegetarian</Menu.Item>
            </Link>
          </SubMenu>
          <SubMenu key="sub4" title="Dessert">
            <Menu.Item key="8">Chocolate Pudding</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title="Salad">
            <Menu.Item key="9">Ceasar Salad</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title="Soup">
            <Menu.Item key="10">Tomato Soup</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title="Pastry">
            <Menu.Item key="11">Apple Pie</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <FridgeRender />
          </div>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default FridgeSideBar;
