// import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './Education.scss';

const variants = {

    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        trasition: {
            duration: 1,
            staggerChildren: 0.1,

        },
    },
};

const Education = () => {


    const ref = useRef()

    // Reference se agar margin -100px hoga tab animation start hoga
    const isInview = useInView(ref, { margin: "-100px" })

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // whileInView="animate"
            ref={ref}
            animate={isInview && "animate"}
        // animate={"animate"}
        >

            <motion.div className="textContainer" variants={variants}>
                <p>
                    Aspiring SDE intern blending a passion for
                    <br /> Data Strucutres and Algorithms, Machine learning and Data analytics.
                </p>
                {/* <p className="mobilep">
                    MERN STACK DEVELOPER
                </p> */}
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    {/* <img src='./people.webp' alt="" /> */}
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}> Education</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Pandit Deendayal Energy University, Gandhinagar</h2>
                    <p>B.Tech in Computer Science & Engineering
                    <h4>CGPA:- 9.55/10</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Knowledge High School, Nadiad</h2>
                    <p>Gujarat Secondary and Higher Secondary Education Board [HSC-GSEB]
                    <h4>Percentage:- 93.33 %</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Pragati International School, Umreth</h2>
                    <p>Gujarat Secondary and Higher Secondary Education Board [SSC-GSEB]
                    <h4>Percentage:- 92.66 %</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>
            </motion.div>

            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    {/* <img src='./people.webp' alt="" /> */}
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Achievements</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>CodeChef</h2>
                    <p>Secured Global Rank 103 Out of 16245 Participants and </p>
                    <p>Max Rating:1536 in CodeChef Contest.</p>
                    <p>Secured Global Rank 619 Out of 30873 Participants in CodeChef Contest.</p>
                    <button><a href="https://leetcode.com/harshpatel46399/">Visit Profile</a></button>

                    
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>LeetCode</h2>
                    <p>Solved 250+ DSA problems on LeetCode.</p>
                    <button><a href="https://www.codechef.com/users/harshpatel463">Visit Profile</a></button>
                </motion.div>
            </motion.div>
        </motion.div>


    );

};

export default Education;
