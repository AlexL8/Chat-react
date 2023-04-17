import React from "react"
import classNames from 'classnames';
import { useRef, useEffect } from "react";
import './MessageList.css'



const MessageList = ({messages}) => {

    const container = useRef();

    useEffect(() => {
        container.current.scrollTop = container.current.scrollHeight;
      }, [messages]);

    return (
        <ul className="chat__message-list" ref={container}>
            {messages.map((message) => 
              <li className={classNames({
                'chat__user-style-message': message.name !== 'admin',
                'chat__admin-style-message': message.name === 'admin'})}
                key={message.id}>
                  <div className='chat__user-name'>{message.name}</div>
                  <div className='chat__user-message'>{message.message}</div>
              </li>
              )}
        </ul>
    )
}

export default MessageList;
