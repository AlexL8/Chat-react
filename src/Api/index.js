import axios from "axios";

export const requestURL = 'http://localhost:9000/chat/messages';

export const getRequest = async () => {
    const respObj = await axios.get(requestURL);
    const response = respObj.data.response;
    return response;
}

export const postRequest = async (url, data) => {
    const response = await axios.post(url, data);
    return response.data.response;
   
}


// FETCH

// export const postRequest = async (url, data) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(data)
//     })
//     return await response.json();
// }

// export const getRequest = async () => {
//     const response = await fetch(requestURL, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//     });
//     const objectJson = await response.json();
//     // console.log(objectJson.response);
//     return (objectJson.response);
// }


  