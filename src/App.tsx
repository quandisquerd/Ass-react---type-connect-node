import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../src/layout/Admin';
import Dashbord from './page/admin/Dashbord';
import ListProduct from './page/admin/ListProduct';
import { AddProductpro, getAll, RemoveProduct } from './api/product';
import { IProduct } from './interface/product';
import toastr from "toastr"
import 'toaStr/build/toastr.min.css'
import { AxiosError } from 'axios'
import UpdateProduct from './page/admin/UpdateProduct';
import AddProduct from './page/admin/AddProduct';
import { RemoveCat, UpdateCat, getAllCat } from './api/category';
import ListCategory from './page/admin/ListCategory';
import UpdateCategory from './page/admin/UpdateCategory';
import AddCategory from './page/admin/AddCategory';
import Login from './page/auth/login';
import { UpdateProductpro } from './api/product';
import { AddCat } from './api/category';
import ListUser from './page/admin/ListUser';
import { GetAllAdmin } from './api/user';
import Client from '../../ass/src/layout/Client';
import Register from './page/auth/register';
import { ICategory } from './interface/category';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import Product from './page/Product';
import User from './page/User';
// import 'toaStr/build/toastr.css'




function requireAdmin() {
  const currentUser = JSON.parse(localStorage.getItem('user')!);
  // const check=(currentUser.user)
  if (!currentUser || currentUser.user.role !== 'admin') {
    return <Navigate to='/login' />;
  }
  return <AdminLayout />;
}


const App = () => {
  const [product, setproduct]: any = useState<IProduct[]>([])
  const [cat, setcat]: any = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await getAll('')
      setproduct(data)
    })();

  }, [])
  // console.log(product)
  useEffect(() => {
    (async () => {
      const { data } = await getAllCat()
      setcat(data)
    })();

  }, [])
  // console.log(cat)
  const getall = async (total: string | number) => {
    // console.log(total)
    const { data } = await getAll(total)
    setproduct(data)
  }
  const pro = (product.data)
  const remove = async (id: number | string) => {
    const ok = confirm('ban co muon xoa ?')
    if (ok) {
      console.log(id)
      RemoveProduct(id)
      const newProducts = product.data.filter((p: IProduct) => p._id !== id);
      setproduct({ data: newProducts });
      toastr.success("Xoa thanh cong !")
    } else {
      toastr.error("Xoa that bai !")
    }

  }
  const removecat = async (id: number | string) => {


    const ok = confirm('ban co muon xoa ?')
    if (ok) {

      await RemoveCat(id)
      setcat(cat.filter((data: IProduct) => data._id !== id));
      toastr.success("Xoa thanh cong !")

    } else {
      toastr.error("Xoa that bai !")
    }

  }
  const add = async (body: IProduct) => {
    console.log(body)
    await AddProductpro(body)
    console.log(product)
    const newProducts = [...product.data, body]
    setproduct({ data: newProducts });
    toastr.success("Them thanh cong !")
  }
  const update = async (body: IProduct, id: number | string) => {
    //   console.log(id)
    //  await UpdateProductpro(id,body)
    //   setproduct(product.map(data => data._id === id ? body : data))

    await UpdateProductpro(id, body);

    const list = (product.data.map((c: IProduct) => c._id === id ? body : c))
    setproduct({ data: list })


  }
  console.log(product)

  const addcat = async (body: string) => {
    console.log(body)
    const { data } = await AddCat(body)

    setcat([...cat, body]);
    toastr.success("Them thanh cong !")
  }
  const updatecat = async (id: string | number, body: string) => {
    console.log(id, body)
    const data = await UpdateCat(id, body)
    toastr.success("Update thanh cong !")
  }




  const [user, setuser] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await GetAllAdmin()
      setuser(data)
    })()
  }, [])
  return (
    <div>
      <Routes>
        {/* client */}
        <Route path='/' element={<Client />}>
          <Route index element={<Home products={product} />} />
          <Route path='product'  >
            <Route index element={<Product products={product} />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='user' element={<User />} />

        </Route>

        {/* admin */}
        <Route path='/admin/' element={ requireAdmin() }>
          <Route index element={<Dashbord />} /> 
          <Route path='product' >
            <Route index element={<ListProduct products={product} onRemove={remove} onTotal={getall} />} />
            <Route path='add' element={<AddProduct products={product} onAdd={add} />} />
            <Route path=':id/update' element={<UpdateProduct products={product} onUpdate={update} />} />
          </Route>
          <Route path='category'  >
            <Route index element={<ListCategory category={cat} onRemoveCat={removecat} onTotal={getall} />} />
            <Route path='add' element={<AddCategory category={cat} onAddCat={addcat} />} />
            <Route path=':id/update' element={<UpdateCategory category={cat} onUpdateCat={updatecat} />} />
          </Route>
          <Route path='user'  >
            <Route index element={<ListUser users={user} />} />

          </Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App