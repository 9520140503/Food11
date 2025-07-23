import { Link2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function All() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/recipe/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || 'Failed to fetch');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-tr from-white via-gray-50 to-white text-gray-900">
      {/* {error && (
        <div className="text-red-600 font-medium text-center bg-red-100/80 backdrop-blur-sm p-3 rounded-lg shadow-md mb-6">
          {error}
        </div>
      )} */}

      {loading ? (
        <div className="text-center mt-20 text-lg text-gray-500 animate-pulse">Loading recipes...</div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-2 max-w-7xl mx-auto">
          {data.map((recipe, index) => (
            <div
              key={index}
              className="w-[240px] sm:w-[300px]  bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-5 transition-all duration-300 p-1"
            >
              <img
                src={recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'}
                alt={recipe.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />
              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm line-clamp-3">{recipe.description}</p>

                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                  <Link
                    to="/view"
                    state={{recipe}}
                    className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 transition"
                  >
                    <Link2 size={16} className="mr-2" /> View More
                  </Link>
                  <span className="text-xs sm:text-sm bg-green-200 px-1 py-2 text-green-700 rounded-lg">By: {recipe.createdBy?.full_name || 'Unknown'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-24">
          <p className="text-gray-600 text-lg">No recipes found 🍽️</p>
          <p className="text-gray-500 text-sm mt-2">Try adding some or check your connection.</p>
        </div>
      )}
    </div>
  );
}

export default All;