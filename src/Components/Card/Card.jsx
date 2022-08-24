import React from 'react'
import './Card.css'

export default function Card(props) {
    // console.log(props.data);
  return (
    <div className='card'>
        <div className="left">
            <img src={props.data.imageUrl} alt="" />
        </div>
        <div className="right">
            <div className="location">
                <span>{props.data.location}</span>
                <a href={props.data.googleMapsUrl}>
                    View on Google Maps
                </a>
            </div>
            <div className="title">
                <p>
                    {props.data.title}
                </p>
            </div>
            <div className="dates">
                <span>{props.data.startDate} - {props.data.endDate} </span>
            </div>
            <div className="about">
                <p>
                    {props.data.description}
                </p>
            </div>
        </div>
    </div>
  )
}
