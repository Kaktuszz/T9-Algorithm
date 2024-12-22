import { useEffect, useState, useRef } from "react";
import "./App.css";
import { MainInput } from "./components/MainInput/MainInput";
import { Box } from "./components/Box/Box";
import { l49 } from "./components/algorithms/algorithms";

function App() {
  const [listener, setListener] = useState("");
  const [words, setWords] = useState([]);
  const [wordId, setWordId] = useState(0);
  const previousHashCount = useRef(0); // Use a ref to persist the previous hash count

  // console.log(l49("222222"))
  const wordsHandler = () => {
    setWords(l49(listener));
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!listener.includes("#")) {
        wordsHandler();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [listener]);

  useEffect(() => {
    const hashCount = (str) => (str.match(/#/g) || []).length;
    let currentHashCount = hashCount(listener);
    setWordId((previousHashCount.current = currentHashCount));
  }, [listener]);

  return (
    <>
      <h1 className="wordShow">
        {words.length !== 0 ? <Box>{words[wordId]}</Box> : <Box> {" "} </Box>}
      </h1>
      <MainInput setListener={setListener} value={listener} />
    </>
  );
}

export default App;
