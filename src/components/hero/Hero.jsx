import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
    scrollButton: { opacity: 0, y: 10, transition: { duration: 2, repeat: Infinity } },
};

const sliderVariants = {
    initial: { x: 0 },
    animate: { x: "-120%", transition: { repeat: Infinity, repeatType: "mirror", duration: 20 } },
};



const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Hello, I'm Akhror</motion.h2>
                    <motion.h1 variants={textVariants}>Frontend developer and freelancer.</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button className='herobtn' variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className='img' src="/scroll.png" alt="Scroll icon" />
                </motion.div>
            </div>
            <motion.div className="slaydingcontainer" variants={sliderVariants} initial="initial" animate="animate">
                <img className='heroimagerc' src="/react.png" alt="React logo" />
                <img className='heroimage' src="/next.png" alt="Figma logo" />
                <img className='heroimage' src="/ts.png" alt="JavaScript logo" />
                <img className='heroimagejs' src="/js.png" alt="Next.js logo" />
                <img className='heroimage' src="/Firebase.png" alt="Firebase logo" />
                <img className='heroimage' src="/redux.png" alt="Redux logo" />
                {/* <img className='heroimagedb' src="/mongodb.png" alt="Mongodb logo" /> */}
                {/* <img className='heroimagent' src="/native.png" alt="Mongodb logo" /> */}
                <img className='heroimage' src="/html.png" alt="HTML logo" />
                <img className='heroimage' src="/css.png" alt="CSS logo" />
                <img className='heroimage' src="/gitwhite.png" alt="Git logo" />
                <img className='heroimage' src="/framer.png" alt="Framer logo" />
                <img className='heroimage' src="/tailwind.png" alt="Tailwind logo" />
                <img className='heroimage' src="/mui.png" alt="Material ui logo" />
                {/* <img className='heroimage' src="/figma.png" alt="Figma logo" /> */}
            </motion.div>
            <div className="imageContainer">
                <img className='HeroImg' src="/NavLogo.png" alt="Hero image" />
            </div>
        </div>
    )
}

export default Hero;
