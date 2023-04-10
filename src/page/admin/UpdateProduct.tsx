import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,

    Checkbox,
    Upload,
} from 'antd';
import { ICategory } from '../../interface/category';
import { getAllCat } from '../../api/category';
import { IProduct } from '../../interface/product';
import { AddProductpro, getOne } from '../../api/product';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'toaStr/build/toastr.css'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const UpdateProduct = (props:any) => {
     const {id}:any = useParams();
    console.log(props)
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');

    const [cat, setcat] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await getAllCat()
            setcat(data)
        })()
    }, [])
    const [pro,setpro]:any =useState([])
    const [ca,setca]:any= useState([])
    useEffect(() => {
        (async () => {
            const { data } = await getOne(id)
            setpro(data)
            setca(data.categoryId)
        })()
    }, [])
    console.log(pro)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
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
   
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const [input, setinput] = useState([])
    const product: any = {}
    const handleSubmits = async (e:any) => {
        e.preventDefault();
       
        product.categoryId = category,
            product.price = price,
            product.description = description,
            product.name = name
            product.image= fileList

        props.onUpdate(product,id)
        navigate('/admin/product')
        // const { data } = await AddProductpro(product)

    }
    // console.log(input)
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   Props.onAdd(input)
    //   navigate('/admin/product')
    // }
    return (
        <>
            <h1 style={{ marginLeft: "50px", fontSize: '30px', marginBottom: '50px' }} >Update Product</h1>
            <Form

                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"

                style={{ maxWidth: 600 }}

            >


                <Form.Item label="Name">
                    <Input id="name" onChange={(event) => setName(event.target.value)} placeholder={pro.name}/>
                </Form.Item>
                <Form.Item label="Category" >
                    <Select onChange={(value) => setCategory(value)} placeholder={ca.name}>
                        <Select.Option value="demo">{''}</Select.Option>
                        {cat.map((data:any) => <Select.Option key={data._id} value={data._id} id="cat" >{data.name}</Select.Option>)}
                    </Select>
                </Form.Item>




                <Form.Item label="Price">
                    <InputNumber id="price" onChange={(value:any) => value !== null && setPrice(value)} placeholder={pro.price} />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} {...register('description')} id="desc" onChange={(event) => setDescription(event.target.value)} placeholder={pro.description} />
                </Form.Item>

                <Form.Item label="Image" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card" customRequest={({ file }) => handleUpload({ file })}>
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Submit">
                    <Button onClick={handleSubmits}>Update Product</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UpdateProduct 
