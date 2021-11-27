import React from 'react'
import styled from 'styled-components'

const Header = () => {

    //create a header component
    const HeaderField = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 6vh;
        background-color: #333;
        background-image: linear-gradient(to right, lightgreen, darkgreen);
        padding-left: 2vw;

        `
    //create a header item style
    const HeaderItem = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 6vh;
        background-color: #333;
        padding-left: 2vw;
        padding-right: 2vw;
        font-size: 1.5vw;
        font-weight: bold;
        color: #fff;
        text-align: center;
        border-radius: 10px 10px 0px 0px;
   
        margin: 1vh;
        margin-top: 2vh;
        `

    return (
        <div>
            <div>
                <HeaderField>
                    <HeaderItem>Home</HeaderItem>
                    <HeaderItem>Store</HeaderItem>
                </HeaderField>
            </div>
        </div>
    )
}

export default Header
