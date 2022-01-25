import { useRef, useState } from 'react'
import { Canvas, render, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import './Logo.css'

function Icosahedron({ onHover, ...props }) {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += 0.008))
    return (
        <mesh ref={ref} {...props} onPointerOver={(e) => onHover(ref)} onPointerOut={(e) => onHover(null)}>
            <icosahedronBufferGeometry args={[1.3]} />
            <meshStandardMaterial roughness={0.5} emissive="#163345" />
        </mesh>
    )
}

export default function Logo() {
    const [hovered, onHover] = useState(null)
    const selected = hovered ? [hovered] : undefined
    return (
        <div className="animated-logo-container">
            <Canvas dpr={[1, 3]} style={{ position: "relative", width: `100%`, height: "100%", justifySelf: "center", marginRight: "2vh" }}>
                <ambientLight intensity={0} />
                <spotLight position={[6, 4, 1]} angle={0.75} penumbra={0.2} />
                <pointLight position={[-10, -10, -10]} />
                <Icosahedron onHover={onHover} position={[0, 0, 0]} style={{ position: "relative", width: "100%", height: "100%" }} />
            </Canvas>
        </div>


    )
}
