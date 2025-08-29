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
      <div class="container pt-4">
        <h1 class="text-center display-4 mb-4"><strong>SCP React Application</strong></h1>
        <nav class = "d-flex flex-wrap justify-content-center gap-2 mb-4">
        <Menu scps={scps} onSelect={setSelectedSCP}/>
        </nav>
      </div>

      <div class="container p-3 rounded border mt-3 bg-light">
          {selectedSCP ? (
            <SCP selectedSCP={selectedSCP} />
        ) : (
        <p className="text-center text-muted">
          <img src="/SCP-React/images/SCP-Logo.png" class="rounded mx-auto d-block" alt="SCP logo"></img>
          <h1>SPECIAL CONTAINMENT PROCEDURES FOUNDATION</h1>
            <h5 class="text-dark-emphasis">SECURE, CONTAIN, PROTECT</h5>
            <p class="text-light-emphasis">The Foundation is an international secret society, consisting of a scientific research institution with a paramilitary intelligence agency to support their goals. Despite its secretive premise, the Foundation is entrusted by governments around the world to capture and contain various unexplained phenomena that defy the known laws of nature (referred to as “anomalies,” “SCP objects,” “SCPs,” or colloquially “skips”). They include living beings and creatures, artifacts and objects, locations and places, abstract concepts, and incomprehensible entities which display supernatural abilities or other extremely unusual properties. If left uncontained, many of the more dangerous anomalies will pose a serious threat to humans or even all life on Earth. Their existence is hidden and withheld from the general public in order to prevent mass hysteria, and allow human civilization to continue functioning normally.</p>
            <h2 class="text-dark-emphasis">We died in the darkness so you can live in the light</h2>

            </p>
  )}
      </div>
    </>
  )
}

export default App;
