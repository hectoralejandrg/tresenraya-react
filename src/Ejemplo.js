import { useState } from "react";

const Ejemplo = () => {
  const [color, setColor] = useState("purple");
  return (
    <div
      style={{ width: 160, height: 160, background: color }}
      onMouseOver={() => setColor("black")}
      onMouseLeave={() => setColor("purple")}
    >
      a
    </div>
  );
};
export default Ejemplo