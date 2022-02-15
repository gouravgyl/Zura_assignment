import { useCallback, useState } from "react";

export function Searchbar() {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (value) => {
    fetch(`http://localhost:2345/products?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json));
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearInterval(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const optimized = useCallback(debounce(handleChange), []);
  return (
    <>
      <div>
        <input
          style={{ width: "300px", padding: "10px", marginTop: "20px" }}
          type="text"
          placeholder="Search Product"
          onChange={(e) => optimized(e.target.value)}
        />
        <button style={{ width: "100px", padding: "10px", marginTop: "20px" }}>
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <div>
          {suggestions.map((el, i) => (
            <div
              style={{
                // border: "1px solid black",
                width: "450px",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5px",
                zIndex: "100",
              }}
            >
              <span style={{ marginLeft: "30px" }}>
                <img
                  style={{ width: "50px" }}
                  src={el.listOfImages[0]}
                  alt=""
                />
              </span>
              <span style={{ marginLeft: "100px", fontSize: "18px" }}>
                {el.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
