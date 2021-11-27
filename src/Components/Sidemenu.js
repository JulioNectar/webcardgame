import React from 'react'
import styled from 'styled-components'
//create a side menu component
const SideMenu = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20vw;
        height: 80vh;
        background-color: #333;
        background-image: linear-gradient(to top, #444, #333);
        border: 2px solid #000;
        border-radius: 10px;
        padding-left: 40px;
        margin: 2vh;
    
        
        `
const Sidemenu = () => {
    return (
        <SideMenu>
            item1
            item2
            ite3
        </SideMenu>
    )
}

export default Sidemenu
