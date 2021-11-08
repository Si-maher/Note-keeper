import React from "react";
import './footer-styles.css'

const Footer = () => {

    let currentYear = new Date().getFullYear()
    return(
        <footer className = 'footer'>
<p>
  Vantaa  &copy;{currentYear}
</p>
        </footer>
    )
}

export default Footer