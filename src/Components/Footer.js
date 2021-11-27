import React from 'react'
import styled from 'styled-components'
//create a footer style

const FooterStyle = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: #333;
    background-image: linear-gradient(to right, lightgreen, darkgreen);
    padding-left: 2vw;  
    `


const Footer = () => {
    return (
        <div>
            <FooterStyle>   Footer </FooterStyle>
        </div>
    )
}

export default Footer
