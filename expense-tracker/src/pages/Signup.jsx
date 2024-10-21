import { useState } from "react";
import { signInWithGoogle, signUpWithEmail } from "../services/auth.service.js";

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <div className="py-16">
                <h2 className="text-center text-3xl py-4">Sign Up</h2>
                <form className="max-w-sm mx-auto" onSubmit={(e) => { e.preventDefault(); signUpWithEmail(email, password) }}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                        <input type="confirmpass"  id="confirmpass" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button> <br />
                    </div>

                    {/* <button onClick={() => signInWithGoogle()}>
                            <img src="./signup.png" alt="" />
                        </button> */}
                    <div className="flex justify-center">
                        <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
                    </div>
                </form> 
            </div>
        </>
    );
}

export default Signup;