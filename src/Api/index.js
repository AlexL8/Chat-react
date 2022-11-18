export const requestURL = 'http://localhost:9000/chat/messages';


export const postRequest = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export const getRequest = async () => {
    const response = await fetch(requestURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    });
    const objectJson = await response.json();
    return (objectJson.response);
}
