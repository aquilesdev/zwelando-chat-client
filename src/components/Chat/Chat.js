import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';


let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [messages, setMessages] = useState([]);
    const [message, setMessage]  = useState('');

    const ENDPOINT = `localhost:5000`;

    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', {name, room}, () =>{

        });


        return () =>{
            socket.emit('disconnect');

            socket.off();
        }

    },[location.search, ENDPOINT]);

    
    useEffect(() => {
            
        socket.on('message', message =>{
            setMessages([...messages, message]);

            console.log(message);
        })

    }, [messages]);
    
    const sendMessage = (event) => {

        event.preventDefault();
        
        if(message) {

            socket.emit('sendMessage', message, () => setMessage(''));
        }
       
    }

    return (
        <div className="container">
            <div className="row">
                <InfoBar room={room} />
            </div>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

        </div>
    );
}

export default Chat;