import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";


const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  const group = useRef();
  const data = useScroll();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
  });
  return (
    <group ref={group}>
      <Image url="./img1.jpeg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="./img2.jpeg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./img3.jpeg"
        scale={[1, 2.7, 1]}
        position={[-2.3, -height, -2]}
      />
      <Image
        url="./img4.jpeg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 1.2]}
      />
    </group>
  );
};
export default Images;
