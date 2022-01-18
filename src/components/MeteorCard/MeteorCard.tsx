import React from 'react';
import { Meteor } from '../../App';
import CardDetail from '../common/CardDetail/CardDetail';
import './style.scss' ;

interface Props {
  meteor: Meteor
}

const MeteorCard: React.FC<Props> = ({ meteor }) => {
  return (
    <div className='meteor-card' key={meteor.id}>
      <div className='meteor-details'>
        {/* <div className='detail-container'> */}
          <span className='title'>{meteor.name}</span>
        {/* </div> */}
        <CardDetail 
          label='Year:'
          value={meteor.year || ''}
        />
        {      
          meteor.mass ? <CardDetail 
            label='Mass:'
            value={meteor.mass.toString()}
          /> : null
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
