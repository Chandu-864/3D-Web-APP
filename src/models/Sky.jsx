import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyscene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
const Sky = ({isRotating}) => {
    const sky = useGLTF(skyscene);
    const skyRef = useRef();

    useFrame( (_,delta)=> {
        if (isRotating) {
            skyRef.current.rotation.y += delta * 0.25;
        }
    }, [isRotating])
  return (
    <mesh ref={skyRef}>
        <primitive object = {sky.scene} />
    </mesh>
  )
}

export default Sky