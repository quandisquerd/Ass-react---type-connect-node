import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import { useForm } from 'react-hook-form'
import { signin, signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import toastr from "toastr"
import 'toaStr/build/toastr.min.css'
import { IUser } from '../../interface/user';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setemail] = useState('');

    const [pass, setpass] = useState('');
    const [passs, setpasss] = useState('');
    const [fileList, setFileList] = useState('');
    const handleUpload = async ({ file }: any) => {
        const cloud_name = 'dw6wgytc3';
        const preset_name = 'demo_upload';
        const folder_name = 'NODEJS';
        const urls = []
        const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

        const formdata = new FormData();
        formdata.append('upload_preset', preset_name)
        formdata.append('folder', folder_name)

        formdata.append('file', file)
        const response = await axios.post(api, formdata, {

            headers: { "Content-Type": "multipart/form-data" }

        })
        setFileList(response.data.secure_url)

    }
    console.log(fileList)
    const users: any = {}
    const onSubmit = async (data: IUser) => {
        console.log(data)
        users.name = name,
            users.image = fileList,
            users.email = email,
            users.password = pass,
            users.confirmpassword = passs;
        console.log(users)
        const user = await signup(users)

        toastr.success('Đăng ký thành công hãy đăng nhập !')
        navigate('/login')
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
                    <h1 class="display-3 mb-3 animated slideInDown">Register</h1>

                </div>
            </div>
            <Form
                onFinish={onSubmit} style={{ width: "40%", margin: '0 auto', marginBottom: "10%" }}
            ><Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                    <Input onChange={(event) => setName(event.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input onChange={(event) => setemail(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}

                >
                    <Input.Password onChange={(event) => setpass(event.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Comfirmpassword"
                    name="confirmpassword"
                    rules={[{ required: true, message: 'Please input your confirmpassword!' }]}

                >
                    <Input.Password onChange={(event) => setpasss(event.target.value)} />
                </Form.Item>

                <Form.Item label="Image" valuePropName="fileList" >
                    <Upload action="/upload.do" listType="picture-card" customRequest={({ file }: any) => handleUpload({ file })}>
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Register;