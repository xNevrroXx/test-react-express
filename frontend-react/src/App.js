import {useEffect, useRef, useState} from "react";
function App() {
  const [data, setData] = useState();
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;

    fetchedRef.current = true;
    async function getData() {
      const response = await fetch("http://govoro4b.beget.tech:8080"); // todo set url of the BACKEND
      const data = await response.json();

      console.log("response: ", data);
      setData(data.message);
    }
    getData();
  }, [])

  return (
      <div className="App">
        <h1>Data from the server is following</h1>
        <h3>message: {data}</h3>
      </div>
  );
}

export default App;
