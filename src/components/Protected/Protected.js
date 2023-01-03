import axios from 'axios'
import React, { useEffect } from 'react'
import { api } from '../../constants';

const Protected = ({ Component }) => {
    const [loggedin, setLoggedIn] = React.useState(false);

    useEffect(() => {
        axios.post(`${api}/admin/isloggedin`,{},{withCredentials: true})
        .then(res => {
            if(res.data.loggedin === true){
                setLoggedIn(true);
            }else{
                window.location.href = "/login";
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


  return (
    <>
        {!loggedin ? <p></p> : <Component />}
    </>
  )
}

export default Protected