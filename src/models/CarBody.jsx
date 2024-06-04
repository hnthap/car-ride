import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import carbody from "/Car&Wheel/tireless_car.glb"

export default function CarBody(props) {
  const { nodes, materials } = useGLTF(carbody)
  return (
    <group {...props} dispose={null}>
      <group position={[40.507, 74.477, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.car_body_body_0.geometry}
          material={materials['body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.car_body_glass_0.geometry}
          material={materials['glass.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.car_body_rubber_0.geometry}
          material={materials['rubber.001']}
        />
      </group>
      <group position={[34.563, 137.34, 11.035]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chest_base_chest_0.geometry}
          material={materials['chest.001']}
        />
        <group position={[0.042, -0.071, 16.302]} rotation={[0, 0, -1.92]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chest_top_chest_0.geometry}
            material={materials['chest.001']}
            position={[21.348, -41.938, -2.121]}
          />
        </group>
      </group>
      <group position={[60.954, 50.964, 72.077]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_left_body_0.geometry}
          material={materials['body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_left_interior_0.geometry}
          material={materials['interior.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_left_rubber_0.geometry}
          material={materials['rubber.001']}
        />
      </group>
      <group position={[60.961, 52.352, -71.876]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_right_body_0.geometry}
          material={materials['body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_right_interior_0.geometry}
          material={materials['interior.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door_right_rubber_0.geometry}
          material={materials['rubber.001']}
        />
      </group>
      <group position={[-6.27, 101.334, -57.266]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_02_body_0.geometry}
          material={materials['body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_02_glass_0.geometry}
          material={materials['glass.001']}
        />
      </group>
      <group position={[-5.875, 101.292, 57.084]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_03_body_0.geometry}
          material={materials['body.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_03_glass_0.geometry}
          material={materials['glass.001']}
        />
      </group>
      <group position={[-25.659, 75.44, 30.097]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior_00_chrome_0.geometry}
          material={materials['chrome.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior_00_interior_0.geometry}
          material={materials['interior.001']}
        />
      </group>
      <group position={[55.23, 73.302, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior_01_chrome_0.geometry}
          material={materials['chrome.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interior_01_interior_0.geometry}
          material={materials['interior.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_door_body_0.geometry}
        material={materials['body.001']}
        position={[178.277, 63.436, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom_body_0.geometry}
        material={materials['body.001']}
        position={[42.377, 36.238, 0.003]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_bumper_body_0.geometry}
        material={materials['body.001']}
        position={[-114.745, 31.894, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_00_glass_0.geometry}
        material={materials['glass.001']}
        position={[32.163, 101.386, 57.626]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_01_glass_0.geometry}
        material={materials['glass.001']}
        position={[32.163, 101.386, -57.626]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hood_body_0.geometry}
        material={materials['body.001']}
        position={[-82.966, 75.292, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_00_lights_0.geometry}
        material={materials['lights.001']}
        position={[-113.307, 58.243, -52.905]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_01_lights_0.geometry}
        material={materials['lights.001']}
        position={[-111.181, 42.634, 56.291]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_02_lights_0.geometry}
        material={materials['lights.001']}
        position={[-111.181, 42.634, -56.291]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_03_lights_0.geometry}
        material={materials['lights.001']}
        position={[-95.614, 63.404, 66.673]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_04_lights_0.geometry}
        material={materials['lights.001']}
        position={[-95.614, 63.404, -66.673]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lights_05_lights_0.geometry}
        material={materials['lights.001']}
        position={[193.917, 54.699, 54.226]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo_01_body_0.geometry}
        material={materials['body.001']}
        position={[-118.585, 66.188, 0.491]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.number_plate_number_0.geometry}
        material={materials['number.001']}
        position={[-122.792, 32.206, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.railings_body_0.geometry}
        material={materials['body.001']}
        position={[61.596, 132.744, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rear_bumper_body_0.geometry}
        material={materials['body.001']}
        position={[196.328, 31.597, -0.163]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.viper_01_body_0.geometry}
        material={materials['body.001']}
        position={[-35.738, 93.998, 7.389]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.viper_02_body_0.geometry}
        material={materials['body.001']}
        position={[-34.358, 93.066, -32.945]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel_004_wheels_0.geometry}
        material={materials['wheels.001']}
        position={[82.193, 145.057, 16.24]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel_005_wheels_0.geometry}
        material={materials['wheels.001']}
        position={[82.193, 151.168, -18.517]}
        rotation={[2.618, 0, 0]}
      />
    </group>
  )
}