import { useState, useEffect } from "react";
import { Container, Row, col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(()=>{
           tick();
        },delta)
        return() => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText =toRotate[i];
        let upDatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && upDatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    
    } 

    return(
        <section ClassName="banner" id="home"> 
        <Container>
        <Row ClassName="align-items-center">
        <col xs={12} md={6} xl={7}>
        <span ClassName="tagline">Welcome to y portfolio</span>
        <h1>{'Hi I am webcoded'}<span classname="wrap">{text}</span></h1>
    
        <p>Highly analytical and self-driven professional with a wealth of experience specializing in the
development of compelling user-facing applications. I bring efficiency and expertise as a skilled coder,
well-versed in Object-Oriented Programming (OOP) concepts, design patterns, SOLID principles, and
proficient in HTML, CSS, and JavaScript. As a coordinated and collaborative team player, I excel in
contributing to codebase enhancements and have a keen eye for driving projects to success</p>
        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
        </col>
        <col xs={12} md={6} xl={5}></col>
        <img src={headerImg} alt="Headder img" />
        </Row>
        </Container>
        </section>
    )
}