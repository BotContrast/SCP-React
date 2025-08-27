function SCP({selectedSCP})
{
    return(
        <div>
            <h2>{selectedSCP.item}</h2>
            <h3>{selectedSCP.class}</h3>
            <p><strong>Description: </strong>{selectedSCP.desc}</p>
            <p><strong>Containment: </strong>{selectedSCP.containment}</p>
        </div>
    )
}

export default SCP;