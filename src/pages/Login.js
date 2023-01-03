import { useState, useEffect } from 'react';
import { api } from '../constants';
import axios from 'axios';
import {toast, ToastContainer } from 'react-toastify'


export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios.post(`${api}/admin/isloggedin`,{},{withCredentials: true})
        .then(res => {
            if(res.data.loggedin === true){
                window.location.href = "/";
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const onLogin = () => {
        setLoading(true);
        axios.post(`${api}/admin/login`, { email, password }, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                setLoading(false);
                if (res.data.status === "success") {
                    toast.success(res.data.message);
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000);
                }else{
                    toast.info(res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <div className="min-h-screen w-full h-screen">
            <ToastContainer theme='dark' />
            <div className="hero bg-base-200 h-screen">
                <div className="w-[500px]">
                    <div className="card shadow-sm bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                 type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={onLogin}>Login</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}