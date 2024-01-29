// import { useState, useEffect } from "react"
import GifGridItem from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    //Se puede renombrar data como data:images
    const { data, loading } = useFetchGifs(category)

    return (
        <>
            <div className="card text-white bg-dark mb-3 border-0">
                <div className="card-header bg-danger">
                    <h3 className="w-100 m-0">
                        {category}
                    </h3>
                </div>

                {loading && 
                <div className="d-flex flex-column align-items-center">
                    <h3 className="text-center" >Buscando datos...</h3>
                    <p className="tite "></p>
                </div>
                }

                <div className="card-body">
                    <ol className="row m-0 p-0">
                        {
                            data.map(img => (
                                <GifGridItem
                                    key={img.id}
                                    {...img} />
                            ))
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default GifGrid