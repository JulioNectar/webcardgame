/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: shedmon (https://sketchfab.com/shedmon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sword-91879718299e473e8ac55743d510aa68
title: Sword
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const groupRot = useRef()
  const groupPos = useRef()
  const { nodes, materials } = useGLTF(('/weapows/sword/scene.gltf'))
  useFrame((state, delta) => (groupPos.current.position.z = zoomLevel))
  useFrame((state, delta) => (groupRot.current.rotation.z -= 0.04))



  const [zoomLevel, setZoomLevel] = useState(-6);
  return (
    <group
      onPointerOver={() => setZoomLevel(.6)}
      onPointerOut={() => setZoomLevel(-6)}
      ref={groupPos} {...props} dispose={null}
    >
      <group scale={[.005, .005, .005]} rotation={[1.5, .4, 0]} position={[0, 1, 0]}>
        <group ref={groupRot} {...props} dispose={null}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Default} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
