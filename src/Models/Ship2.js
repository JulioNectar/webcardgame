/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Júlio Néctar (https://sketchfab.com/julioooc)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/spacecraft-no03sc-211a35728bca455eaab3228035f0f7ec
title: SpaceCraft Nº03SC
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ships/ship2/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.spacecraft_low_mtl4} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.spacecraft_low_mtl3} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.spacecraft_low_mtl2} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.spacecraft_low_mtl1} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.spacecraft_low_mtl0} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
