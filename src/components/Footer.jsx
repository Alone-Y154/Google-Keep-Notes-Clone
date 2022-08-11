import React from "react";

const year = new Date().getFullYear();
function Footer(){
    return(    <footer>
        <p>Copyright ⓒ{year}</p>
        <strong>Yashwanth Krishna</strong> 
    </footer>)

}

export default Footer;