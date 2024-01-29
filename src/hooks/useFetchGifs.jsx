import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            // .then(imgs => (setImage(imgs))) es lo mismo 👇🏿
            // .then(setState) 
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data:imgs,
                        loading: false
                    })
                }, 1000);
            })
    }, [category])

    return state

}

export default useFetchGifs