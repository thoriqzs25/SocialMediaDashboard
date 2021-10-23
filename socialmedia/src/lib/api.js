import { useState } from "react";

const SERVER_API = 'https://jsonplaceholder.typicode.com'

export const getUser = () => {
    const [userList, setUserList] = useState(null);
    return fetch(`${SERVER_API}/users`)
          .then((response) => {return response.json()})
          .then((data) => {setUserList(data)})
};