import React, { Fragment } from 'react'
//import batman from '../../assets/images/batman.png'
import './ErrorPage.css'
import error from '../../assets/images/error404.jpeg'

const ErrorPage = () => {
    return (
        <Fragment>
            <div className="errorPage">
            <img src={ error } alt="error Page"/>
            </div>
        </Fragment>
    )
}

export default ErrorPage
