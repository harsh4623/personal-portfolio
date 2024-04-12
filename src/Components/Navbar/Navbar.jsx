import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss';
import {motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar  below imported*/}
            <Sidebar />

            <div className='wrapper'>
                {/* <span>Harsh Patel</span> */}

                {/* Below is the transition effect of the logo using frammer motion */}
                <motion.span 
                    initial={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration:0.5}}
                >Harsh Patel</motion.span>

                <div className='social'>
                    <a href='https://www.linkedin.com/in/harsh-patel-326a00226/'><img src='./linkedin.png' /></a>
                    <a href='https://www.codechef.com/users/harshpatel463'><img src='/codechef.png' style={{backgroundColor:'white'}}/></a>
                    <a href='https://github.com/harsh4623/' style={{backgroundColor:'white',paddingTop:'0.30px',height:'18px'}}><img src='/github.png' /></a>
                    <a href='#'><img src='/instagram.png' /></a>
                    <a href='https://leetcode.com/harshpatel46399/'><img src='/leetcode.png' style={{backgroundColor:'white'}} /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;