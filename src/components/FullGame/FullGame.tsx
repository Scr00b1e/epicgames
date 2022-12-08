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
    const [isLoading, setIsLoading] = React.useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        const GetItems = async () => {
            try {
                setIsLoading(true)
                await fetch(`https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/games/` + id)
                    .then((res) => {
                        return res.json()
                    }).then((arr) => {
                        setGame(arr)
                        setIsLoading(false)
                    })
            } catch {
                alert('Error!')
                navigate('/')
            }
        }
        GetItems()
    }, [])

    if (!game) {
        return <h1>Undefined...</h1>
    }
    if (isLoading) {
        return (
            <div className="container">
                <div className="fullGame">
                    <Skeleton />
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="fullGame">
                <h1>{game.title}</h1>
                <img src={game.image} alt="" />
                <p>{game.price}</p>
            </div>
        </div>
    )
}

export default FullGame