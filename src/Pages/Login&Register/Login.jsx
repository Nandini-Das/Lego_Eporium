import { Link , useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from '../../firebase/firebaseConfig';
const Login = () => {
  const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    console.log(from)
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {  from: location.pathname })
            })
            .catch((error) => {
              setError('Your Email/Password does not match');
            });
    }
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          navigate(from, { replace: true })
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };
  
    return (
      <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')" }}>
      <div className="hero-content">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-success" type="submit" value="Login" />
              </div>
              
            </form>
           
            <p className="my-4 text-center">Don't have an account? <Link className="text-purple-600 font-bold" to="/register">Register</Link></p>
            <div className="">
            <button
              type="button"
              className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center justify-center"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="mr-2" /> Sign In with Google
            </button>
         
            <div className='m-2'>
                    {error && <p  className="p-2 bg-red-500 text-white">{error}</p>}
                </div>
        
      </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;