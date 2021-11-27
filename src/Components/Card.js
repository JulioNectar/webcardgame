import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import styled from 'styled-components'

import { GiBroadsword } from "react-icons/gi";
import { GiEdgedShield } from "react-icons/gi";

import { Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { EffectComposer, SSAO, Bloom, Noise } from '@react-three/postprocessing'

const Card = (props) => {
    const name = props.name;
    const desc = props.desc;
    const atk = props.atk;
    const def = props.def;
    const Model = props.model;
    const id = props.id;

    const [canvasSize, setCanvasSize] = useState(100);
    const [zoomLevel, setZoomLevel] = useState(0);

    const [isHover, setIsHover] = useState(false);
    const handleHover = (isHover) => {
        setIsHover(isHover);
    }


    document.body.style.overflowX = "hidden";

    const mouseOver = () => {
        var canv = document.getElementById("canv");
        document.body.style.overflowY = "hidden";

    };



    const mouseOut = () => {
        var canv = document.getElementById("canv");
        document.body.style.overflowY = "auto";
    };




    const CanvasStyle = styled.div`
        width: 650px;
        height: 650px;
        cursor: pointer;
        position: absolute;
        z-index: 10;
        transition: all 0.0s ease-in-out;
        top: -100px;
        left: -190px;

        `

    const NameStyle = styled.div`
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;

        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 50px;
        position: absolute; 
        top: 0px;
        padding-top: 14px;
        left:0px;


        `

    const AtkStyle = styled.a`
        
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        position: absolute; 
        bottom: 30px;

        left: 30px;
        

        `
    const DefStyle = styled.a`
        
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        position: absolute; 
        bottom: 30px;
     
        right: 30px;

        `




    return (
        <div style={{}} >
            <NameStyle>{name}</NameStyle>
            <CanvasStyle >

                <Canvas
                    shadows

                    dpr={1.5}
                    gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
                    camera={{ position: [0, 0, -20], fov: 60, near: 1, far: 100 }}
                    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
                    {/* <fog attach="fog" args={['#151515', 20, 30]} /> */}

                    {/* <ambientLight intensity={2} />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                    <directionalLight
                        castShadow
                        intensity={2}
                        position={[50, 50, 25]}
                        shadow-mapSize={[256, 256]}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    /> */}


                    <Suspense fallback={'carregando'}>
                        <Model>

                        </Model>
                        <Environment files="/hdris/forest.hdr" />

                    </Suspense>

                    <EffectComposer multisampling={0}>
                        <SSAO samples={11} radius={30} intensity={20} luminanceInfluence={0.6} color="red" />
                        <SSAO samples={21} radius={7} intensity={20} luminanceInfluence={0.6} color="red" />
                        <Bloom intensity={1.25} kernelSize={2} luminanceThreshold={0.8} luminanceSmoothing={0.0} />
                    </EffectComposer>
                    <OrbitControls xautoRotate enableZoom={true} enablePan={false} minPolarAngle={Math.PI / 3} />

                </Canvas>
            </CanvasStyle>

            <p >{desc}</p>

            <AtkStyle ><GiBroadsword style={{ verticalAlign: 'middle' }} />  {atk}</AtkStyle>
            <DefStyle> <GiEdgedShield style={{ verticalAlign: 'middle' }} />  {def}</DefStyle>


        </div>

    )
}

export default Card
