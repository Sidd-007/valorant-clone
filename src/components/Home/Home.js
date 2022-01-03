import React from 'react'
import '../../CSS/Home.css'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'

function Home() {

    const opts = {
        height: "400",
        width: "700px",
        playerVars: {
            autoplay: 0,
        }
    }
    return (
        <div className='main'>

            <div className="lp-master">
                <div className="lp">
                    <video id="myVideo" autoPlay loop muted>
                        <source src={`video/ValorantVid.mp4`} type="video/mp4" />
                    </video>

                    <div className="lp-items">
                        <p>A 5v5 character-based tactical shooter</p>
                        <img src={`img/Valorantlogo.png`} className="valoname" alt="" />
                        <div className="cta">
                            <span className='playFree'>
                                <button>PLAY FREE</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='empt2'></div>
            </div>
            <div className="trailer-main" >
                <div className='line2'></div>
                <div>
                    <h1 className='mainHeading'>WE ARE VALORANT</h1>
                </div>
                <div className="t1" >
                    <div className="t1-text" >
                        <h3 className='defy'>DEFY THE LIMITS</h3>
                        <p className="content">Blend your style and experience on a global,
                            competitive stage. You have 13 rounds to attack and defend your
                            side using sharp gunplay and tactical abilities. And, with one life per-round,
                            you'll need to think faster than your opponent if you want to survive.
                            Take on foes across Competitive and Unranked modes as  well as Deathmatch
                            and Spike Rush.</p>

                        <h5><span>Watch The GamePlay Trailer.</span></h5>
                        <div className='line'></div>

                    </div>
                    <div className="t1-img">
                        <YouTube videoId="IhhjcB2ZjIM" opts={opts} />
                    </div>
                </div>
            </div>
            <div className='empt'></div>
            <div className="Agents">
                <div className="agents-sec">
                    <div className="agents-img">
                        <img src={`img/Untitled1.png`} alt="" />
                    </div>

                    <div className="agents-text">

                        <h1 className="head">
                            YOUR AGENTS
                        </h1>

                        <h3>CREATIVITY IS YOUR GREATEST WEAPON.</h3>

                        <p className="head-p">
                            More than guns and bullets, you'll choose an Agent  armed with
                            adaptive, swift, and lethal abilities that create
                            opportunities to let your gunplay shine. No two Agents play
                            alike, just as no two highlight reels will look the same.
                        </p>

                        <div className="cta-2">
                            <Link to='/agents'>
                                <button>
                                    <span>VIEW ALL AGENTS</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maps-main">
                <div className="maps-text">
                    <div className='line1'></div>
                    <h1>YOUR MAPS</h1>
                    <h3 className='fight'>FIGHT AROUND THE WORLD</h3>
                    <p className="map-graph">
                        Each map is a playground to showcase your creative <br /> thinking.
                        Purpose-built for team strategies, spectacular <br /> plays, and
                        clutch moments. Make the play others will <br /> imitate for years
                        to come.
                    </p>
                </div>

                <div className="cta-3">
                    <Link to='/maps'>
                        <button>
                            <span>VIEW ALL MAPS</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home
