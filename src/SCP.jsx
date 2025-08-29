function SCP({selectedSCP})
{
    let classStyleAlert = '';

    if (selectedSCP.class === "Euclid") {
        classStyleAlert = "alert alert-danger text-red text-center pt-2";
    }else{
        classStyleAlert = "alert alert-primary text-center pt-2";
    };


    return(
        <div>
            <h2 class="text-center">{selectedSCP.name}</h2>
            {selectedSCP.image ? (
                <img src={`/SCP-React/${selectedSCP.image}`} alt={selectedSCP.name} class="rounded mx-auto img-fluid d-block" />
            ) : (
                <p class="text-center"><em>No image available</em></p>
            )}
            <div class = "pt-2">
            <h3 class={classStyleAlert}>Object class: {selectedSCP.class}</h3>
            </div>
            <div class="p-2 mt-3">
            <p><strong>Description: </strong>{selectedSCP.description}</p>
            </div>
            <div class ="p-2 mt-3">
            <p><strong>Containment: </strong>{selectedSCP.containment}</p>
            </div>
        </div>
    )
}

export default SCP;