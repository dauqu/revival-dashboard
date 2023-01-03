import React, { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import axios from 'axios';
import { toast } from "react-toastify";
import { api } from '../../constants';

const AddUser = ({ show, closePopup, addUserToList }) => {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        country: "",
        phone: "",
        password: "",
        repeatPassword: "",
        referal: "",
    })

    const onRegister = () => {
        console.log(userData);
        if (userData.password !== userData.repeatPassword) {
            return toast.error("Passwords do not match");
        }
        try {
            axios.post(`${api}/register`, userData)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.status === "success") {
                        toast.success(res.data.message);
                        addUserToList(res.data.user)
                        setUserData({
                            name: "",
                            username: "",
                            email: "",
                            country: "",
                            phone: "",
                            password: "",
                            repeatPassword: "",
                            referal: "",
                        });
                        closePopup();
                    } else {
                        toast.info(res.data.message);
                    }
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            toast.error(error.message);
        }
    }

 

    return (
        <div className={`relative user_details ${show ? "w-[600px]" : "w-[0px]"}`}>

            <div className='flex p-2' onClick={closePopup}>
                <div className='bg-gray-200 cursor-pointer p-2 rounded-[50%]' >
                    <RxCross2 size={25} />
                </div>
            </div>
            <div className='w-full flex py-3 flex-col items-center px-4 input_s'>
                <input
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    type="text" placeholder='Name' />
                <input
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    type="text" placeholder='Username' />
                <input
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    type="text" placeholder='Email' />
                <input
                    value={userData.country}
                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                    type="text" placeholder='Country' />
                <input
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    type="text" placeholder='Mobile Number' />
                <input
                    value={userData.referal}
                    onChange={(e) => setUserData({ ...userData, referal: e.target.value })}
                    type="text" placeholder='Referal ID (optional)' />
               <input
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    type="password" placeholder='Password' />
               <input
                    value={userData.repeatPassword}
                    onChange={(e) => setUserData({ ...userData, repeatPassword: e.target.value })}
                    type="password" placeholder='Repeate Password' /> 
                
               <button onClick={onRegister}>Submit</button>
            </div>
        </div>
    )
}

export default AddUser