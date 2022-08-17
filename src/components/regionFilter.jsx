import React, { Fragment } from "react";

export default function RegionFilter(props) {
    const {
        filters,
        setRegionHandler
    } = props

    return (
        filters.map((region, index) => (
            <button 
                key={index} 
                type = "button"
                className = 'filter-btn'
                data-region={region}
                onClick={setRegionHandler}
                >{
                !region ? 'All' 
                : capitalizeFirstLetter(region)
            }</button>
        ))
    )
}

function capitalizeFirstLetter(word) {
    const firstLetter = word[0]
    const slicedWord = word.slice(1)
    return firstLetter.toUpperCase() + slicedWord
}