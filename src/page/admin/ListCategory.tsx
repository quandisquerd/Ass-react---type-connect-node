import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
import { useParams, Link } from 'react-router-dom';
import { getAllCat } from '../../api/category';
import { Input } from 'antd';

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
    category: ICategory[]
    onRemoveCat: (id: string | number) => void,
    onTotal: (id: string | number) => void,
}
const ListCategory = ({ category, onRemoveCat, onTotal }: Props) => {
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
    const columns:any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text:string) => <p>{text}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_:any, record: any) => (
                <Space size="middle">

                    <Button type="primary" style={{ backgroundColor: "red" }} onClick={() => onRemoveCat(record._id)}>Delete</Button>
                    <Button type="primary" ><Link to={`${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];


    const [cate, setcate] = useState<ICategory[]>([])
    useEffect(() => {
        setcate(category)
    }, [category])
    console.log(cate)

    const handleSearch = async (value: string) => {
        const ca= await getAllCat()
        console.log(ca.data)
        const name = value;
        console.log(name);
        const data = cate.filter((data:ICategory) => data.name.toLowerCase().includes(name.toLowerCase()))
        setcate(data)



    }

    return (<>

        <h1 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '50px' }} >List Category</h1>
        <div className="add">
            <Button style={{ float: 'left', background: "green", height: "40px", color: "white" }}><Link to={'/admin/category/add'}>Add Category</Link></Button>


            <Space direction="vertical" style={{ float: 'right' }}>


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

        <Table columns={columns} dataSource={cate} rowKey="_id" />
        <br></br> <br></br> <br></br> <br></br> <br></br>


    </>)
}

export default ListCategory;