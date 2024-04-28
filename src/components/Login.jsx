import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const Login = () => {
     const {userLogin}=useContext(AuthContext)
     console.log(userLogin)
    const handleLoginn=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        // user Login part
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                // sweet alert
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: "Successfully Register Complete",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                // Navigate('/')
                
            })
            .catch(error => {
                console.error(error.massege)
                alert('please provide currect information')
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLoginn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center">New to out wensite?please <NavLink to="/register"><span className="font-bold text-blue-800">Register</span></NavLink></p>
                </form>
                {/* login container */}
                <div className="flex flex-col gap-2 mx-auto">
                    {/* <button onClick={handleGoogleLogin} className="btn bg-yellow-400 w-auto mx-auto">Google Login</button>
                    <button onClick={handleGitHubLogin} className="btn bg-red-400 w-auto mx-auto mb-3">Github Login Login</button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;