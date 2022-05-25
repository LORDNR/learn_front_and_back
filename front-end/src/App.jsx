import { useState } from "react";
import PostData from "./components/postdata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PostData />
    </div>
  );
}

export default App;
