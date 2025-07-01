'use client'
import { error } from "console";
import React, { useState, FormEvent } from "react";

const SignIn = () => {
    // Step 1: Create a state variable for each input
    const [username, setUserName] = useState('')
    const [password,setPassword]=useState('')
    const [encKey,setEncKey]=useState('')

    const handleSubmit = async (oEvent: FormEvent<HTMLFormElement>) => {
        oEvent.preventDefault(); // Prevents the default browser page reload

        const payload = {
            username : username,
            password:password,
            encKey:encKey
        }
      
        console.log("Form Submitted!");
      

        
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log(response)
        if(response.status === 200){
            const response = await fetch('http://localhost:8000/dashboard', {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            
        });
        console.log(response)
        }else{
            console.error()
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign In</h2>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                        
                       value={username}
                       onChange={(oEvent)=>{setUserName(oEvent.target.value)}}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                         value={password}
                       onChange={(oEvent)=>{setPassword(oEvent.target.value)}}
                       
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">ENC</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter ENC"
                           value={encKey}
                       onChange={(oEvent)=>{setEncKey(oEvent.target.value)}}
                      
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignIn;