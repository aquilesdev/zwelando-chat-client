import React, {useState, useEffect} from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = `localhost:5000`;

    useEffect(() =>{
        const {name, room} = queryString.parse(location.search);

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', {name, room});

        return () =>{
            socket.emit('disconnect');

            socket.off();
        }

    },[location.search, ENDPOINT]);

    return (<h1>Chat</h1>);
}

export default Chat;