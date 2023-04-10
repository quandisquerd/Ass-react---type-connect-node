import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useForm } from 'react-hook-form'
import { signin } from '../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import toastr from "toastr"
import 'toaStr/build/toastr.css'
import { IUser } from '../../interface/user';


const Login = () => {
    // const navigate= useNavigate()
    const onSubmit = async (data: IUser) => {
        const { data: user } = await signin(data)
        localStorage.setItem('user', JSON.stringify(user))
        toastr.success("Login thành công !")
        setTimeout(() => {
            window.location.href = '/'
        }, 1000);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <>
            <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Login</h1>
                   
                </div>
            </div>
            <Form
                onFinish={onSubmit}
                style={{width:"40%" ,margin:'0 auto', marginBottom:"10%"}}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input {...register('email')} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}

                >
                    <Input.Password {...register('password')} />
                </Form.Item>

                <span>Bạn chưa có tài khoản ?</span> <Link to={'/register'}>Đăng ký</Link>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Login;