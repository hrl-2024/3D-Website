import React, { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log('isRotating', isRotating);
    if (isRotating) {
        actions['Take 001'].reset().fadeIn(1).play();
    } else {
        actions['Take 001'].fadeOut(2);
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane