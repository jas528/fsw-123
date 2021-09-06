import GiphySearch from "./giphysearchapp"
import './App.css';

function App() {

   // Search endpoint example:
   //  https://api.giphy.com/v1/gifs/random?api_key=BtiKnJZ5QHnBRHTGKTFqdeZGhugIKCpZ&tag=cat

   // tag=cat

  return (
    <div>
      This is the React App!
       < GiphySearch initialQuery= "cat"/>

    </div>
  );
}

export default App;
