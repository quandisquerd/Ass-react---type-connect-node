import instance from "./instancs";

const user = JSON.parse(localStorage.getItem('user')!)
const accessToken = user ? user.accessToken : undefined;
export const getAllCat=()=>{
    return instance.get('/categorys')
}
export const RemoveCat = (id:string|number) => {
    return instance.delete(`/categorys/${id}`,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const getOneCat = (id: string | number) => {
    return instance.get(`/categorys/${id}`)
}
export const AddCat = (cat: string ) => {
    return instance.post('/create',cat, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const UpdateCat = (id: string |number, cat: string) => {
    return instance.put(`/categorys/${id}`, cat, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}