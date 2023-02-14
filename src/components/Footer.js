import React from 'react'

const Footer = () =>{
    return(
        <div className="footer">
            <img src="./Logo.png" id="footer-logo" alt="yellow circle with a house"/>

            <div className="footer-links">
                <h3>LinkedIn: <a href="www.linkedin.com/in/agustina-fin">Agustina Fin Scigliano</a></h3>
                <h3>Github: <a href="https://github.com/goosefin">Goose</a></h3>
                <h3>Portfolio: <a href="#">My Portfolio</a></h3>
            </div>
        </div>
    )
}

export default Footer