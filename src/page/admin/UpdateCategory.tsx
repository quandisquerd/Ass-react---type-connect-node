import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import 'toaStr/build/toastr.css'
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
import { getAllCat, getOneCat } from '../../api/category';
import { getOne } from '../../api/product';



const UpdateCategory = (props:any) => {
    console.log(props)
    const [cat, setcat]:any = useState({})


    const { id }:any = useParams();
    const [name, setname] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await getOneCat(id)
            setcat(data)
            setcat(data)
        })()
    }, [])
    const cats:any={}
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        cats.name= name
        props.onUpdateCat(id ,cats)
    }

    return (
        <>
            <h1 style={{ marginLeft: "50px", fontSize: '30px', marginBottom: '50px' }} >Update Category</h1>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"

                style={{ maxWidth: 600 }}
            >


                <Form.Item label="Name">
                    <Input placeholder={cat.name} onChange={(e:any) => setname(e.target.value)} />
                </Form.Item>









                <Form.Item label="Submit">
                    <Button onClick={handleSubmit}>Update Category</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UpdateCategory
