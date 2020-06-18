import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {

    const [name, setName ] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <h1 className="heading">Join</h1>

                <div className="mt-2">
                    <input type="text" placeholder="Name" className="form-control" onChange={event => setName(event.target.value)} />
                </div>

                <div className="mt-2 mb-2">
                    <input type="text" placeholder="Room" className="form-control" onChange={event => setRoom(event.target.value)}/>
                </div>

                <Link onClick={event => (!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="btn btn-primary btn-sm" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;