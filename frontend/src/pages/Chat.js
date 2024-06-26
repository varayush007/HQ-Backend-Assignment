import React, { useEffect } from "react";
import axios from 'axios';

const Chat = () => {
    
    const fetchChats  = async () => {
        const data = await axios.get('/api/chats');
        console.log(data);
    };
    
    useEffect(()=>{
        fetchChats();
    },[]);   

    return (
        <div>
            Chat Page
        </div>
    )
}

export default Chat;
