import { IUser } from '../interface/user';
import instance from './instancs';
const user = JSON.parse(localStorage.getItem('user')!)
const accessToken = user ? user.accessToken : undefined;
export const signin = (user:IUser)=>{
    return instance.post('/singin',user)
}
export const signup = (user: IUser) => {
    return instance.post('/singup', user,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}