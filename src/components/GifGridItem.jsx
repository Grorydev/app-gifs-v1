import React from 'react'

const GifGridItem = ({ id, title, url }) => {
    return (

            <li className="col-12 col-sm-6 col-md-4 col-lg-3 list-card mb-3 text-dark">
                <div className="card size-card h-100" key={id}>
                    <img className="card-img img-card" src={url} alt={title} />
                    <div className="card-body d-flex align-items-center title-card">
                        <h4 className="card-title w-100">{title}</h4>
                    </div>
                </div>
            </li>


    )
}

export default GifGridItem