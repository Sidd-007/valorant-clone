import React, { useState, useEffect } from 'react'
import '../../CSS/Agents.css'

function Agents() {
    const [image, setImage] = useState("jett")
    const [skill, setSkill] = useState("Q")

    const setImages = (e) => {
        setImage(e.target.getAttribute("value"))
    }

    const setSkills = (e) => {
        setSkill(e.target.getAttribute("value"))
    }

    useEffect(() => {

    }, [skill])

    return (
        <div>
            <div  className='agents'>
                <video autoPlay loop muted>
                    <source src="video/agent-background-generic.mp4" type="video/mp4" />
                </video>
                <div className="agent">
                    <div className="list-agent">
                        <div className="list-1" initial="hidden" animate="visible">
                            <h2 value="jett" onClick={setImages} >JETT</h2>
                            <h2 value="omen" onClick={setImages} >OMEN</h2>
                            <h2 value="sage" onClick={setImages} >SAGE</h2>
                            <h2 value="raze" onClick={setImages} >RAZE</h2>
                            <h2 value="phoenix" onClick={setImages} >PHEONIX</h2>
                            <h2 value="killjoy" onClick={setImages} >KILLJOY</h2>
                            <h2 value="kayo" onClick={setImages} >KAY/O</h2>
                            <h2 value="astra" onClick={setImages} >ASTRA</h2>
                            <h2 value="yoru" onClick={setImages} >YORU</h2>
                        </div>

                        <div className="list-main">
                            <img src={`img/${image}.png`} alt={image} />
                        </div>

                        <div className="list-2" initial="hidden" animate="visible">
                            <h2 value="breach" onClick={setImages} >BREACH</h2>
                            <h2 value="sova" onClick={setImages} >SOVA</h2>
                            <h2 value="viper" onClick={setImages} >VIPER</h2>
                            <h2 value="cypher" onClick={setImages} >CYPHER</h2>
                            <h2 value="brimstone" onClick={setImages} >BRIMSTONE</h2>
                            <h2 value="reyna" onClick={setImages} >REYNA</h2>
                            <h2 value="skye" onClick={setImages} >SKYE</h2>
                            <h2 value="chamber" onClick={setImages} >CHAMBER</h2>
                        </div>
                    </div>
                </div>
            </div >
            
            <div className="skills-agents">
                <h1>Special Ablities</h1>
                <div class="skill-main">
                    <div className="info">
                        <div className="btn-skill">
                            <button className="btn btn-background-slide" value="C" onClick={setSkills}><h3>Ability 1</h3></button>
                            <button className="btn btn-background-slide" value="E" onClick={setSkills}><h3>Ability 2</h3></button>
                            <button className="btn btn-background-slide" value="Q" onClick={setSkills}><h3>Ability 3</h3></button>
                            <button className="btn btn-background-slide" value="X" onClick={setSkills}><h3>Ultimate</h3></button>
                        </div>
                    </div>
                    <div className="video-skill">
                        <video key={image + skill} id="pidio" className="my-video" muted autoPlay loop>
                            <source id="pidio-src" key={image} src={`video/${image}/${image}_${skill}_v001_web.mp4`} type="video/mp4" />
                        </video>
                        <div class="border"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agents
