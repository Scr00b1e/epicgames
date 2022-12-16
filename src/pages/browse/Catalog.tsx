import React from 'react'
import './catalog.scss'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import Skeleton from '../../components/card/Skeleton'
import Filter from '../../components/filter/Filter'
import Sort from '../../components/sort/Sort'

const Catalog: React.FC = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [sort, setSort] = React.useState({
        name: 'popularity',
        sortType: 'rating'
    })
    const navigate = useNavigate()

    const order = sort.sortType.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortType.replace('-', '')

    const getGames = async () => {
        try {
            setIsLoading(true)
            await fetch(`https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/all?&sortBy=${sortBy}&order=${order}`)
                .then((res) => {
                    return res.json()
                })
                .then((arr) => {
                    setItems(arr)
                    setIsLoading(false)
                })
        } catch {
            alert('Something is wrong...')
            navigate('/')
        }
    }
    React.useEffect(() => {
        getGames()
    }, [sort])

    const games = items.map((obj: any) => (
        <Link key={obj.id} to={`/games/${obj.id}`}>
            <Card {...obj} />
        </Link>
    ))
    const skeletons = [...new Array(12)].map((_, id) => <Skeleton key={id} />)

    return (
        <div className='container'>
            <div className="catalog">
                <Sort value={sort} onChangeSort={(i) => setSort(i)} />
                <div className="catalog__content">
                    {
                        isLoading ? skeletons : games
                    }
                </div>
                <Filter />
            </div>
        </div>
    )
}

export default Catalog