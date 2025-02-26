import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-800">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;