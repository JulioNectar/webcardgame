import React, { Suspense } from 'react'
import Sword from '../Models/Scene.js'
import Shield from '../Models/Shield.js'
import Mace from '../Models/Mace.js'
import Ship1 from '../Models/Ship1.js'
import Ship2 from '../Models/Ship2.js'

import styled from 'styled-components'

import Card from './Card.js'


const Dashboard = () => {


    const ItensInfo = [
        {
            "name": 'Nave 1',
            "desc": 'Uma nave poderosa',
            "atk": 500,
            "def": 1000,
            "model": Ship1,
            "tier": 1,
        },

        // {
        //     "name": 'Nave 2',
        //     "desc": 'Uma nave poderosa',
        //     "atk": 5000,
        //     "def": 2400,
        //     "model": Ship2,
        //     "tier": 2,
        // },
        // {
        //     "name": 'Mace',
        //     "desc": 'Um mace muito poderoso',
        //     "atk": 500,
        //     "def": 40,
        //     "model": Mace,
        //     "tier": 3,
        // },
        // {
        //     "name": 'Faca do Poder',
        //     "desc": 'Uma faca muito poderosa',
        //     "atk": 200,
        //     "def": 10,
        //     "model": Sword,
        //     "tier": 2,
        // },



    ]

    //create a styled component for Card
    const DashboardField = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 70vw;
        background-color: #333;
        border: 1px solid #fff;
        margin-top: 40px;
        margin-bottom: 40px;
        padding: 40px;
        padding-left: 0px;
        padding-right: 0px;
        flex-wrap: wrap;
        background-image: linear-gradient(to top, #444, #333);
        border: 2px solid #000;
        border-radius: 10px;
        height: fit-content

        `
    const tierColor1 = 'green'
    const tierColor2 = 'blue'
    const tierColor3 = 'purple'


    const corFunction = (props) => {

        return props => props.tier == 1 ? tierColor1 : props.tier == 2 ? tierColor2 : tierColor3

        // eslint-disable-next-line no-unreachable
        switch (true) {
            case props => props.tier == 1:
                return tierColor1
            case props => props.tier == 2:
                return tierColor2
            case props => props.tier == 3:
                return tierColor3
            default:
                return 'black'
        }

    }

    const CardStyle = styled.div`
        --corTier:${corFunction(props => props.tier)};
        
        display: flex;
        margin: 24px;
        width: 300px;
        height: 450px;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 0px var(--corTier) ;
        background-color: #444;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 6px solid black;
        min-width: 300px;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        position: relative;
        :hover {
            overflow: visible;
            
        }

        `



    return (
        <DashboardField>
            {ItensInfo.map((item, id) => {
                return (
                    <CardStyle tier={item.tier}>
                        <Card name={item.name} atk={item.atk} def={item.def} model={item.model} id={id} />
                    </CardStyle>
                )
            })}

        </DashboardField>
    )
}

export default Dashboard
