import React from 'react';
import { Canvas } from '@react-three/fiber';

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial className="bg-black" />
    </mesh>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="w-full h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </div>
      <div className="z-10">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="mb-4 p-2" />
          <input type="email" placeholder="Email" className="mb-4 p-2" />
          <textarea placeholder="Message" rows="4" className="mb-4 p-2" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;