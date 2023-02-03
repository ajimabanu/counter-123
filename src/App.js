import React, { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 2);
    }, [1000]);
  });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json)
    .then((res) => console.log(res.id));
  return (
    <div className="container">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>counter app</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn1 btn  " onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <button
              className="btn2 btn  mx-5"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button
              className="btn3 btn "
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
