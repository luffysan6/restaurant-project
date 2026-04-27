// import { useState } from 'react'

import { useState } from "react";
import Wall from "./Pages/Wall";
import Button from "./Pages/Button";

function App() {
  // const [count, setCount] = useState(0)
  const [data, setdata] = useState("Helloooo World");
  return (
    <>
      {/* <Wall data={data} /> */}
      <Button />
    </>
  );
}

export default App;
