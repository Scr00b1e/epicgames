import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './fullGame.scss'

const FullGame: React.FC = () => {
    const [game, setGame] = React.useState<{
        id: string
        image: string
        title: string
        price: number
    }>()
    console.log(game);


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
        return <p>Loading...</p>
    }

    return (
        <div className='container'>
            <div className="fullGame">
                FullGame
                <h1>{game.title}</h1>
                <img src={game.image} alt="" />
                <p>{game.price}</p>
            </div>
        </div>
    )
}

export default FullGame