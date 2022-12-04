import React from 'react'
import './browse.scss'

const Browse: React.FC = () => {
    return (
        <div className='container'>
            <div className="browse">
                <img src="./img/browse.png" alt="" />
                <div className="browse__words">
                    <div className="browse__click">
                        <h1 className='browse__title'>Browse the full catalog</h1>
                        <button className='btn'>Go</button>
                    </div>
                    <p className="browse__subtitle">Find your next favorite by searching by type, element, price, and more...</p>
                </div>
            </div>
        </div>
    )
}

export default Browse