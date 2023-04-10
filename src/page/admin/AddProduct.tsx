import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form'
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
import { AddProductpro } from '../../api/product';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
type Props = {
  products: {
    data: any,
    totalPages: number
  }

  onRemove: (id: string | number) => void,
  onTotal: (id: string | number) => void,
}
const AddProduct = (props:any) => {
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [fileList, setFileList] = useState('');
  const handleUpload = async ({ file }:any) => {
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
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [input, setinput] = useState([])
  const product:any = {}
  const handleSubmits = async (e:any) => {
    e.preventDefault();

    product.categoryId = category,
      product.price = price,
      product.description = description,
      product.name = name,
      product.image= fileList
 
    props.onAdd(product)
    navigate('/admin/product')
    // const { data } = await AddProductpro(product)

  }
// console.log(input)
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   Props.onAdd(input)
  //   navigate('/admin/product')
  // }
  
  console.log(fileList)
  return (
    <>
      <h1 style={{ marginLeft: "50px", fontSize: '30px', marginBottom: '50px' }} >Add Product</h1>
      <Form
    
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"

        style={{ maxWidth: 600 }}

      >


        <Form.Item label="Name">
          <Input id="name" onChange={(event) => setName(event.target.value)} />
        </Form.Item>
        <Form.Item label="Category" >
          <Select onChange={(value) => setCategory(value)}>
            <Select.Option value="demo">{''}</Select.Option>
            {cat.map((data:any)=> <Select.Option value={data._id} id="cat" >{data.name}</Select.Option>)}
          </Select>
        </Form.Item>




        <Form.Item label="Price">
          <InputNumber id="price" onChange={(value:any) => value !== null && setPrice(value)} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} {...register('description')} id="desc" onChange={(event) => setDescription(event.target.value)} />
        </Form.Item>

        <Form.Item label="Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card" customRequest={( {file} :any) => handleUpload({file})}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Submit">
          <Button onClick={handleSubmits}>Add Product</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddProduct 
