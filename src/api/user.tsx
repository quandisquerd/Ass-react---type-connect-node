import instance from "./instancs";

export const GetOneAdmin=(id:string|number)=>{
    return instance.get('/user/'+id)
}
export const GetAllAdmin = () => {
    return instance.get('/user' )
}