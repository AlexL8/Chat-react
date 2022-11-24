import classNames from 'classnames';
import React from 'react';
import { useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import './Chat.css';


const Chat = ({isActive, setActive, header, messages, isLoadingChat, addNewMessage, setName, setMessage, name, message}) => {

  const container = useRef(null);
  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  }, [messages]);


  return (
    <div className={classNames('chat', {'active': isActive})}>
      <div className="chat__content">
        <div className="chat__header">{header}</div>
          {isLoadingChat ? <Loader/> : <ul className="chat__message-list" ref={container}>
            {messages.map((message) => 
              <li className={classNames({
                'chat__user-style-message': message.name !== 'admin',
                'chat__admin-style-message': message.name === 'admin'})}
                key={message.id}>
                  <div className='chat__user-name'>{message.name}</div>
                  <div className='chat__user-message'>{message.message}</div>
              </li>
              )}
        </ul>}
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
              placeholder='Сообщение...'
              />
          <button disabled={isLoadingChat} className='chat__submit-btn' type='submit' onClick={addNewMessage}>Отправить</button>
        </form>
      </div>
    </div>
  )
}


export default Chat;
