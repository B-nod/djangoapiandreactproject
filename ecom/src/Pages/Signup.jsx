import axios from 'axios';
import React,{useState} from 'react'
import {Helmet} from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [username,setUsername]= useState('')
    const[password, setPassword]= useState('')

    //The event object (e) contains information about the event that just occurred, such as a form submission, button click, or key press. In this case, it's the form submission event.
    const handleSubmit= async e=>{
        e.preventDefault()
        // By default, when certain events such as form submissions or link clicks occur, the browser performs specific actions like refreshing the page or navigating to a new URL. However, using event.preventDefault(), we can intercept and override this default behavior, giving us more control over how our web application responds to user interactions.
        try{
            const{data}= await axios.post('http://127.0.0.1:8000/api/signup/',{
                username,password
            })
            //When the form is submitted, the axios.post() function sends a request to the signup API (http://127.0.0.1:8000/api/signup/), passing the username and password from the state as the request payload:

               // local server'ko signup API ma mathy banako username ra password state var lai data ko rupma request pathauxa 
            //await le chai wait garxa server ko  response na aaye samma
            toast.success("Registered Successfully")
            setUsername('')
            setPassword('')

                
             //If the registration is successful (no error), this line triggers a success notification using the react-toastify library. The message "Registered Successfully" is displayed as a toast.

            //After successful registration, these lines reset the form input fields by clearing the username and password state variables. This makes the input fields empty again.
      
        }
        catch(err){
            toast.error(err.response.data.error)
            // err.response.data.error contains the error message returned by the server.
        }

    }

  return (
    <>
    <Helmet>
        <title>Registration </title>
        <meta name="description" content="voting" />
        
        {/* //notes: seo ko lagi keyword haru content= vitra rakhra garne ho */}
    {/* ani helmet tag chai react app ko title change garna use hunxa  */}
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>

    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <a href="#"
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                login to your account
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

                        //e refers to the event object, specifically the change event triggered when the user types into the input.
                        //e.target.value captures the current value (text) entered by the user in the input field.
                        // //In short, whenever the user types something in the password field, the new input value is stored in the password state variable.
                        />
                    </div>
                </div>


                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Create account
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

export default Signup