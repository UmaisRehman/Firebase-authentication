import React, { useRef } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const email = useRef()
    const password = useRef()
    const auth = getAuth();
    const navigate = useNavigate()

    const loginUser = (event) => {
        event.preventDefault()
        // console.log(email.current.value);
        // console.log(password.current.value);

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                navigate('/')
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <>
            <div className='text-center m-10 text-black flex flex-col items-center'>
                <div className='shadow-md w-full max-w-md p-6 rounded-lg bg-white'>
                    <form onSubmit={loginUser}>
                        <div className='mb-4'>
                            <input
                                className='border-2 border-gray-400 px-4 py-2 rounded-2xl w-full'
                                type="email"
                                placeholder='Enter your email'
                                required
                                ref={email}
                            />
                        </div>

                        <div className='mb-4'>
                            <input
                                className='border-2 border-gray-400 px-4 py-2 rounded-2xl w-full'
                                type="password"
                                placeholder='Password'
                                required
                                ref={password}
                            />
                        </div>

                        <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition w-full">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>)
}

export default Login
