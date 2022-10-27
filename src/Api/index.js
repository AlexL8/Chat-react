import React from "react";

export const requestURL = 'http://localhost:9000/chat/messages';


export const postRequest = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return await response.json();
}

// headers(в параметр) await
//get request