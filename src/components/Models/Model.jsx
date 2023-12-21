import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  useFrame(({ camera }) => {
    console.log(camera.position);
  });
  useThree(({ camera }) => {
    camera.position.set(0, 0, 5);
  });
  const gltf = useLoader(GLTFLoader, "model/model.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={[0.033, 0.033, 0.033]}
      position={[0, -2.4, 0]}
    />
  );
};

export default Model;
