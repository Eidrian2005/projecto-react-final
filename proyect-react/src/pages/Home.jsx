import React from "react";
import Header from '../components/Header'
import HomeBody from "../components/HomeBody";
import {Link, useNavigate} from 'react-router-dom'
// import AddTask from '../components/AddTask'



export default function Home() {
    return (

        <div>
            <Header />
            <HomeBody />
        </div>
    )

    }