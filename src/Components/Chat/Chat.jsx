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
          {isLoadingChat ? <Loader/> : <MessageList messages={messages}/>}
          <SendMessageForm 
          isLoadingChat={isLoadingChat}
          addNewMessage={addNewMessage}
          />
      </div>
    </div>
  )
}


export default Chat;
