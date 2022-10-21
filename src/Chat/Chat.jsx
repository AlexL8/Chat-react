import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import './Chat.css';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

console.log(listItems); 


const Chat = ({isActive, setActive, header, messages}) => {
  return (
    <div className={classNames('chat', {'active': isActive})} onClick={() => setActive(false)}>
      <div className="chat__content">
        <div className="chat__header">{header}</div>
        <div className="chat__message-list">
            {messages.map((message) => 
            <ul>
                <li>{message.name}</li>
                <li>{message.text}</li>
            </ul>
            )}
        </div>
      </div>
    </div>
  )
}


export default Chat;
