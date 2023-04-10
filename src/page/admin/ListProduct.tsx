import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Pagination, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
import { useParams, Link } from 'react-router-dom';
import { getAllCat, getOneCat } from '../../api/category';
import { Input } from 'antd';
import 'toaStr/build/toastr.css'

import '../../App.css'
import { getAllPro } from '../../api/product';
const { Search } = Input;
interface DataType {
    key: string;
    name: string;
    price: number;
    address: string;
    tags: string[];
}


type Props = {
    products:{
         data:any,
        totalPages:number
    }
 
    onRemove: (id: string | number) => void,
    onTotal: (id: string | number) => void,
}
const ListProduct = ({ products, onRemove, onTotal }: Props) => {
    // console.log(products.data)
    const [cat, setcat] = useState([])
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const { data } = await getAllCat()
            setcat(data)
        })()
    }, [])
    const getCategoryName = (categoryId: ICategory) => {
        const category:any = cat.find((c: any) => c._id === categoryId);
        // console.log(category)
        return category ? category.name : '';
    };
    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text:string) => <p>{text}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        ,
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            className: "img",
            render: (img:string) => <img src={img} />
        },
        {
            title: 'CategoryId',
            key: 'categoryId',
            dataIndex: 'categoryId',
            render: (categoryId:ICategory) => getCategoryName(categoryId),

        },
        ,
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_:ICategory, record: any) => (
                <Space size="middle">

                    <Button type="primary" style={{ backgroundColor: "red" }} onClick={() => onRemove(record._id)}>Delete</Button>
                    <Button type="primary" ><Link to={`${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];


    const [product, setproduct] = useState([])
    useEffect(() => {
        setproduct(products.data)
    }, [products])
    console.log(product)

    const handleSearch = async (value: string) => {
        const pro = await getAllPro()
        console.log(pro.data.data)
        const name = value;
        console.log(name);
        const data = pro.data.data.filter((data:IProduct) => data.name.toLowerCase().includes(name.toLowerCase()))
        setproduct(data)



    }
    const [procat, setprocat] = useState([])
    const handleCat = async (id: number | string) => {


        (async () => {
            const {data} = await getOneCat(id)
            setproduct(data.products)
        })()


    }
    // console.log(cat)
    return (<>

        <h1 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '50px' }} >List Products</h1>
        <div className="add">
            <Button style={{ float: 'left', background: "green", height: "40px", color: "white" }}><Link to={'/admin/product/add'}>Add Product</Link></Button>


            <Space direction="vertical" style={{ float: 'right' }}>

                <Select style={{ width: 170 }}>
                    <Select.Option value="demo">{''}</Select.Option>
                    {cat?cat.map((data: IProduct) => <Select.Option value={data._id} key={data._id}  id="cat"><Button value={data._id} onClick={() => handleCat(data._id)} style={{ border: 'none' }}>{data.name}</Button></Select.Option>):''}
                </Select>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={handleSearch}
                />
                <br></br>
            </Space>

        </div>

        <Table columns={columns} dataSource={product} pagination={false} rowKey="_id" />
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <Pagination

            pageSize={1}
            total={products.totalPages}
            onChange={(page) => onTotal(page)}
        />

    </>)
}

export default ListProduct;