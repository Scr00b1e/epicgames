import React from 'react'
import './catalog.scss'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import Skeleton from '../../components/card/Skeleton'
import Sort from '../../components/sort/Sort'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import NotFound from '../../components/notFound/NotFound'
import Search from '../../components/search/Search'
import useFetch from '../../hooks/useFetch'

const Catalog: React.FC = () => {
    //states
    const [search, setSearch] = React.useState('')
    const navigate = useNavigate()

    //redux
    const sort = useSelector((state: RootState) => state.sortSlice.sort)

    //for fetching
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')

    //fetching
    React.useEffect(() => {
    }, [sort])
    const { items, error, isLoading } = useFetch(`https://6290eebe665ea71fe13e1a80.mockapi.io/pizza/all?&sortBy=${sortBy}&order=${order}`)

    //for items
    const games = items.filter((obj: any) => {
        if (obj.title.toLowerCase().includes(search)) {
            return true
        }
        return false
    })
        .map((obj: any) => (
            <Card key={obj.id} {...obj} />
        ))
    const skeletons = [...new Array(12)].map((_, id) => <Skeleton key={id} />)

    if (error) {
        navigate('/')
        return <NotFound />
    }

    return (
        <div className='container'>
            <div className="catalog">
                <Sort value={sort} />
                <div className="catalog__content">
                    {
                        isLoading ? skeletons : games
                    }
                </div>
                <Search search={search} setSearch={setSearch} />
            </div>
        </div>
    )
}

export default Catalog