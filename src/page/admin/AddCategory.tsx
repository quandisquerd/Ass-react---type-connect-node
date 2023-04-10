import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
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
import { ICat } from '../../../../chap05/src/interface/category';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const AddCategory = (props:any) => {
    const navigate = useNavigate()
    console.log(props)

    const [name,setname]= useState([])
    const cats:any={}
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        cats.name=name
        props.onAddCat(cats)
        navigate('/admin/category')
    }

    return (
        <>
            <h1 style={{ marginLeft: "50px", fontSize: '30px', marginBottom: '50px' }} >Add Category</h1>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"

                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Name">
                    <Input onChange={(e:any) =>setname(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Submit">
                    <Button onClick={handleSubmit}>Add Category</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddCategory
