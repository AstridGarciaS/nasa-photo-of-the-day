import React, { useEffect, useState } from "react";

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;