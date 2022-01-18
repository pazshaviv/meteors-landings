import React, { useEffect, useState } from 'react';
import './style.scss' 

interface Props {
  meteor: {
    id: string
    name: string;
    year?: string;
    mass?: number
  }
}

const MeteorCard: React.FC<Props> = ({ meteor }) => {
  return (
    <div className='meteor-card' key={meteor.id}>
      <div className='meteor-details'>
        <div className='detail-container'>
          <span className='name'>{meteor.name}</span>
        </div>
        <div className='detail-container'>
          <label>Year:</label>
          <span>{meteor.year}</span>
        </div>
        {        
          meteor.mass ? <div className='detail-container'>
            <label>Mass:</label>
            <span>{meteor.mass}</span>
          </div> : null
        }
      </div>
    </div>
  );
}

export default MeteorCard;