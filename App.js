import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"
import Footer from "./components/Footer.js"
export default function App()
{
    return(
        <div>
            <Info/>
            <About/>
            <Skills/>
            <Footer/>
        </div>
    )
}