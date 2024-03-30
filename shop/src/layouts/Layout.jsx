import React from 'react'
import '../styles/Layout.css'
import Navbar from '../components/Navbar';
import OptionBar from '../components/OptionBar';
import Footer from '../components/Footer';


const Layout = ({children})=>{

    return(
        <div className='layout' >
            <Navbar/>
            <OptionBar/>
            {/* <Outlet/> */}
            <div>
                {children}
            </div>
            <Footer/>

        </div>
   )
}

export default Layout;