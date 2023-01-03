import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { toast, ToastContainer } from 'react-toastify'
import { api } from '../../constants'
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { api } from '../../constants';

const EditUser = ({ show, closePopup, user, updateEditedUserList }) => {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        country: "",
        phone: "",
        referred_by: "",
        total_referral: 0,
        total_earning: 0,
        total_referral_earning: 0,
        total_donation: 0,
        total_withdrawal: 0
    })

    const updateUser = () => {
        axios.patch(`${api}/profile/${userData._id}`, {
            name: userData.name,
            username: userData.username,
            email: userData.email,
            country: userData.country,
            phone: userData.phone,
            referred_by: userData.referred_by,
            total_referral: userData.total_referral,
            total_earning: userData.total_earning,
            total_referral_earning: userData.total_referral_earning,
            total_donation: userData.total_donation,
            total_withdrawal: userData.total_withdrawal
        }, { withCredentials: true })
            .then((res) => {
                if (res.data.status === "success") {
                    console.log(res.data);
                    toast.success("User updated successfully")
                    updateEditedUserList(res.data.user);
                    closePopup();
                } else {
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }
    useEffect(() => {
        if (user._id !== null || user._id !== undefined || user._id !== "") {
            setUserData(user)
        }
    }, [user])
    return (
        <div className={`relative user_details max-w-[600px] ${show ? "w-[600px]" : "w-[0px]"}`}>
            <div className='flex p-2' onClick={closePopup}>
                <div className='bg-gray-200 cursor-pointer p-2 rounded-[50%]' >
                    <RxCross2 size={25} />
                </div>
            </div>
            <div className='w-full py-3 flex flex-col items-center px-4  input_s'>

                <input
                    value={userData.name || ""}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    type="text" placeholder='Name' />

                <input
                    value={userData.username || ""}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                    type="text" placeholder='Username' />


                <input
                    value={userData.email || ""}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    type="text" placeholder='Email' className='' />
                <input
                    value={userData.country || ""}
                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                    type="text" placeholder='Country' />
                <input
                    value={userData.phone || ""}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    type="text" placeholder='Mobile Number' />
                <input
                    value={userData.referred_by || ""}
                    onChange={(e) => setUserData({ ...userData, referred_by: e.target.value })}
                    type="text" placeholder='Referal ID (optional)' />

                <input
                    value={userData.total_referral || 0}
                    onChange={(e) => setUserData({ ...userData, total_referral: e.target.value })}
                    type="text" placeholder='Total Referral' />

                <input
                    value={userData.total_earning || 0}
                    onChange={(e) => setUserData({ ...userData, total_earning: e.target.value })}
                    type="text" placeholder='Total Earning' />

                <input
                    value={userData.total_referral_earning || 0}
                    onChange={(e) => setUserData({ ...userData, total_referral_earning: e.target.value })}
                    type="text" placeholder='Total Referral Earning' />

                <input
                    value={userData.total_donation || 0}
                    onChange={(e) => setUserData({ ...userData, total_donation: e.target.value })}
                    type="text" placeholder='Total Donation' />

                <input
                    value={userData.total_withdrawal || 0}
                    onChange={(e) => setUserData({ ...userData, total_withdrawal: e.target.value })}
                    type="text" placeholder='Total Withdrawal' />


                <button onClick={updateUser}>Update</button>
            </div>
        </div>
    )
}

export default EditUser