import React, { useEffect, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineEye } from 'react-icons/hi'
import { BiBlock } from 'react-icons/bi'
import Base from '../components/Base/Base'
import UserDetails from '../components/User/UserDetails'
import AddUser from '../components/User/AddUser'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { api } from '../constants'
import EditUser from '../components/User/EditUser'
const User = () => {

  //user details
  const [oneUser, setOneUser] = useState({});

  // all users 
  const [userList, setUserList] = React.useState([]);

  // show user details
  const [showUser, setShowUser] = React.useState(false);

  // show add user
  const [showAddUser, setShowAddUser] = React.useState(false);

  // show edit user 
  const [showEditUser, setShowEditUser] = React.useState(false);

  // show user details 
  const handleDetailsView = (user) => {
    setOneUser(user);
    setShowUser(true)
  }

  // add new  user 
  const handleNewAddUser = () => {
    setOneUser({});
    setShowAddUser(true);
  }

  // edit user 
  const handleEditUser = (user) => {
    setOneUser(user);
    setShowEditUser(true);
  }

  //add user to list
  const addUserToList = (addeduser) => {
    setUserList([...userList, addeduser])
  }

  // change user block status 
  const changeUserBlockstatus = (id) => {
    const updatedUserList = userList.map((user) => {
      if (user._id === id) {
        user.blocked = !user.blocked;
      }
      return user;
    })
    setUserList(updatedUserList);
  }

  //handleUpdatedUser 
  const handleUpdatedUser = (updatedUser) => {
    const updatedUserList = userList.map((user) => {
      if (user._id === updatedUser._id) {
        return updatedUser;
      }
      return user;
    })
    setUserList(updatedUserList);
  }

  // block user 
  const handleBlockUser = (user) => {
    axios.patch(`${api}/admin/change-block/${user._id}`, {}, { withCredentials: true })
      .then((res) => { 
        if(res.data.status === "success"){
          changeUserBlockstatus(user._id);
          toast.success(res.data.message);
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }
      )
  }

  //delete user
  const handleDeleteUser = (id) => {
    axios.delete(`${api}/admin/delete-user/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "success") {
          const updatedUserList = userList.filter((user) => user._id !== id);
          setUserList(updatedUserList);
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }



  useEffect(() => {
    try {
      axios.get(`${api}/user`)
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res.data);
            setUserList(res.data.users);
          } else {
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
        <table className='table custom-table table-normal shadow_small w-full'>
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
                    <HiOutlineEye onClick={() => handleDetailsView(user)} size={20} />
                    <AiOutlineEdit onClick={() => handleEditUser(user)} size={20} />
                    <BiBlock title={user.blocked ? "Unblock User" : "Block User"} onClick={() => handleBlockUser(user)} size={18} color={user.blocked ? "red" : "black"} />
                    <AiOutlineDelete size={20} onClick={() => handleDeleteUser(user._id) } />
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        <AddUser addUserToList={(user) => addUserToList(user)} user={oneUser} show={showAddUser} closePopup={() => setShowAddUser(false)} />


        <EditUser show={showEditUser} user={oneUser} closePopup={() => setShowEditUser(false)} updateEditedUserList={(user) => handleUpdatedUser(user)} />

        <UserDetails show={showUser} user={oneUser} closePopup={() => setShowUser(false)} />
      </div>
    </Base>
  )
}

export default User