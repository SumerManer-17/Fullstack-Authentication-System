"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";




export default function Login() {
    const [user,setUser]=React.useState({
        username:"",
        email:"",
        password:""
    });

    const onLogin=async()=>{

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="border border-gray-300 rounded-lg px-4 py-2 m-2"
                type="text" 
                id="username" 
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input className="border border-gray-300 rounded-lg px-4 py-2 m-2"
                type="email" 
                id="email" 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input className="border border-gray-300 rounded-lg px-4 py-2 m-2"
                type="password" 
                id="password" 
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button className="border border-gray-300 rounded-lg px-4 py-2 m-2" onClick={onLogin}>Login</button>
            <Link href="/signup">Signup If you don't have account</Link>
        </div>
    );
}