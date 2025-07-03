import { useState } from "react"

export default function Cart( {data}){
    const [selectRegion, setSelectRegion] = useState("All");

    const handleChangeRegion = (e) => {
        setSelectRegion(e.target.value);
    }
    const filterRegion = selectRegion === "All" ? data : data.filter(x => x.region === selectRegion);
    return(
        <>
            <div className="filterColumn">
                <label htmlFor="filterSelect">Country Filter</label>
                <select id="filterSelect" value={selectRegion} onChange={handleChangeRegion}>
                    <option value="All">All</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Americas">Americas</option>
                </select>
            </div>
            <h1>Country List</h1>
            <div className="cards">
                {filterRegion.map((item, i) => 
                    <div className="card" key={i}>
                        <div className="card-title">{item.name.common}</div>
                        <div><b>Population : </b> {item.population}</div>
                        <div><b>Region : </b> {item.region}</div>
                        <div><b>Capital : </b> {item.capital}</div>
                        <div className="flag"><b>Flag : </b> {item.flags.svg ? <img width="40" src={item.flags.svg} alt={item.flags.alt ? item.flags.alt : "" } /> : item.flag}</div>
                    </div>
                )}
            </div>
        </>
    )
}