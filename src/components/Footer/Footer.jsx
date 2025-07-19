import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Recipe Haven</h3>
            <p className="text-sm">
              Recipe Haven is your go-to source for delicious, easy-to-follow recipes. From quick weeknight dinners to indulgent desserts, we bring culinary inspiration to your kitchen.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/recipes" className="hover:text-yellow-400 transition">All Recipes</a></li>
              <li><a href="/categories" className="hover:text-yellow-400 transition">Categories</a></li>
              <li><a href="/meal-planner" className="hover:text-yellow-400 transition">Meal Planner</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links to Popular Recipes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Recipes</h3>
            <ul className="space-y-2">
              <li><a href="/recipes/chocolate-cake" className="hover:text-yellow-400 transition">Chocolate Cake</a></li>
              <li><a href="/recipes/pasta-primavera" className="hover:text-yellow-400 transition">Pasta Primavera</a></li>
              <li><a href="/recipes/homemade-pizza" className="hover:text-yellow-400 transition">Homemade Pizza</a></li>
              <li><a href="/recipes/vegan-smoothie" className="hover:text-yellow-400 transition">Vegan Smoothie</a></li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-4">Have questions or feedback? Reach out to us!</p>
            <p className="text-sm">Email: <a href="mailto:info@recipehaven.com" className="hover:text-yellow-400 transition">info@recipehaven.com</a></p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" className="hover:text-yellow-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-yellow-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 3.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-yellow-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.026.047 1.72.207 2.126.44.51.294.885.637 1.232.984.347.347.69.722.984 1.232.233.406.393 1.1.44 2.126.047 1.024.06 1.379.06 3.808v.37c0 2.43-.013 2.784-.06 3.808-.047 1.026-.207 1.72-.44 2.126-.294.51-.637.885-.984 1.232-.347.347-.722.69-1.232.984-.406.233-1.1.393-2.126.44-1.024.047-1.379.06-3.808.06h-.37c-2.43 0-2.784-.013-3.808-.06-1.026-.047-1.72-.207-2.126-.44-.51-.294-.885-.637-1.232-.984-.347-.347-.69-.722-.984-1.232-.233-.406-.393-1.1-.44-2.126-.047-1.024-.06-1.379-.06-3.808v-.37c0-2.398-.013-2.705-.06-3.72-.047-.976-.207-1.524-.44-1.88-.294-.51-.637-.885-.984-1.232-.347-.347-.722-.69-1.232-.984-.406-.233-1.1-.393-2.126-.44C9.531 2.013 9.886 2 12.315 2zm0 1.66c-2.398 0-2.705.01-3.72.054-.976.044-1.524.184-1.88.372-.458.24-.804.53-1.164.89-.36.36-.65.706-.89 1.164-.188.356-.328.904-.372 1.88-.044 1.015-.054 1.322-.054 3.72v.37c0 2.398.01 2.705.054 3.72.044.976.184 1.524.372 1.88.24.458.53.804.89 1.164.36.36.706.65 1.164.89.356.188.904.328 1.88.372 1.015.044 1.322.054 3.72.054h.37c2.398 0 2.705-.01 3.72-.054.976-.044 1.524-.184 1.88-.372.458-.24.804-.53 1.164-.89.36-.36.65-.706.89-1.164.188-.356.328-.904.372-1.88.044-1.015.054-1.322.054-3.72v-.37c0-2.398-.01-2.705-.054-3.72-.044-.976-.184-1.524-.372-1.88-.24-.458-.53-.804-.89-1.164-.36-.36-.706-.65-1.164-.89-.356-.188-.904-.328-1.88-.372-1.015-.044-1.322-.054-3.72-.054zm-3.27 8.994c0 1.816 1.473 3.289 3.289 3.289s3.289-1.473 3.289-3.289-1.473-3.289-3.289-3.289-3.289 1.473-3.289 3.289zm3.289-1.644a1.645 1.645 0 110 3.29 1.645 1.645 0 010-3.29zm3.27-5.305a.986.986 0 11-1.972 0 .986.986 0 011.972 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center">Stay Updated</h3>
          <p className="text-sm mb-4 text-center">Subscribe to our newsletter for new recipes and cooking tips!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md p-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r-md hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© {new Date().getFullYear()} Recipe Haven. All rights reserved.</p>
          <p className="text-sm mt-2">
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-yellow-400 transition ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;