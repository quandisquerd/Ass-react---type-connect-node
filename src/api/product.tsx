import { IProduct } from "../interface/product";
import instance from "./instancs";

const user= JSON.parse(localStorage.getItem('user')!)
const accessToken = user ? user.accessToken :undefined;

export const getAll = (total:string|number) =>{
    return instance.get(`/products?_order=desc&_page=${total}&_sort=price&_limit=5`)
}
export const getOne = (id: string | number) => {
    return instance.get(`/products/${id}`)
}
export const getAllPro = () => {
    return instance.get(`/products?_limit=10000`)
}
export const RemoveProduct=(id:number|string)=>{
    return instance.delete('/products/'+id,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }

    })
}
export const AddProductpro = (data:IProduct) => {
    return instance.post('/add', data,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const UpdateProductpro= (id:number|string,data:IProduct) => {
    return instance.put(`/products/${id}`, data,{
        
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        
    })
}