import React from 'react';
import { useState } from 'react';
import './SendMessageForm.css'

const SendMessageForm = ({isLoadingChat, addNewMessage}) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    return (
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
          <button disabled={isLoadingChat} className='chat__submit-btn' type='submit' onClick={(e) => addNewMessage(e, name, message, setName, setMessage)}>Отправить</button>
        </form>
    )
}

export default SendMessageForm;