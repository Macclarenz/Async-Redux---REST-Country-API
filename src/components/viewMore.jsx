import React from "react";
import { BsArrowDown } from 'react-icons/bs'

export default function ViewMore (props) {
    const {
        id,
        loadMoreHandler
    } = props

    return (
        <button type="button"
            id = {id}
            onClick = {loadMoreHandler}
        >
            View more
            <BsArrowDown className="down-arrow-icon"/>
        </button>
    )
}