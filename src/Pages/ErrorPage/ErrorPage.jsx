import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto flex items-center">
        <div className="mr-8">
            <img src="https://images.unsplash.com/photo-1650692201357-3b1b15469952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="404 Image" className="w-96" />
          <h1 className="text-6xl text-center text-red-600 font-bold mb-4">404</h1>
          <p className="text-lg text-center text-gray-600 mb-8">Page Not Found</p>
          
          <div className='text-center'>
          <a href="/" className="px-4  text-center py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Back to Home
          </a>
          </div>
         
        </div>
        
      </div>
    </div>
    );
};

export default ErrorPage;