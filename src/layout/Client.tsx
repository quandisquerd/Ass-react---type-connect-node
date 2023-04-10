// import React from 'react';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Avatar, Button, MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { Link, Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const { Header, Content, Footer, Sider } = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//     (icon, index) => {
//         const key = String(index + 1);

//         return {
//             key: `sub${key}`,
//             icon: React.createElement(icon),
//             label: `subnav ${key}`,

//             items: new Array(4).fill(null).map((_, j) => {
//                 const subKey = index * 4 + j + 1;
//                 return {
//                     key: subKey,
//                     label: `option${subKey}`,
//                 };
//             }),
//         };
//     },
// );

// const App: React.FC = () => {
//     const navigate = useNavigate()
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     const acssest = JSON.parse(localStorage.getItem('user')!)
//     const user = acssest ? acssest.user : undefined;
// // console.log(user.role)
//     const LogOut = async () => {
//         const data = await localStorage.removeItem("user");
//         navigate('/')
//     }

//     return (


//         <Layout>
//             {user?user.role == "admin" && (
//                 <span>Xin chào ADMIN  {user.name} <Button onClick={() => navigate("/admin")}>Quản lý</Button></span>
//             ):''}
//             {user ? user.role == "member" && (
//                 <div className="logo" ><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> {user.name} <Button onClick={LogOut}>Đăng xuất</Button></div>
//             ) : ''}
//             <Header className="header">



//                 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  >
//                     <Menu.Item key={'2'}>
//                         <Link to={'/'}>Home</Link>
//                     </Menu.Item>
//                     <Menu.Item key={'1'}>
//                         <Link to={'/login'}>Login</Link>
//                     </Menu.Item>


//                 </Menu>

//             </Header>
//             <Content style={{ padding: '0 50px' }}>

//                 <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
//                     {/* <Sider style={{ background: colorBgContainer }} width={200}>
//                         <Menu
//                             mode="inline"
//                             defaultSelectedKeys={['1']}
//                             defaultOpenKeys={['sub1']}
//                             style={{ height: '100%' }}
//                             items={items2}
//                         />
//                     </Sider> */}
//                     <Content style={{ padding: '0 24px', minHeight: 280 }}>
//                         <Outlet/>
//                     </Content>
//                 </Layout>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
//         </Layout>
//     );
// };

// export default App;


import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../src/styleclient.css'
const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            items: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const App: React.FC = () => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const acssest = JSON.parse(localStorage.getItem('user')!)
    const user = acssest ? acssest.user : undefined;
    // console.log(user.role)
    const LogOut = async () => {
        const data = await localStorage.removeItem("user");
        navigate('/')
    }


    return (

        <body>
            {user ? user.role == "admin" && (
                <span style={{ background: 'white' }}>Xin chào ADMIN  {user.name} <Button onClick={() => navigate("/admin")}>Quản lý</Button></span>
            ) : ''}
            {user ? user.role == "member" && (
                <div className="logo" ><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> {user.name} <Button onClick={LogOut}>Đăng xuất</Button></div>
            ) : ''}
            <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s" style={{ background: 'black' }}>
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                        <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        {user ? user.role == "admin" && (
                            <span style={{ color: 'white' }}>Xin chào ADMIN  {user.name} <Button onClick={() => navigate("/admin")}>Quản lý</Button></span>
                        ) : (
                            <>
                                <small>Follow us:</small>
                                <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a></>
                        )

                        }
                        {user ? user.role == "member" && (
                            <div className="logo" ><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> {user.name} <Button onClick={LogOut}>Đăng xuất</Button></div>
                        ) : ''}

                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                    </a>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0" style={{ color: 'white' }}>
                            <Link to={'/'}> <a href="" className="nav-item nav-link active" style={{ color: 'white' }}>Home</a></Link>

                            <Link to={'/product'}>  <a href="product.html" className="nav-item nav-link" style={{ color: 'white' }}>Products</a></Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ color: 'white' }}>Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="feature.html" className="dropdown-item">Our Features</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link" style={{ color: 'white' }}>Contact Us</a>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-search text-body" style={{ color: 'white' }}></small>
                            </a>
                            <Link to={user ? '/user' : '/login'} ><a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-user text-body " style={{ color: 'white' }}></small>
                            </a></Link>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-shopping-bag text-body" style={{ color: 'white' }}></small>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>


            <Outlet />

            <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">F<span className="text-secondary">oo</span>dy</h1>
                            <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </body>
    );
};

export default App;

