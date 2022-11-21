import classNames from 'classnames';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { getRequest, postRequest, requestURL } from '../../Api';
import Loader from '../Loader/Loader';
import './Chat.css';


const Chat = ({isActive, setActive, header, messages, isLoadingChatOpen, setUserMessages}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const container = useRef(null);
  useEffect(() => {
    container.current.scrollTop = container.current.scrollHeight;
  }, [messages]);


  const getMessages = async () => {
    setIsLoading(true)
    const messagesFromServer = await getRequest();
    setUserMessages(messagesFromServer);
    setIsLoading(false)
  }

  const addNewMessage = (e) => {
    e.preventDefault()
    const newMessage = {
      name,
      message
    }
    if (newMessage.name === '' || newMessage.message === '') {
      alert('Заполни, ск, поля!')
    } else {
      postRequest(requestURL, newMessage)
      getMessages()
      }
    setMessage('');
    setName('');
  } 

  return (
    <div className={classNames('chat', {'active': isActive})}>
      <div className="chat__content">
        <div className="chat__header">{header}</div>
          {isLoadingChatOpen ? <Loader/> : <ul className="chat__message-list" ref={container}>
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
          <button disabled={isLoading} className='chat__submit-btn' type='submit' onClick={addNewMessage}>Отправить</button>
        </form>
      </div>
    </div>
  )
}


export default Chat;
