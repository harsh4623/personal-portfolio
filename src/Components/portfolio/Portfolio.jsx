import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id: 1,
        title: "SocialHub: A Full-Stack Social Media Application",
        img: "./logo1.png",
        desc: "A Full-Stack Social Media Application with JWT authentication, responsive UI, CRUD operations, protected routes, and dark mode using MySQL, Node.js, React, and React-Query.",
        link:"https://github.com/harsh4623/SocialHub/",
    },
    {
        id: 2,
        title: "Blog WebApp: A Modern Full-Stack Application",
        img: "./logo2.png",
        desc: "Developed a MERN stack application with React Hooks for state management, JWT user authentication, and CRUD operations for posts and users with file upload.",
        link:"https://github.com/harsh4623/Blog-App/",
    },
    {
        id: 3,
        title: "Library Management System(DBMS)",
        img: "./logo3.png",
        desc: "Developed an optimized Library Management System (LMS) with MySQL database integration for efficient book management and user interactions.",
        link:"https://github.com/harsh4623/Library-Management-System-DBMS/",
    },
    {
        id: 4,
        title: "Porfolio App",
        img: "./logo4.png",
        desc: "Developed a captivating portfolio app with React and Framer Motion for seamless animations and interactive design.",
        link:"https://github.com/harsh4623/personal-portfolio/",
    },

];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);

    return (

        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>

                    <motion.div className="textContainer" style={{y}} >
                        <h2> {item.title}</h2>
                        <p> {item.desc}</p>
                        <button><a href={item.link}>Github Link</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 30,
    });

    return (

        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>PERSONAL PROJECTS</h1>
                <motion.div style={{ scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};


export default Portfolio;

