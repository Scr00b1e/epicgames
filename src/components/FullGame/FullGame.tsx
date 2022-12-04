import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './fullGame.scss'

const FullGame: React.FC = () => {
    const [game, setGame] = React.useState<{
        image: string
        title: string
        price: number
    }>()

    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        const GetItems = async () => {
            try {
                await fetch(`https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games` + id)
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
        return <p>Loading...</p>
    }

    return (
    <div className={'spider'}>
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
                {/*соси хуй Улук*/}
                <div className="left_bottom">

                </div>

            </div>

            <div className="spider_right">
                <div className="right_top"></div>
                <div className="right_bottom"></div>
            </div>
        </div>
    </div>
    )
}

export default FullGame