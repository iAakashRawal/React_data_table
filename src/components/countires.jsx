import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Countires = () => {
  const [users, setUsers] = useState([]);
  const [search, mySearch] = useState("")
  const [filerdata, setfilterdata] = useState([])

  const fetchData = () => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setfilterdata(data);
        //console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    const datat = users.filter(coutry =>{
      return coutry.name.toLowerCase().match(search.toLowerCase())
    })
    setfilterdata(datat)
  },[search])

  const clm = [
    {
      name: "Country Flag",
      selector: (row) => <img src={row.flags.png} width={30} height={30} />,
    },
    {
      name: "Country name",
      selector: (row) => row.name,
    },
    {
      name: "Country capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country region",
      selector: (row) => row.region,
    },
    {
      name: "Country population",
      selector: (row) => row.population,
    },
  ];
  return (
    <DataTable
      title={"Countires Details"}
      columns={clm}
      data={filerdata}
      pagination
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="580px"
      subHeader
      subHeaderComponent ={
        <input
        type={"text"}
        className="form-control w-25"
        placeholder="Search Country"
        value={search}
        onChange={(e)=>{mySearch(e.target.value)}}
        />
      }
    />
  );
};

export default Countires;
