import React from 'react'
import './catalog.scss'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import Skeleton from '../../components/card/Skeleton'
import Filter from '../../components/filter/Filter'
import Sort from '../../components/sort/Sort'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Catalog: React.FC = () => {
    //states
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const navigate = useNavigate()

    //redux
    const sort = useSelector((state: RootState) => state.sortSlice.sort)

    //for fetching
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')

    //fetching
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

    //for items
    const games = items.filter((obj: any) => {
        if(obj.title.toLowerCase().includes(search)) {
            return true
        }
        return false
    })
        .map((obj: any) => (
        <Link key={obj.id} to={`/games/${obj.id}`}>
            <Card {...obj} />
        </Link>
    ))
    const skeletons = [...new Array(12)].map((_, id) => <Skeleton key={id} />)

    return (
        <div className='container'>
            <div className="catalog">
                <Sort value={sort} />
                <div className="catalog__content">
                    {
                        isLoading ? skeletons : games
                    }
                </div>
                <Filter search={search} setSearch={setSearch}/>
            </div>
        </div>
    )
}

export default Catalog