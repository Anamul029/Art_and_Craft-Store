import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


const Login = () => {
    const { userLogin, googleLogin, githubLogin } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // login
        userLogin(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! please provide currect information",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            })

    }
    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGitHubLogin = () => {
        githubLogin()
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="card shrink-0 w-full md:w-96 max-w-sm  shadow-2xl  bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                        <p className="text-center">New our website?please <NavLink to="/register"><span className="font-bold text-green-700 border-b-4">Register</span></NavLink></p>

                    </form>
                    {/* another login part */}
                    <div className="flex flex-col gap-2 mx-auto">
                        <button onClick={handleGoogleLogin} className="btn bg-yellow-400 w-auto mx-auto">Google Login</button>
                        <button onClick={handleGitHubLogin} className="btn bg-red-400 w-auto mx-auto mb-3">Github Login Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;