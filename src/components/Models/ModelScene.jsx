import { Canvas } from "@react-three/fiber";
import Model from "./Model"
import { OrbitControls } from "@react-three/drei";

const ModelScene = () => {
  return (
    <div className="h-[850px]">
      <Canvas>
        <Model />
        <directionalLight position={[-0.2, 2.2, 4.2]} intensity={1.5} />
        <directionalLight position={[1, 2.2, 4.2]} intensity={1.5} />
        <directionalLight position={[1, 2.2, -4.2]} intensity={1.5} />
        <directionalLight position={[1, -2.2, 4.2]} intensity={1.5} />
        {/* <directionalLight position={[-1, -2.2, 4.2]} intensity={1.5} />
        <directionalLight position={[5.8, 0.4, -0.2]} intensity={1.5} />
        <directionalLight position={[-1, -2.2, -4.2]} intensity={2} /> */}
        <directionalLight position={[0.36, -3.12, 3.55]} intensity={1.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI * 4.35 / 10}
        // maxPolarAngle={Math.PI * 4.35 / 10}
        />
      </Canvas>
    </div>
  );
};

export default ModelScene;
