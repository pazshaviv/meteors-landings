import React from 'react';
import { Meteor } from '../../App'
import './style.scss' 

interface Props {
  meteor: Meteor
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
          meteor.mass ? (
          <div className='detail-container'>
            <label>Mass:</label>
            <span>{meteor.mass}</span>
          </div>) : null
        }
        <div className='coordinates-container'>
          <p className='coordinates-title'>Coordinates</p>
          <div className='coordinate-container'>
            <span>X:</span>
            <span>{meteor.coords[0]}</span>
          </div>
          <div className='coordinate-container'>
            <span>Y:</span>
            <span>{meteor.coords[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeteorCard;
