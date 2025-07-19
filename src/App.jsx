import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "./store/authSlice";

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          await dispatch(login({ token }));
          console.log({token}); 
        } catch (error) {
          console.error("Auto-login failed:", error);
        }
      }
      setLoader(false);
    };
    init();
  }, [dispatch, token]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {loader ? (
        <div className="flex flex-col min-h-screen animate-fade-in">
          <Header />
          <main className="min-h-screen flex-grow bg-gray-900 flex items-center justify-center">
            <Loader />
          </main>
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen animate-fade-in">
          <Header />
          <main className="min-h-screen flex-grow bg-gray-100">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
