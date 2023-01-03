import React from 'react'
import { RxCross2 } from 'react-icons/rx'


const UserDetails = ({ user, show, closePopup }) => {
    return (
        <div className={`user_details ${show ? "w-[600px]" : "w-[0px]"}`}>
            <div className='w-full flex my-2 px-3'>
                <div className='bg-gray-200 cursor-pointer p-2 rounded-[50%]' onClick={closePopup}>
                    <RxCross2 size={25} />
                </div>
            </div>
            <div className='w-full flex flex-col items-start px-4 py-5'>
                <div className='user_details_p'><span>Name:</span> <span>{user.name}</span></div>
                <div className='user_details_p'><span>Username:</span> <span>{user.username}</span></div>
                <div className='user_details_p'><span>Email:</span> <span>{user.email}</span></div>
                <div className='user_details_p'><span>Country:</span> <span>{user.country}</span></div>
                <div className='user_details_p'><span>Level:</span> <span>{user.level}</span></div>
                <div className='user_details_p'><span>Mobile Number:</span> <span>{user.phone}</span></div>
                <div className='user_details_p'>
                    <span>Profile:</span>
                    {user.profile ?
                        (
                            <a href={user.profile} target="_blank" rel={"noreferrer"} >{user.profile}</a>)
                        :
                            (<span>N/A</span>
                        )}
                </div>
                <div className='user_details_p'>
                    <span>Passport:</span>
                    {user.passport ?
                        (
                            <a href={user.passport} target="_blank" rel={"noreferrer"} >{user.passport}</a>)
                        :
                            (<span>N/A</span>
                        )}
                </div>
                <div className='user_details_p'>
                    <span>National Id:</span>
                    {user.national_id ?
                        (
                            <a href={user.national_id} target="_blank" rel={"noreferrer"} >{user.national_id}</a>)
                        :
                            (<span>N/A</span>
                        )}
                </div>
                <div className='user_details_p'>
                    <span>Referred By:</span>
                    <span>{user.referred_by || "N/A"}</span>
                </div>
                <div className='user_details_p'><span>Total Referals:</span> <span>{user.total_referral}</span></div>
                <div className='user_details_p'><span>Total Earning:</span> <span>${user.total_earning}</span></div>
                <div className='user_details_p'><span>Referal Earning:</span> <span>${user.total_referral_earning}</span></div>
                <div className='user_details_p'><span>Donations:</span> <span>${user.total_donation}</span></div>
                <div className='user_details_p'><span>Total Widthdrawls:</span> <span>${user.total_withdrawal}</span></div>
            </div>
        </div>
    )
}

export default UserDetails