import React, { useEffect } from "react"

const useFetch = (url: string) => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    useEffect(() => {
        const getItems = async () => {
            try {
                setIsLoading(true)
                await fetch(url)
                    .then((res) => {
                        return res.json()
                    }).then((arr) => {
                        setItems(arr)
                        setIsLoading(false)
                    })
            } catch {
                alert('check network!')
                setError(true)
            }
        }
        getItems()
    }, [url])

    return { items, isLoading, error }
}

export default useFetch