import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  let x = 0;
  const ref = useRef(0)
  const [y, setY] = useState(0);
  const i= useRef(null);

  useEffect(()=>{
    i.current =setInterval(()=>{
        // console.log("Namaste hari", Math.random())
    },1000)
    return ()=>clearInterval(i.current)

  },[])
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="border border-black bg-green-100 m-4 px-2"
          onClick={() => {
            x = x + 1;
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let= {x}</span>
      </div>
      <div>
        <button
          className="border border-black bg-green-100 m-4 px-2"
          onClick={() => {
            setY(y+1)
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State= {y}</span>
      </div>
      <div>
        <button
          className="border border-black bg-green-100 m-4 px-2"
          onClick={() => {
            ref.current=ref.current+1
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref= {ref.current}</span>
      </div>
      <button className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg" onClick={()=>{
        clearInterval(i.current)
      }}>Stop printing</button>
    </div>
  );
};

export default Demo2;
