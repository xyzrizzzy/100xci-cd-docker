"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  username: string;
  password: string;
}

export default function DataPage() {
    const [users, setUsers] = useState<User[]>([]);
    async function fetchUsers() {
        axios.get("http://localhost:8000/users")
        .then(response => {
            const data = response.data;
            setUsers(data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
        <h1>Data</h1>
        { users.map(user => <p key={user.username}>{user?.username}</p>) }
        </div>
    )  
}