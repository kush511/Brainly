import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){

     const usernameRef = useRef<HTMLInputElement>();
        const passwordRef = useRef<HTMLInputElement>();
        const navigate = useNavigate()
        async function signin(){
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
         const response =   await axios.post(`${BACKEND_URL}/signin`,{
               
                    username:username,
                    password:password
            })
           const jwt = response.data.token;
                localStorage.setItem("token",jwt)
                navigate("/dashboard")
        }

    return <div
    className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-16 rounded min-w-48">
            <h1>Signin Page</h1>
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
    <div className="flex justify-center p-4 pt-8 w-full "><Button onClick={signin} loading={false} size="md" variant="secondary" text="Signin" fullWidth={true}/></div>
            
        </div>

    </div>
}