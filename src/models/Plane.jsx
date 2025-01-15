import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'

const Plane = ({planeScale,isRotating,planePosition,...Props}) => {
    const {scene,animations} = useGLTF(planeScene)
    const planeRef = useRef();

    const {actions} = useAnimations(animations, planeRef);

    useEffect( ()=>{
        if(isRotating) {
            actions['Take 001'].play();
        }
        else {
            actions['Take 001'].stop();
        }
    },[actions,isRotating])
  return (
    <mesh {...Props} ref={planeRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane