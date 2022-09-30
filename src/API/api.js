import * as axios from "axios";


const instance =  axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'49708fbb-8b73-4b90-a5a0-9c80fcd24744'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            })
    }
}



