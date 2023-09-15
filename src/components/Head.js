import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant.js";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-6"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <div className="flex">
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 rounded-r-full px-5 bg-gray-100">
            🔍
          </button>
          
            <img
              className="h-8 m-5 border round hover:"
              alt="mic"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEX///8AAABxcXGXl5dmZmbu7u4aGhr39/f8/Py2trbh4eG9vb3x8fHp6ekiIiLMzMxNTU2srKzDw8Ojo6NZWVl8fHzb29sxMTE5OTlHR0fU1NSJiYlSUlIREREqKipCQkIRTwJDAAADb0lEQVRoge2bW7uqIBCGIzNExTx2MFf9/3+5thxE3Zo4gq0LvqvsSV+FgRlnpsPBycnpLyugdVR4XpbXdG9y/WwSJJSU3jXYD01SNFJDdsJHtzG61S3aAR2XU+hWZWybffmZYyP0c7HLJvPoVuSLbKv0yxIbIWsj7y+zEfItwR868Icd9uKEc1mZdpwsg1sl2AK80GMjVJhn47su/G7+0TWWmVRuHF7pw4+m2fitD7+b9jBXfTZCV8PwaA3ctGvXXmitPMPw5xp4ZRi+wtjNm/vRwR3cwR3cwR3cwR3cwR3cwf8mPMgzguFwTLIcnA/229fiVwiFh69/Hx/Q12We4n1jGFy80ZfABxeXqmHwWhzAsoKhODuCweUbfQiCU3F2thrOXpEzcQArwcTibJZXW/V+zpIDMp0As7igf6lsDjSlrH+7wMUmigpsBvM1cJb3PvHPPzD2QdSQmvbew7M+O2ltLGj4QQqEi1TImfbuREdN+3sq7haan5HzzNaapw9nFipXWgaEy8Qfm/RwDvW/2MqWaxOcEBQZ9hdbLSdd9qn9dfziBwmU3fHYuGunnZmty1E/geHyCsyCDrOlxKG4J2n69w1Sl+BnvoXO4YZia0N6lS2Jf7lL8afRyr8Wg1F6wtnKxHnxQMPm+Bx3+yHMpQnJBcOHL17caVK2MLrp2hbMybkTG5W/UG9488ihyxLXm+DKj/OdCjfTVK6Gm1fnAbemvnF3ZbFoPjh2YV2qKLG5xtWZuCzN5zND/xYVLVXeN1DYVHuLoONiomniVoiIRW2E8M1NiaoaqtyuYjIqKD+IDJbUmL+MFLN7QYzaMyipUuaxz2lFVIzYswhDZfxe7fo+vCQemtSlV281Vt7q76vV7KYV9otA0BhigX6uppqRgmvVj/KMVtaGkXOZ0QE/oNnQ3xouoY/Lme+qyEMaxzTMi2q88o13KlHt8DW10KMWaMavnp3+sKtGIFWaLl93CqKFsU8jq21x+YdOnYf5ZomxQm+6Gc/bFDLpyyfHtNeyk6RHYqslalIBpsL8Sor3a7/sJGJZE27bwR3cwR3cwR38K/DAl5Lw7gvbnhV7yVlKxhLdF4lno9lXaaEnz3QL4ED1Z/bmDNBHfbOzf7nYYTN4jiejZqWb1X+TXD42uSeW/0viZ96ssl2DdycnJ139AuULKH0dkoSUAAAAAElFTkSuQmCC"
            />
          
        </div>

        {showSuggestions && (
          <div className="absolute py-2 px-5 bg-white w-[30.8rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
        />
      </div>
    </div>
  );
};

export default Head;
