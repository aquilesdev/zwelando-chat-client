import React from 'react';

import './InfoBar.css';


const InfoBar = ({room}) => {
    return (
    <div className="infoBar row">
        <div className="col-md-10">
            <div>Online</div>
            <h3>{room}</h3>
        </div>
        <div className="col-md-2">
            <span className="close">&times;</span>
        </div>
    </div>
    );
}

export default InfoBar;