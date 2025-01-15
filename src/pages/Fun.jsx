import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import Kakashi from '../models/Kakashi';
import { soundoff, soundon } from '../assets/icons';
import narutoMusic from '../assets/naruto.mp3'

const Fun = () => {
  const [kakaAnimation, setKakaAnimation] = useState('Dance');

  const [narMusic, setNarMusic] = useState(false);

  const narRef = useRef(new Audio(narutoMusic));
  narRef.current.volume = 0.4;
  narRef.current.loop = true;

  useEffect( () => {
    if (narMusic) {
      narRef.current.play();
    }
    return () => {
      narRef.current.pause();
    }
  },[narMusic])

  const handleChange = (e) => {
    setKakaAnimation(e.target.value);
  };

  const handleRotation = ()=> {

    if (kakaAnimation === 'Esquivando' ||
        kakaAnimation === 'Sigilo'
    ) {
      return [12.629, -10, 0];
    }
    
    else if (kakaAnimation === 'Salto' ||
        kakaAnimation === 'Baile' ||
        kakaAnimation === 'Recogiendo'){
      return [12.629, 0, 0]
    }
    else if (kakaAnimation === 'CorrerPared') {
      return [12.629,-15, 0];
    }
    else {
      return [12.929, 0, 0];
    }
  }

  const kakaRotation = handleRotation()

  return (
    <section className="relative flex flex-col max-container items-center h-[100vh]">
      {/* Header Section */}
      <h1 className="text-center mb-6 bg-green-900 text-cyan-50 p-2 rounded-xl">Kakashi Hatake</h1>

      {/* Options Section */}
      <div className="w-full flex flex-col items-center mb-6">
        <label className="text-black-500 font-semibold w-3/4 max-w-lg cursor-pointer">
          Choose an Action:
          <select
            id="kaka"
            className="p-2 border border-gray-300 rounded-md w-full mt-1 cursor-pointer"
            onChange={handleChange}
          >
            <option defaultValue="Static Pose">Pose</option>
            <option value="Salto">Jump</option>
            <option value="Baile">Dance</option>
            <option value="CorrerPared">Wall Running</option>
            <option value="Recogiendo">Collecting</option>
            <option value="Esquivando">Dodging</option>
            <option value="Sigilo">Stealth</option>
          </select>
        </label>
      </div>

      {/* Canvas Section */}
      <div
        className="w-full"
        style={{
          height: '700px', // Canvas height
          maxHeight: '80vh', // Responsive height
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0.5, 1]} intensity={3.5} />
          <ambientLight intensity={2} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Kakashi
              kakaAnimation={kakaAnimation}
              setKakaAnimation={setKakaAnimation}
              position={[-0.1, -1.5, 0]}
              rotation={kakaRotation}
              scale={[2.2, 2.2, 2.2]}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-20 left-2'>
            <img
            src={!narMusic ? soundoff : soundon}
            alt='jukebox'
            onClick={()=>setNarMusic(!narMusic)}
            className='w-10 h-10 cursor-pointer object-contain'
            />
      </div>
    </section>
  );
};

export default Fun;
