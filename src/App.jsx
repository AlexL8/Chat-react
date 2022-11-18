import React, { useState, useEffect, useRef } from "react";
import { getRequest } from "./Api";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Menu from "./Components/Menu/Menu";

const items = [{id: 2, value: 'Главная', href: '/main', icon: 'x'}, {id: 3, value: 'Услуги', href: '/service', icon: 'x'}, {id: 4, value: 'Магазин', href: '/shop', icon: 'x'}, {id: 5, value: 'О нас', href: '/about', icon: 'x'}, ];
export const chatContext = React.createContext()


function App () {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isChatActive, setChatActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userMessages, setUserMessages] = useState([]);
    const interval = useRef(null);


    const getMessages = async () => {
        const messagesFromServer = await getRequest();
        setUserMessages(messagesFromServer);
    }

    const loader = async () => {
        setIsLoading(true)
        try {
            await getMessages();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setIsLoading(false)
        }
    }
    
    // Ругается на депенденсис
    useEffect(() => {
        interval.current = setInterval(loader, 3000);
        return () => {
            clearInterval(interval.current)
        };
    }); 

    // function useInterval(fn, ms) {
    //     const savedCallback = useRef();

    //     useEffect(() => {
    //         savedCallback.current = fn;
    //     });

    //     useEffect(() => {
    //         async function tick() {
    //            const result = await savedCallback.current();
    //            setUserMessages(result)
    //         }
    //         let id = setInterval(tick, ms)
    //         return () => clearInterval(id)
    //     }, [ms]);
    // }

    // useInterval(getRequest, 3000)


    // useEffect(() => {
    //     (async () => {
    //         const objectJson = await getRequest(requestURL)
    //         // console.log(objectJson);
    //         setUserMessages(objectJson)
    //     })()
    // }, [])
  
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch(requestURL, {
    //             method: 'GET'
    //         })
    //         // console.log(response);
    //         const respProm = await response.json();
    //         // console.log(respProm);
    //         const respData = respProm.response;
    //         // console.log(respData);
    //         setUserMessages(respData)
    //     })()
    // }, [])
   

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
            <Menu isActive={isMenuActive} setActive={setMenuActive} header={'Menu'} items={items}/>
            <Chat 
                isActive={isChatActive}
                setActive={setChatActive}
                header={'Чат поддержки'}
                messages={userMessages}
                isLoading={isLoading}
            />
        </div>
    )
}

export default App;