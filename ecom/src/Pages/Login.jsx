import axios from 'axios';
import React,{useState} from 'react'
import {Helmet} from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [username,setUsername]= useState('')
    const[password, setPassword]= useState('')

    const handleSubmit= async e=>{
        e.preventDefault()
        try{
            const{data}= await axios.post('http://127.0.0.1:8000/api/login/',{
                username,password
            })
            //By default, axios converts the data object you provide into JSON format.
            ////When the form is submitted, the axios.post() function sends a request to the signup API (http://127.0.0.1:8000/api/login/), passing the username and password as request object in backend 
            // tespaxi backend bata je repsonse aauxa teslai data ma rakheko xa
            localStorage.setItem('user', JSON.stringify(data)); // store user data came from backend 
            localStorage.setItem('isLoggedIn', 'true'); // store login status
            window.dispatchEvent(new Event('loginStatusChanged')); 
            // This creates a new custom event named 'loginStatusChanged'. When the event is dispatched, any event listeners that are listening for the 'loginStatusChanged' event will be executed. simply logged in vayo vanera inform gareko
            toast.success('Login successfully, redirecting to homepage!');
            setTimeout(() => {
              navigate('/'); // Wait for a moment before redirecting
            }, 5000); // Delay the navigation for 2 seconds to let the toast be visible
          }

        
        catch(err){
            toast.error(err.response.data.error)
        }

    }

  return (
    <>
     <Helmet>
        <title>Login </title>
        <meta name="description" content="voting" />
        
        {/* //notes: seo ko lagi keyword haru content= vitra rakhra garne ho */}
    {/* ani helmet tag chai react app ko title change garna use hunxa  */}
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>

    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Login into account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <a href="#"
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Create a account
            </a>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={handleSubmit}>
               

                <div className="mt-6">
                    <label for="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        
                        <input 
                        id="username" 
                        name="username" 
                        placeholder="john" 
                        type="text" required=""
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        onChange={e=>setUsername(e.target.value)}
                        value={username}
                        />
                    </div>
                </div>

                

                <div className="mt-6">
                    <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required=""
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                        />
                    </div>
                </div>


                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Login account
                        </button>
                    </span>
                </div>
            </form>

        </div>
    </div>
</div>
    </>
  )
}

export default Login