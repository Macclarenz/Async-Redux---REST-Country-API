import React, { Fragment } from "react";
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchText(props) {
    const {
        id,
        setSearchTermHandler
    } = props

    return <Fragment>
        <input
            type="text"
            id={id}
            name="term"
            placeholder="Search country"
            onChange={setSearchTermHandler}
        />
        <AiOutlineSearch className="search-icon" />
    </Fragment>
}