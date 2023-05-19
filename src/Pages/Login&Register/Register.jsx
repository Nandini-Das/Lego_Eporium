import { Link , useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        const photo = form.photo.value;
        console.log(name, email, password)
        if (password.length < 6) {
          setError("Password should be at least 6 characters long.");
          return;
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate("/login");
                logOut();
                updateUserData(result.user, name, photo);
            })
            .catch(error => {
                console.log(error);
            })
            
            const updateUserData = (user, name, photo) => {
              updateProfile(user, {
                  displayName: name,
                  photoURL : photo
              })
                  .then(() => {
                      console.log('user name updated')
                  })
                  .catch(error => {
                      setError(error.message);
                  })
          }
        

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register Now!!!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered"  required />
                         </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                    <div className="text-danger">
                    {error && <p className="p-2 bg-red-900 text-white">{error}</p>}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;