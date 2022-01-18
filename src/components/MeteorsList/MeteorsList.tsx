import React, { useEffect, useState } from 'react';
import MeteorCard from '../MeteorCard/MeteorCard'
import './style.scss' 

interface Props {
		meteors: {
			id: string;
			key: string;
			name: string;
      year?: string;
      mass?: number;
		}[]
}

const MeteorsList: React.FC<Props> = ({ meteors }) => {
  return (
    <div className='meteors-list-container'>
      <div className="meteors-list">
        {
          meteors.map((meteor) => {
            return (
              <MeteorCard 
                meteor={meteor}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default MeteorsList;