import './App.css';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './Components/Earth/Earth';
import { OrbitControls } from '@react-three/drei';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Test from './Components/Test/Test';

const CanvasContainer = styled.div`
  width :100%;
  height:100vh;`;


function App() {
  return (
    <>
      <Navbar />
      <CanvasContainer>
        <Home />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <CanvasContainer>
        <Suspense fallback={null}>
          <Test />
        </Suspense>
      </CanvasContainer>

    </>
  );
}

export default App;
