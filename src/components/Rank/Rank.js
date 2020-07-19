import React from 'react';
import {RankContainer} from './style.js';

const Rank = ({name, entries}) => {
  return (
    <RankContainer>
      <p>
        {`${name}, your current entry count is ...`} <span>{entries}</span>
      </p>
    </RankContainer>
  );
};

// {`${name} , your current rank is...`}
// <div className='white f1 '>
//   {entries}
// </div>

export default Rank;
