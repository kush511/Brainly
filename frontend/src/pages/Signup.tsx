import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export  function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate =  useNavigate()
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
       await axios.post(`${BACKEND_URL}/signup`,{
           
                username:username,
                password:password
            
        })
        navigate("/signin")
    }
    return <div
    className="h-screen w-screen  bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-16 rounded min-w-48">
            <h1>Signup Page</h1>
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
    <div className="flex justify-center p-4 pt-8 w-full ">
        <Button onClick={signup} loading={false} size="md" variant="secondary" text="Signup" fullWidth={true}/></div>
            
        </div>

    </div>
}