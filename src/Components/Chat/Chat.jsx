import React from 'react';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import './Chat.css';


const Chat = ({isActive, setActive, header, messages, isLoadingChat, addNewMessage}) => {
  return (
    <div className={classNames('chat', {'active': isActive})}>
      <div className="chat__content">
        <div className="chat__header">
          <div className="chat__title">{header}</div>
          </div>
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