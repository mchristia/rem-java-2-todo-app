import "./App.css";
import styled from "styled-components/macro";
import axios from "axios";

function App() {
  // const Headline = styled.h1`
  //   background-color: antiquewhite;
  // `;

    const Gallery = styled.section`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: fit-content();
      background-color: antiquewhite;
    `;

  return (
    <div className="App">
      <header className="App-header">
          <p>Hallo Welt</p>
      </header>
        <Gallery>

        </Gallery>


    </div>
  );
}

export default App;
