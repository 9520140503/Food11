
import { Utensils, Image, FileText, List, ListOrdered } from 'lucide-react';
import React, { useState } from 'react';

function New() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [error, setError] = useState('');
  const [loader,setLoader] = useState(false);
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      imageUrl,
      description,
      ingredients,
      instructions,
    };
    try {
     setLoader(true);
     if (!token) {
      setError("Authentication token not found. Please login again.");
      return;
    }

      const response = await fetch('http://localhost:3000/recipe/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create recipe');
      }
      setTitle('');
      setImageUrl('');
      setDescription('');
      setIngredients([]);
      setInstructions([]);
      setError('');
    } catch (error) {
      setError(`Error: ${error.message || 'Failed to create'}`);
    } finally{
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl lg:max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-500 to-black  mb-8 text-center">Create Your Recipe</h2>
        <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 lg:p-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 w-full max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl"
          >
            <div className="flex items-center space-x-3">
              <Utensils className="w-6 h-6 text-blue-500" />
              <div className="flex-1">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter recipe title"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Image className="w-6 h-6 text-blue-500" />
              <div className="flex-1">
                <label htmlFor="image" className="text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-6 h-6 text-blue-500 mt-5" />
              <div className="flex-1">
                <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter recipe description"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition duration-200"
                />
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <List className="w-6 h-6 text-blue-500 mt-5" />
              <div className="flex-1">
                <label htmlFor="ingredients" className="text-sm font-medium text-gray-700">Ingredients</label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={ingredients.join('\n')}
                  onChange={(e) => setIngredients(e.target.value.split('\n').map((i) => i.trim()))}
                  placeholder="Enter ingredients separate with ( \n )"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition duration-200"
                />
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ListOrdered className="w-6 h-6 text-blue-500 mt-5" />
              <div className="flex-1">
                <label htmlFor="instructions" className="text-sm font-medium text-gray-700">Instructions</label>
                <textarea
                  id="instructions"
                  name="instructions"
                  value={instructions.join('\n ')}
                  onChange={(e) => setInstructions(e.target.value.split('\n').map((i) => i.trim()))}
                  placeholder="Enter instructions separate with ( \n )"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] transition duration-200"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
            {loader ? "Submitting": "Submit Recipe" }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default New;