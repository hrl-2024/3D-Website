import { useRef, useEffect } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const {scene, animations} = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, [])

  useFrame(({ clock, camera }) => {
    // Update the Y position simulate the bird-like motion in a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.25 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
        // out of the screen, flip the bird
        birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
        // still in the screen
        birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      // move to the right
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // move to the left
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

  })

  return (
    <mesh position={[-5, 2, 1]} 
    scale={[0.003, 0.003, 0.003]} 
    ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird