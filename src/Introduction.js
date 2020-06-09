import React from 'react';
import Resourceslnk from './Resourceslink'

function introduction(obj) {
    return (
      <div>
    
           Hello! My name is <strong>{obj.name}.</strong>
           I will tell you oppurtunities in freelance marketplace.You can start your career with them.
           These are listed below.
           <ol><li>creative writer</li>
           <li>Graphic designer</li>
           <li>Data Analyst</li>
           <li>Data Engineer</li>
           <li>Virtual Assistant</li>
           <li>content writer</li>
           <li>Blogger</li>
           <li>Android and IOS apps developer</li>
           
           </ol>
          
        <Resourceslnk />
      </div>
    );
}

export default introduction;