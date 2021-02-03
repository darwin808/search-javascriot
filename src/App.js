import React, { useState } from "react";
import jsondata from "./MOCK_DATA.json";

function App() {
  const [name, setname] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />

      {jsondata
        .filter((e) => e.first_name.toLowerCase().includes(name.toLowerCase()))
        .map((e) => (
          <div key={e.id}>{e.first_name}</div>
        ))}
    </div>
  );
}

export default App;
