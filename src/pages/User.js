import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { HiOutlineEye } from 'react-icons/hi'
import Base from '../components/Base/Base'
import UserDetails from '../components/User/UserDetails'
import AddUser from '../components/User/AddUser'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { api } from '../constants'
const User = () => {

  const [oneUser, setOneUser] =useState({});

  const [userList, setUserList] = React.useState([]);
  const [showUser, setShowUser] = React.useState(false);
  const [showAddUser, setShowAddUser] = React.useState(false);

  const handleDetailsView = (user) => {
    setOneUser(user);
    setShowUser(true)
  }
  const handleNewAddUser = () => {
    setOneUser({});
    setShowAddUser(true);
  }

  const addUserToList = (addeduser) => {
    setUserList([...userList, addeduser])
  }

  useEffect(() => {
    try {
      axios.get(`${api}/user`)
      .then((res) => {
        if(res.data.status === "success"){
          console.log(res.data);
          setUserList(res.data.users);
        }else{
          console.log(res.data);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  
  return (
    <Base>
      <ToastContainer position='bottom-left' />
      <div className="flex px-4 my-4 justify-between items-center">
        <h2 className='h5 font-sans text-gray-800'>User Details</h2>
        <span onClick={() => handleNewAddUser()} className='bg-gray-200 p-2 rounded-[50%] cursor-pointer'>
          <BsPlusLg size={20} color={"black"} />
        </span>
      </div>
      <div className='w-full px-4'>
        <table className='custom-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 && userList.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.level}</td>
                <td>
                  <div className='gap-x-5 flex justify-center items-center table_actions'>
                    <HiOutlineEye onClick={() => handleDetailsView(user)} size={20}  />
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        <AddUser addUserToList={(user) => addUserToList(user)} user={oneUser} show={showAddUser} closePopup={() => setShowAddUser(false)} />
        <UserDetails show={showUser} user={oneUser} closePopup={() => setShowUser(false)} />
      </div>
    </Base>
  )
}

export default User