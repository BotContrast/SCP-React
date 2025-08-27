function Menu({scps, onSelect})
{
    return(
        <ul>
            {
                scps.map(
                    (scp, index) => (
                        <li key={index} onClick={()=>onSelect(scp)}>
                            {scp.item}
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Menu;