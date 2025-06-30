import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function UseContent(){
    const [content,setContent]= useState([]);

    async function refresh(){
        try {
            const response = await axios.get(BACKEND_URL+"/content",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            });
            setContent(response.data.content);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }

    useEffect(()=>{
        refresh()

        const interval = setInterval(()=>{
            refresh()
        },10*1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])

    return {content,refresh};
}