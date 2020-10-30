import axios from 'axios'

export const ftch = () => {
    return (dispatch)=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            dispatch(getUser(response.data))
        })
    }
}



export const getUser=(users)=> {
    return {
        type:'USERS',
        payload: users
    }
}