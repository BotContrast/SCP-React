import Menu from "./Menu"
import SCP from "./SCP"
import {useEffect, useState} from 'react'

// fetch our data from supplied URL
function fetchData(url){
  return fetch(url)
    .then(response => response.json())
}

function App() {

  const [scps, setSCPS] = useState([]);
  const [selectedSCP, setSelectedSCP] = useState(null);

  useEffect(() => {
      fetchData("https://raw.githubusercontent.com/TuhakarainaB/scp_json/refs/heads/master/scp.json")
      .then(data => setSCPS(data))
    },
    []
  )

  return (
    <>
      <div>
        <Menu scps={scps} onSelect={setSelectedSCP}/>
        <h1>SCP React Application</h1>
        {selectedSCP && <SCP selectedSCP={selectedSCP} />}
      </div>
    </>
  )
}

export default App;
