import React, { useState } from "react";
import { getRequest, postRequest, requestURL } from './Api';
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Menu from "./Components/Menu/Menu";


const items = [{id: 2, value: 'Главная', href: '/main', icon: 'x'}, {id: 3, value: 'Услуги', href: '/service', icon: 'x'}, {id: 4, value: 'Магазин', href: '/shop', icon: 'x'}, {id: 5, value: 'О нас', href: '/about', icon: 'x'}, ];


function App () {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isChatActive, setChatActive] = useState(false);
    const [isLoadingChat, setIsLoadingChat] = useState(false);
    const [userMessages, setUserMessages] = useState([]);
    const [nameChat, setNameChat] = useState('');
    const [messageChat, setMessageChat] = useState('');


    const setDataFromRequest = async () => {
        const messagesFromServer = await getRequest();
        setUserMessages(messagesFromServer)
    }

    const openChat = async () => {
        setChatActive(!isChatActive)
        setIsLoadingChat(true)
        try {
           await setDataFromRequest()
        }
        catch (err) {
            console.warn('Error: ' + err)
        }
        finally {
            setIsLoadingChat(false)
        }
    }

    const closeChat = () => {
        setChatActive(!isChatActive)
    }


    const addNewMessage = async (e) => {
        e.preventDefault()
        setIsLoadingChat(true)
        const newMessage = {
          name: nameChat,
          message: messageChat
        }
        if (newMessage.name === '' || newMessage.message === '') return alert('Заполни, ск, поля!')
        await postRequest(requestURL, newMessage)
        await setDataFromRequest()
        setIsLoadingChat(false)
        setMessageChat('');
        setNameChat('');
      } 

    
    // useEffect(() => {
    //     interval.current = setInterval(getMessages, 3000);
    //     return () => {
    //         clearInterval(interval.current)
    //     };
    // }); 

    return (
        <div className="app">
            <nav>
                <div className="burger-btn" onClick={() => setMenuActive(!isMenuActive)}>
                    <span/>
                </div>
            </nav> 
            <main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium fugiat, obcaecati eligendi,
                   sed rerum doloribus hic dolor voluptates ipsa repellat at quidem? Ea, eum inventore similique
                   cum maiores dolores doloremque?
                </p>
                <button className='chat-btn' onClick={!isChatActive ? openChat : closeChat}>Chat</button>
            </main>
            <Menu isActive={isMenuActive} setActive={setMenuActive} header={'Menu'} items={items}/>
            <Chat 
                isActive={isChatActive}
                setActive={setChatActive}
                header={'Чат поддержки'}
                messages={userMessages}
                isLoadingChat={isLoadingChat}
                setUserMessages={setUserMessages}
                addNewMessage={addNewMessage}
                setName={setNameChat}
                setMessage={setMessageChat}
                name={nameChat}
                message={messageChat}
            />
        </div>
    )
}

export default App;