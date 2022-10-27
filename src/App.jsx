import React, { useState } from "react";
import { useEffect } from "react";
import { postRequest, requestURL } from "./Api";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Menu from "./Components/Menu/Menu"

const items = [{id: 2, value: 'Главная', href: '/main', icon: 'x'}, {id: 3, value: 'Услуги', href: '/service', icon: 'x'}, {id: 4, value: 'Магазин', href: '/shop', icon: 'x'}, {id: 5, value: 'О нас', href: '/about', icon: 'x'}, ];

function App () {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isChatActive, setChatActive] = useState(false);
    const [userMessages, setUserMessages] = useState([]);

    useEffect(() => {
        (async () => {
            const resp = await fetch(requestURL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            });
        const variable = await resp.json();
        console.log(variable);
        setUserMessages(variable.response)
        })() 
    }, [])


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
                <button className='chat-btn' onClick={() => setChatActive(!isChatActive)}>Chat</button>
            </main>
            <Menu isActive={isMenuActive} setActive={setMenuActive} header={'Бургер меню'} items={items}/>
            <Chat isActive={isChatActive} setActive={setChatActive} header={'Чат поддержки'} messages={userMessages} setUserMessages={setUserMessages}/>
        </div>
    )
}

export default App;