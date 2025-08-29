import Menu from "./Menu"
import SCP from "./SCP"
import {useEffect, useState} from 'react'
import scpJson from "./data/scp_files.json"

// fetch our data from supplied URL
function fetchData(url){
  return fetch(url)
    .then(response => response.json())
}

function App() {

  const [scps, setSCPS] = useState([]);
  const [selectedSCP, setSelectedSCP] = useState(null);

  useEffect(() => {
    setSCPS(scpJson);
    },
    []
  );

  return (
    <>
      <div class="container">
        <h1 class="text-center display-4 mb-4">SCP React Application</h1>
        <nav class = "d-flex flex-wrap justify-content-center gap-2 mb-4">
        <Menu scps={scps} onSelect={setSelectedSCP}/>
        </nav>
      </div>

      <div class="container p-3 rounded border mt-3 bg-light">
        {selectedSCP && <SCP selectedSCP={selectedSCP} />}
      </div>
    </>
  )
}

export default App;
