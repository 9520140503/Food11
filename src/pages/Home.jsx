import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const flavorRegions = [
    { name: 'Punjab', description: 'Rich butter chicken and creamy dal makhani.', image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg', path: '/recipes?s=punjabi' },
    { name: 'Uttar Pradesh', description: 'Flavorful biryani and tender kebabs.', image: 'https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg', path: '/recipes?s=up' },
    { name: 'Delhi', description: 'Spicy chaat and succulent tandoori.', image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', path: '/recipes?s=delhi' },
    { name: 'Rajasthan', description: 'Hearty dal baati and sweet ghevar.', image: 'https://assets.grok.com/users/6bd202e1-b6d2-4da6-85c5-4a3976cb240b/generated/d4a36fb9-32b6-491e-bcda-8406fb99141d/image.jpg', path: '/recipes?s=rajasthani' },
  ];

  const testimonials = [
    { name: 'Anjali S.', quote: 'The butter chicken recipe was just like my dadi’s!', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', location: 'Amritsar, Punjab' },
    { name: 'Rohan M.', quote: 'Cooking biryani with Recipe Haven felt like a festival at home.', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', location: 'Lucknow, Uttar Pradesh' },
    { name: 'Priya K.', quote: 'The chaat recipe brought Delhi’s street vibes to my kitchen!', image: 'https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg', location: 'Delhi, India' },
    { name: 'Vikram S.', quote: 'Dal baati recipe was so authentic, I’m hooked!', image: 'https://images.pexels.com/photos/733152/pexels-photo-733152.jpeg', location: 'Jaipur, Rajasthan' },
  ];

  const chefs = [
    { name: 'Chef Simran', dish: 'Paneer Tikka', bio: 'Simran shares Punjab’s tandoori secrets.', image: 'https://assets.grok.com/users/6bd202e1-b6d2-4da6-85c5-4a3976cb240b/generated/8876e999-685f-47c6-b26d-84eb2cd5b45e/image.jpg' },
    { name: 'Chef Arjun', dish: 'Aloo Paratha', bio: 'Arjun brings Delhi’s street food to life.', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg' },
  ];

  const tips = [
    'Temper spices in ghee for authentic North Indian flavor.',
    'Marinate tandoori dishes overnight for deeper taste.',
    'Use fresh paneer for creamy curries.',
    'Grind whole spices for the best biryani aroma.',
  ];

  const communityHighlights = [
    { user: 'Neha R.', recipe: 'Rogan Josh', image: 'https://images.pexels.com/photos/6419708/pexels-photo-6419708.jpeg' },
    { user: 'Amit P.', recipe: 'Chole Bhature', image: 'https://images.pexels.com/photos/2474660/pexels-photo-2474660.jpeg' },
  ];

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const responses = [
      'Craving spicy? Try our Chicken Tikka Masala!',
      'Want something hearty? Check out our Dal Makhani.',
      'Quick snack? Our Delhi Chaat is perfect!',
      'Love sweets? Try our Rajasthani Ghevar!',
    ];
    setChatResponse(responses[Math.floor(Math.random() * responses.length)]);
  };

  const nextTip = () => {
    setCarouselIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg')] bg-cover bg-center animate-pulse"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in">
            Recipe Haven: North Indian Delights
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Savor the rich flavors of North India, from Punjab to Rajasthan.
          </p>
          <Link
            to="/recipes"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Start Cooking
          </Link>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Chat with Our North Indian Recipe Bot
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Tell us your cravings, and we’ll suggest a North Indian dish!
          </p>
          <form onSubmit={handleChatSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="E.g., 'I want something spicy!'"
              className="w-full sm:w-96 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              Ask Now
            </button>
          </form>
          {chatResponse && (
            <p className="mt-6 text-lg text-gray-800 font-handwritten animate-fade-in">
              {chatResponse}
            </p>
          )}
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Get Started with North Indian Cooking
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Begin your North Indian culinary journey in three simple steps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Find a Recipe', desc: 'Explore curries, tandoori, and more.', path: '/recipes' },
              { title: 'Plan Your Feast', desc: 'Create a North Indian meal plan.', path: '/planner' },
              { title: 'Join the Community', desc: 'Share your dishes and tips.', path: '/community' },
            ].map((step, index) => (
              <Link
                key={index}
                to={step.path}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Explore North India’s Flavors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorRegions.map((region, index) => (
              <Link
                key={index}
                to={region.path}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white">{region.name}</h3>
                    <p className="text-sm text-gray-200">{region.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Chefs Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Meet Our North Indian Chefs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
                  <p className="text-gray-600 font-handwritten">{chef.dish}</p>
                  <p className="text-gray-600 mt-2">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            North Indian Cooking Tips
          </h2>
          <div className="relative bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <p className="text-lg text-gray-600">{tips[carouselIndex]}</p>
            <button
              onClick={nextTip}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300"
            >
              Next Tip
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our North Indian Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-emerald-600 bg-cover bg-opacity-10"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <p className="text-gray-600 italic font-handwritten text-lg">"{testimonial.quote}"</p>
                  <p className="mt-2 font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            North Indian Community Creations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {communityHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={highlight.image}
                  alt={highlight.recipe}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{highlight.recipe}</h3>
                  <p className="text-gray-600">by {highlight.user}</p>
                  <Link to="/community" className="mt-2 inline-block text-teal-600 hover:text-teal-700">
                    See More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Explore North Indian Recipes
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Discover dishes to suit every taste and occasion.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Curries', path: '/' },
              { title: 'Tandoori', path: '/' },
              { title: 'Sweets', path: '/' },
              { title: 'Spicy', path: '/' },
            ].map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                <p className="text-gray-600 mt-2">Find delicious {category.title.toLowerCase()} recipes.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-500 to-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Cook North Indian Magic?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Join Recipe Haven and bring North India’s flavors to your kitchen.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-teal-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;