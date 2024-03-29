import { useState , useMemo } from "react";
import { findPrime } from "../utils/helper.js";

const Demo = () => {
  
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [value, setValue] = useState(getInitialState);


  const prime = useMemo(() => findPrime(text),[text]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };


 
  return (
    <div
      className={
        "w-96 h-96 m-4 p-2 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime :{prime}</h1>
        <div>
      <select value={value} onChange={handleChange}>
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>{`You selected ${value}`}</p>
    </div>

      </div>
    </div>
  );
};

export default Demo;
