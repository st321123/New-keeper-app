import React from 'react'
var dat = new Date().getFullYear();
console.log(dat);
function Footer() {
    return (<footer className=' footer'>
        <p>Copyright @{dat} </p>
    </footer>)
}

export default Footer;