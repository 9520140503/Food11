import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function AuthLayout({
    authentication = true, children}) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);

 useEffect(() => {
    if(authentication && authStatus !== authentication){
        navigate('/login');
    }else if(!authentication && authStatus !== authentication){
        navigate('/');
    }
    setLoading(false);
 },[authentication,authStatus,navigate])

  return <div>
    {loading ? 
    (
        <div className="min-h-screen flex-grow bg-gray-200 flex items-center justify-center">
            <Loader/>
        </div>
    ):
    (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {children}
        </div>
    )
    }
  </div>
}

export default AuthLayout