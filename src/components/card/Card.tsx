import React from 'react'
import './card.scss'

const Card: React.FC = () => {
    return (
        <section className="container">
            <div className="sec1_top">
                <h5>Sale </h5>
            </div>
            <div className="sec1_carousel">
                {/*<button>*/}
                {/*    <*/}
                {/*</button>*/}
                {/*<button>></button>*/}
            </div>
            <div className="sec1_bottom">
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/dracon.png" alt="" />
                        <h4>Tiny Tina's Wonderlands</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-20%</p>
                        <ul>
                            <li>̶¥̶1̶9̶9̶</li>
                            <li>¥159.20</li>
                        </ul>
                    </div>

                </div>
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/sifu.png" alt="" />
                        <h4>Sifu</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-10%</p>
                        <ul>
                            <li>̶¥̶1̶3̶9̶̶</li>
                            <li>¥125.10</li>
                        </ul>
                    </div>

                </div>
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/final.png" alt="" />
                        <h4>FINAL FANTASY VII</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-20%</p>
                        <ul>
                            <li>̶¥̶1̶9̶9̶</li>
                            <li>¥159.20</li>
                        </ul>
                    </div>

                </div>
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/rdr2.png" alt="" />
                        <h4>Red Dead Redemption 2</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-50%</p>
                        <ul>
                            <li>̶¥̶2̶2̶8̶̶</li>
                            <li>¥114</li>
                        </ul>
                    </div>

                </div>
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/cyberpunk.png" alt="" />
                        <h4>Cyberpunk 2077</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-50%</p>
                        <ul>
                            <li>̶¥̶2̶8̶0̶̶</li>
                            <li>¥140</li>
                        </ul>
                    </div>

                </div>
                <div className="sec1_card">
                    <div className="card_top">
                        <img src="img/kena.png" alt="" />
                        <h4>Kena: Bridge of Spirits</h4>
                    </div>
                    <div className="card_bottom">
                        <p>-35%</p>
                        <ul>
                            <li>̶̶¥̶1̶3̶7̶</li>
                            <li>¥89.05</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Card