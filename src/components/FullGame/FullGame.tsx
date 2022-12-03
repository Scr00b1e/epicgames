import React from 'react'
import { useParams } from 'react-router-dom'
import './fullGame.scss'

const FullGame: React.FC = () => {
    const [game, setGame] = React.useState()
    const { id } = useParams()

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
            }
        }
        GetItems()
    }, [])

    return (
        <div className='container'>
            <div className="fullGame">
                FullGame
                {id}
            </div>
        </div>
      )
}

export default FullGame