import React, { useState } from 'react'
import {logout} from "../../store/authSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = async() => {
    try{
      setLoading(true);
      localStorage.removeItem('token');
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/logout`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
      })
      console.log('Logout Successful');
      dispatch(logout());
      navigate('/');
    }catch(error){
      console.error("Logout Error: ", error.message);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div>
      <button
      className='bg-emerald-200 text-emerald-700 p-1 rounded-md hover:bg-emerald-300 transition-colors flex items-center gap-2'
      onClick={handleLogout}>
        {loading? "Logging out...": "Logout"}
      </button>
    </div>
  )
}

export default Logout