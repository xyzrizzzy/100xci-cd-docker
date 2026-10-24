// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
import prisma from "@repo/db/client";

// interface User {
//   username: string;
//   password: string;
// }

export default async function Data() {
    // const [users, setUsers] = useState<User[]>([]);
    // async function fetchUsers() {
    //     axios.get("http://localhost:8000/users")
    //     .then(response => {
    //         const data = response.data;
    //         setUsers(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    const data = await prisma.user.findMany();

    return (
        <div>
        {/* 
            { users.map(user => <p key={user.username}>{user?.username}</p>) }
        */}
        {
            data.map(user => <p key={user.id}>{user.username + ", " + user.password}</p>)
        }
        </div>
    )  
}

export const revalidate = 60;