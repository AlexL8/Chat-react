import classNames from 'classnames';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './Chat.css';


const Chat = ({isActive, setActive, header, messages, setUserMessages}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const container = useRef(null);
  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  }, [messages]);


  const addNewMessage = (e) => {
    e.preventDefault()
    const newMessage = {
      name,
      message
    }
    setUserMessages([...messages , newMessage]);
    setMessage('');
    setName('');
  } 

  
  return (
    <div className={classNames('chat', {'active': isActive})}>
      <div className="chat__content">
        <div className="chat__header">{header}</div>
        <div className="chat__message-list" ref={container}>
            {messages.map((message) => 
            <ul className={classNames('chat__user-style-message', {'chat__admin-style-message': name === 'admin'})} key={message.name + message.message}>
                <li className='chat__user-name'>{message.name}</li>
                <li className='chat__user-message'>{message.message}</li>
            </ul>
            )}
        </div>
        <form className='chat__message-form'>
          <input 
              className='chat__name-input'
              onChange={e => setName(e.target.value)}
              value={name}
              type='text' 
              placeholder='Имя...'
              />
          <input 
              className='chat__message-input'
              onChange={e => setMessage(e.target.value)}
              value={message}
              type='text' 
              placeholder='Сообщение...'/>
          <button className='chat__submit-btn' type='submit' onClick={addNewMessage}>Отправить</button>
        </form>
      </div>
    </div>
  )
}


export default Chat;
