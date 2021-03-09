import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 >JUST CHATTING <span role="img" aria-label="emoji">💬</span></h1>
      <h2 className="welc">App made for you  <span role="img" aria-label="emoji">❤️</span></h2>
   <h2 className="welc">Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <div className="activeContainer">
              <h2 >
                <h1 className="oo">People currently chatting:</h1>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="oo" src={onlineIcon}/>

                  </div>
                ))}

              </h2>

            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;