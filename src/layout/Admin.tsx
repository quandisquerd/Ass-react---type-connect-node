import React, { useState } from 'react';
import '../App.css'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Button, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link ,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    items?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        items,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashbord', '1', <PieChartOutlined />),
    getItem('List Product', '2', <DesktopOutlined />),
    getItem('Product', 'sub1', <UserOutlined />, [
        getItem('List Product', '3'),
        getItem('Add Product', '4'),

    ]),
    getItem('Categorys', 'sub1', <UserOutlined />, [
        getItem('List Categorys', '5'),
        getItem('Add Categorys', '6'),

    ]),
   
];

const App: React.FC = (props) => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const acssest = JSON.parse(localStorage.getItem('user')!)
    const user = acssest ? acssest.user : undefined;
    console.log(user)
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const LogOut =async()=>{
        const data =await localStorage.removeItem("user");
        navigate('/')
    }




    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  >
                
                <div id="img">
                    <img src={user?user.image:''}  />
                    <h2>{user?user.name:''}</h2>
                </div>
                <Menu theme="dark"mode="inline">
                    <Menu.Item key={"1"}>
                        <Link to={'/admin'}>Dashbord</Link>
                    </Menu.Item>
                    <Menu.Item key={"2"}>
                        <Link to={'/admin/product'}>List Product</Link>
                    </Menu.Item>
                    <Menu.Item key={"3"}>
                        <Link to={'/admin/category'}>List Category</Link>
                    </Menu.Item>
                    <Menu.Item key={"4"}>
                        <Link to={'/admin/user'}>List User</Link>
                    </Menu.Item>
                </Menu>
               
                    
               
            </Sider>
            <Layout className="site-layout">
                 <Button style={{width:'80px', left:'90%'}} onClick={LogOut}>Logout</Button>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                
                <Content style={{ margin: '0 16px' }}>
                   
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                     <Outlet/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        </Layout>
    );
};

export default App;