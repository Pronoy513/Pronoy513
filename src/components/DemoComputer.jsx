import { useVideoTexture } from '@react-three/drei';
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputer = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/computer.glb')


    const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

    useEffect(() => {
        if (txt) {
            txt.flipY = false;
        }
    }, [txt]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power3.out',
        });
    }, [txt]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="monitor-screen"
                    castShadow
                    receiveShadow
                    geometry={nodes['monitor-screen'].geometry}
                    material={nodes['monitor-screen'].material}
                    position={[0.127, 1.831, 0.511]}
                    rotation={[1.571, -0.005, 0.031]}
                    scale={[0.661, 0.608, 0.401]}
                >
                    <meshBasicMaterial map={txt} />
                </mesh>
                <group
                    name="RootNode"
                    position={[0, 1.093, 0]}
                    rotation={[-Math.PI / 2, 0, -0.033]}
                    scale={0.045}>
                    <group
                        name="Screen001"
                        position={[5.658, 1.643, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen002"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen003"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen004"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen005"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen006"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen007"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen008"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen009"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen010"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen011"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen012"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen013"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen014"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen015"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen016"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen017"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen018"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen019"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen020"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen021"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen022"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen023"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen024"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen025"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen026"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen027"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen028"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen029"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen030"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen031"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen032"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen033"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen034"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen035"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen036"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen037"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen038"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen039"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen040"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen041"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen042"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen043"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen044"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen045"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen046"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen047"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen048"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen049"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen050"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen051"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen052"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen053"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen054"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen055"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen056"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen057"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen058"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen059"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen060"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen061"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen062"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen063"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen064"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen065"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen066"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen067"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen068"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen069"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen070"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen071"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen072"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen073"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen074"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen075"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen076"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen077"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen078"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen079"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen080"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen081"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen082"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen083"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen084"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen085"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen086"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen087"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen088"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen089"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen090"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen091"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen092"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen093"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen094"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen095"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen096"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen097"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen098"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen099"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen100"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen101"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen102"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen103"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen104"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen105"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen106"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen107"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen108"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen109"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen110"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen111"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen112"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen113"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen114"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen115"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen116"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen117"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen118"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen119"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen120"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen121"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen122"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen123"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen124"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen125"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen126"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen127"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen128"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen129"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen130"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen131"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen132"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen133"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen134"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen135"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen136"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen137"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen138"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen139"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen140"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen141"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen142"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen143"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen144"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen145"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen146"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen147"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Screen148"
                        position={[5.658, 1.644, 0.812]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={[0.923, 0.855, 0.855]}
                    />
                    <group
                        name="Tower-light-007"
                        position={[16.089, -3.47, -14.495]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.963}
                    />
                    <group
                        name="Tower-light-008"
                        position={[15.155, -3.47, -14.495]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.963}
                    />
                </group>
                <group
                    name="Monitor-B-_computer_0"
                    position={[0.266, 1.132, 0.051]}
                    rotation={[0, -0.033, 0]}
                    scale={[0.042, 0.045, 0.045]}>
                    <mesh
                        name="Monitor-B-_computer_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_1'].geometry}
                        material={materials.computer}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_2"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_2'].geometry}
                        material={materials.base__0}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_3"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_3'].geometry}
                        material={materials.Material_36}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_4"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_4'].geometry}
                        material={materials.Material_35}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_5"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_5'].geometry}
                        material={materials.Material_34}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_6"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_6'].geometry}
                        material={materials.keys}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_7"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_7'].geometry}
                        material={materials.keys2}
                    />
                    <mesh
                        name="Monitor-B-_computer_0_8"
                        castShadow
                        receiveShadow
                        geometry={nodes['Monitor-B-_computer_0_8'].geometry}
                        material={materials.Material_37}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/computer.glb')
export default DemoComputer;