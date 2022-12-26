import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './fullGame.scss'
import Skeleton from './Skeleton'

const FullGame: React.FC = () => {
    const [game, setGame] = React.useState<{
        id: string
        image: string
        title: string
        price: number
    }>()

    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        const GetItems = async () => {
            try {
                await fetch(`https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games/` + id)
                    .then((res) => {
                        return res.json()
                    }).then((arr) => {
                        setGame(arr)
                    })
            } catch {
                alert('Error!')
                navigate('/')
            }
        }
        GetItems()
    }, [])

    if (!game) {
        return (
            <div className="container">
                <div className="fullGame">
                    <Skeleton />
                </div>
            </div>
        )
    }

    return (
    <div className='spider'>
        <div className="container">

            <div className="spider_left">

                <div className="left_top">

                    <h1>MARVEL Spider-Man: Miles Morales</h1>

                    <div className="raiting">
                        <div className="stars">
                            <img src="./img/stars.png" alt=""/>
                            <h3>4.8</h3>
                        </div>
                        <p>great boss battles</p>
                        <h5>diverse cast of characters</h5>
                    </div>

                    <div className="miles_img">
                        <img src="./img/christmas.jpg" alt=""/>
                    </div>

                    <div className="trailer">
                        <img src="./img/christmas.jpg" alt=""/>
                        <img src="./img/christmas.jpg" alt=""/>
                        <img src="./img/milesmorales.png" alt=""/>
                        <img src="./img/milesmorales.png" alt=""/>
                    </div>
                </div>
                <div className="left_bottom">
                    <div className="bottom_txt">
                    <p>Young Miles Morales is trying to get used to his new home and continues the work of <br/>
                    his mentor Peter Parker as the new Spider-Man. When his house is in terrible danger, <br/>
                    Miles puts on a suit and becomes Spider-Man.</p>
                    </div>

                    <div className="janry">
                        <div className="janry_left">
                        <p>Genres</p>
                            <a>Action,</a>
                            <a>Open world</a>
                        </div>
                        <div className="janry_right">
                            <p>Features</p>
                                <a>Cloud Saves, </a>
                                <a>Single, </a>
                                <a><br/> Gamepad support</a>
                        </div>
                    </div>

                    <div className="left_txt">
                    <h1>MARVEL Spider-Man: Miles Morales</h1>
                    <p>After the events of MARVEL Spider-Man. Young Miles Morales tries to get used to his new <br/>
                    home and continues the work of his mentor Peter Parker as the new Spider-Man. But when a <br/>
                    terrible threat hangs over Miles' house, the young hero realizes that with great force comes <br/>
                    great responsibility. To save the New York world of Marvel, Miles will have to put on a <br/>
                    costume and become Spider-Man.</p>

                    <h2>Main features</h2>
                    <h3>The Ascent of Miles Morales</h3>

                    <p>Miles Morales discovers incredible powers that his mentor Peter Parker did not possess. <br/>
                    Master the unique gift of creating poisonous bioexplosions, as well as the ability to <br/>
                    camouflage, acrobatic tricks with webs, gadgets and special skills.</p>
                    </div>
                </div>
                <h6>show more</h6>


            </div>

            <div className="spider_right">
                <div className="right_top">
                    <p>BASIC GAME</p>
                    <div className="price">
                    <p>-25 %</p>
                    <ul>
                        <li>39,99 $</li>
                        <li>29,99 $</li>
                    </ul>
                    </div>
                    <div className="sale">
                    <p>Sale ends on 05.01.2023 at 22:00</p>
                    </div>

                    <div className="right_btn">
                        <button>BUY NOW</button>
                        <button>ADD TO CART</button>
                        <button>ADD TO WISHLIST</button>
                    </div>
                </div>
                <div className="right_bottom">
                    <div className="right_ul">
                    <ul>
                        <li>Return Type</li>
                        <li>Self-return ?</li>
                    </ul>
                    <ul>
                        <li>Developer</li>
                        <li>Insomniac Games, Nixxes <br/>
                        Software</li>
                    </ul>
                    <ul>
                        <li>Publisher</li>
                        <li>PlayStation PC LLC</li>
                    </ul>
                    <ul>
                        <li>Release date</li>
                        <li>18.11.22</li>
                    </ul>
                    <ul>
                        <li>Platform</li>
                        <li>Windows</li>
                    </ul>
                    </div>
                </div>
                <div className="right_button">
                <button>SHARE</button>
                <button>COMPLAIN</button>
                </div>

            <div className="spider_info">
                <div className="container">
                    <h1>WINDOWS</h1>
                    <div className="info_left">
                        <h2>Minimum</h2>
                        <ul>
                            <li>OS</li>
                            <li>Windows 10 64-bit</li>
                        </ul>
                        <ul>
                            <li>Processor</li>
                            <li>Intel Core i3-4160 @ 3.6 GHz or equivalent from AMD</li>
                        </ul>
                        <ul>
                            <li>Ram</li>
                            <li>8 GB RAM</li>
                        </ul>
                        <ul>
                            <li>Disk space</li>
                            <li>75 GB of available hard-disk space</li>
                        </ul>
                        <ul>
                            <li>Graphics card</li>
                            <li>NVIDIA GTX 950 or AMD Radeon RX 470</li>
                        </ul>
                        <ul>
                            <li>Accounts</li>
                            <li>Epic Games Account Required</li>
                        </ul>
                    </div>
                    <div className="info_right">
                        <h2>Recommended</h2>
                        <ul>
                            <li>OS</li>
                            <li>Windows 10 64-bit</li>
                        </ul>
                        <ul>
                            <li>Processor</li>
                            <li>Intel Core i5-4670 @ 3.4 GHz or AMD Ryzen5 1600 @ 3.2 GHz</li>
                        </ul>
                        <ul>
                            <li>Ram</li>
                            <li>16 GB RAM</li>
                        </ul>
                        <ul>
                            <li>Disk space</li>
                            <li>75 GB of available SSD space</li>
                        </ul>
                        <ul>
                            <li>Graphics card</li>
                            <li>NVIDIA GTX 1060 (6GB) or AMD Radeon RX 580 (8GB)</li>
                        </ul>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
export default FullGame