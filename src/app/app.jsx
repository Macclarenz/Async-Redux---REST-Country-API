import '../style/index.scss'
import { useDispatch, useSelector } from 'react-redux';

import React, { useState } from "react";
import { useEffect } from 'react';
import { loadCountries, selectCountries, selectIsLoading } from '../features/allCountries/allCountriesSlice';
import { selectFilter, setSearchTerm, setRegion } from '../features/filters/filtersSlice';
import CountryTablet from '../components/countryTablet';
import SearchText from '../components/searchText';
import RegionFilter from '../components/regionFilter';
import ViewMore from '../components/viewMore';
import CountryLoading from '../components/animation/countryLoading';
import ViewMoreLoading from '../components/animation/viewMoreLoading';

export default function App() {
    const dispatch = useDispatch()
    const countries = useSelector(selectCountries)
    const regionFilter = useSelector(selectFilter)

    // on first load
    useEffect(() => {
        dispatch(loadCountries())
    }, [])

    // sets regionFilter[0] (search term)
    const [term, setTerm] = useState('')
    const setSearchTermHandler = ({ target }) => setTerm(target.value)
    useEffect(() => {
        dispatch(setSearchTerm(term))
    }, [term])

    // sets regionFilter[1] (region)
    const setRegionHandler = ({ target }) => {
        dispatch(setRegion(target.dataset.region))
    }

    // displays countries based on the regionFilter(searchTerm, region) 
    const [visibleCountry, setVisibleCountry] = useState([])
    useEffect(() => {
        setVisibleCountry(() => {
            return countries.filter(country => {
                return country.name.common.toLowerCase().includes(regionFilter[0]) && country.region.toLowerCase().includes(regionFilter[1])
            })
        })
    }, [countries, regionFilter])

    // increase the max-height to view more countries
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const loadMoreHandler = ({ target }) => {
        setLoadingAnimation(true)
        target.setAttribute('disabled', true)
        setTimeout(() => {
            const countryContainer = document.querySelector('.country-container')
            const offsetHeight = countryContainer.offsetHeight
            const newHeight = offsetHeight + 2000
            countryContainer.style.maxHeight = newHeight + 'px'

            setLoadingAnimation(false)
            target.removeAttribute('disabled')
        }, 1000)
    }

    // useEffect(() => {
    //     console.log(loadingAnimation)
    // }, [loadingAnimation])

    // // prints country
    // useEffect(() => {
    //     console.log(countries)
    // }, [countries])

    // useEffect(() => {
    //     console.log(visibleCountry)
    // }, [visibleCountry])

    return (
        <React.StrictMode>
            <main>
                <div className="input-container">
                    <div className="search-container">
                        <SearchText id='searchTermText' setSearchTermHandler={setSearchTermHandler} />
                    </div>
                    <div className="filter-container">
                        <RegionFilter
                            filters={['', 'asia', 'africa', 'america', 'europe', 'oceania']}
                            setRegionHandler={setRegionHandler}
                        />
                    </div>
                </div>
                <div className="country-container">
                    {
                        countries?.length ?
                            visibleCountry.map((country, index) => (
                                <div key={index} className='country-tablet-container'>
                                    <CountryTablet
                                        name={country.name.common}
                                        image={country.flags.svg}
                                        population={country.population}
                                        capital={Array.isArray(country.capital) ? country.capital[0] : country.capital}
                                        region={country.region}
                                    />
                                </div>
                            ))
                            : <CountryLoading />
                    }
                </div>
                <div className="load-more-container">
                    {(loadingAnimation) && <ViewMoreLoading />}
                    {/* <ViewMoreLoading /> */}
                    <ViewMore id='loadMoreBtn' loadMoreHandler={loadMoreHandler} />
                </div>
            </main>
        </React.StrictMode>

    )
}