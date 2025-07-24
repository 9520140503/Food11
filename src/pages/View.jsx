import React from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaBook, FaListUl, FaUtensils } from 'react-icons/fa';
import { Calendar, Utensils, User } from 'lucide-react';


function View() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const recipe = state?.recipe;
  const token = localStorage.getItem('token');

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-gray-100 to-emerald-100">
        <div className="text-center text-gray-700 text-2xl font-semibold animate-pulse">
          No recipe found.
        </div>
      </div>
    );
  }

  const handleDelete = async() => {
   try {
     if (window.confirm('Are you sure you want to delete this recipe?')) {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/recipe/delete/${recipe._id}`,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
      })
      console.log('Delete recipe:', recipe.title);
      navigate('/');
    }
   } catch (error) {
      console.log("Not able to delete: ",error.message);
   }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-gray-100 to-emerald-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:shadow-3xl animate-fade-in">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center gap-x-4">
            <Utensils className="text-emerald-200" size={32} />
            {recipe.title}
          </h1>
          <p className="mt-2 text-emerald-100 flex items-center gap-x-2">
            <User size={20} />
            Created by: <span className="font-semibold">{recipe.createdBy?.full_name || 'Unknown'}</span>
          </p>
        </div>
        <div className="p-6 sm:p-8">
          <div className="relative mb-8">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-900/15 rounded-2xl transition-opacity duration-300 hover:opacity-80"></div>
          </div>
          <div className="mb-8">
            <h2 className="flex items-center text-xl sm:text-2xl font-semibold text-emerald-700 mb-4">
              <FaBook className="mr-3 text-emerald-500" size={24} /> Description
            </h2>
            <p className="text-gray-600 leading-relaxed bg-emerald-50 p-4 rounded-lg shadow-sm">{recipe.description}</p>
          </div>
          <div className="mb-8">
            <h2 className="flex items-center text-xl sm:text-2xl font-semibold text-emerald-700 mb-4">
              <FaListUl className="mr-3 text-emerald-500" size={24} /> Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 bg-emerald-50 p-4 rounded-lg shadow-sm">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2 transition-all duration-200 hover:text-emerald-600 hover:pl-2">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="flex items-center text-xl sm:text-2xl font-semibold text-emerald-700 mb-4">
              <FaUtensils className="mr-3 text-emerald-500" size={24} /> Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-600 bg-emerald-50 p-4 rounded-lg shadow-sm">
              {recipe.instructions.map((step, index) => (
                step.trim() && (
                  <li key={index} className="mb-2 transition-all duration-200 hover:text-emerald-600 hover:pl-2">{step}</li>
                )
              ))}
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="border-2 border-emerald-400 bg-emerald-100 p-4 rounded-lg shadow-sm">
              <p className="flex items-center font-semibold text-emerald-700 mb-2">
                <Calendar className="mr-2 text-emerald-500" size={20} />
                Created on: {new Date(recipe.createdAt).toLocaleDateString()}
              </p>
              <p className="flex items-center font-semibold text-emerald-700">
                <Calendar className="mr-2 text-emerald-500" size={20} />
                Updated on: {new Date(recipe.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/edit"
                state={{recipe}}
                className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
              >
                <FaEdit className="mr-2" /> Edit Recipe
              </Link>
              <button
                onClick={handleDelete}
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
              >
                <FaTrash className="mr-2" /> Delete Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;