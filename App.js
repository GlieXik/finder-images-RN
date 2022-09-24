import { SafeAreaProvider } from "react-native-safe-area-context";
import { Bar } from "./components/Bar";
import { useState, useEffect } from "react";
import { Gallery } from "./components/Gallery";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState([]);
  const getFromApiAsync = (q) => {
    return axios
      .get(
        `https://pixabay.com/api/?key=28372549-e090c48611b383f38160db719&image_type=photo&orientation=horizontal&safesearch=true&q=${q}&per_page=10`
      )
      .then((response) => {
        setState(response.data.hits);
      })
      .catch((error) => console.error(error))
      .finally(() => console.log("Finally"));
  };

  useEffect(() => {
    if (!query) return;
    getFromApiAsync(query);
  }, [query]);
  console.log(state);
  console.log("====================================");
  console.log(state);
  console.log("====================================");
  return (
    <SafeAreaProvider>
      <Bar setQuery={setQuery}></Bar>
      {state.length > 0 ? <Gallery data={state}></Gallery> : null}
    </SafeAreaProvider>
  );
}
