import { useEffect, useState } from "react";

const SERVER_API = 'https://jsonplaceholder.typicode.com'

export async function getUser () {
    const response = await fetch(`${SERVER_API}/users`);
    const data = await response.json();

    const userList = [];

    console.log(data);

    // const [userList, setUserList] = useState(null);
    // useEffect(() => {
    //     fetch(`${SERVER_API}/users`)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setUserList(data);
    //     });
    // }, []);
    // console.log(userList)
    // return fetch(`${SERVER_API}/users`)
    //       .then((response) => {return response.json()})
    //       .then((data) => {setUserList(data)})
};