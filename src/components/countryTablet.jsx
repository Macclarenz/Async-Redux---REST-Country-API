import React, { Fragment } from "react";

export default function CountryTablet (props) {
    const {
        name,
        image,
        population,
        capital,
        region
    } = props

    return (
        <Fragment>
            <div className="country-image-container">
                <img src={image} alt={`${name} flag`} className="country-img" />
            </div>
            <div className="country-text-container">
                <h2 className="country-name">{name}</h2>
                <div className="country-detail-container">
                    <p>Population: <span className="country-population">{convertNumber(population)}</span></p>
                    <p>Capital <span className="country-capital">{capital}</span></p>
                    <p>Region: <span className="country-region">{region}</span></p>
                </div>
            </div>
        </Fragment>
    )
}

function convertNumber (number) {
    const numberFormat = new Intl.NumberFormat()
    return numberFormat.format(number)
}