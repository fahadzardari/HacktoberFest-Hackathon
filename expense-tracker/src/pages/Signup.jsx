import { useState } from "react";
import { signUpWithEmail } from "../services/auth.service.js";

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return ( 
        <>
            <div>
                <div>
                    <form className="max-w-sm mx-auto" onSubmit={(e)=>{ e.preventDefault(); signUpWithEmail(email, password) }}>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" onChange={(e)=> setEmail(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" onChange={(e)=> setPassword(e.target.value)} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button> <br />
                        <button>Signup With Google</button>
                    </form>
                </div>
                <div>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </div>
        </>
    );
}

export default Signup;