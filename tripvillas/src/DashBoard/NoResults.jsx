import React from 'react'
import styles from "./NoResults.module.css"

const NoResults = () => {
    return (
        <>
            <div className={styles.noresults}>
                <div>No results</div>
                <p>We could not find any results for given query</p>
            </div>
        </>
    )
}

export default NoResults;