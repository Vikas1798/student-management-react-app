import React, { useState, useEffect } from "react";
import axios from "axios";//used for fetchong
import { Link } from "react-router-dom";

const Students = () => {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState(datas);

  //new state to catch the error message
  const [error, setError] = useState(false);

  // student searching
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = datas.filter((data) => {
      return data.name.search(value) != -1;
    });
    setFilteredData(result);
  };

  // get json data from json server file i.e db.json
  const loadData = async () => {

    setError(false);
    // try, catch is used to handle error for async, await functions.
    try {
      const result = await axios.get("http://localhost:8000/students");
      setDatas(result.data);
      setFilteredData(result.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  //student deletion with confirmation msg ask to delete
  const deletedata = async (id) => {
    if (window.confirm("Are you sure..! you want to delete student delete")) {
      await axios.delete(`http://localhost:8000/students/${id}`);
      loadData();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <br /> <br /> <br />
          {/* students data */}
          <div className="col-sm-10">
            {/* searching  */}
            <h3 style={{ color: "blue" }}> Search for the Student details </h3>
            <input
              className="form-control"
              type="text"
              placeholder="Search student name"
              onChange={(event) => handleSearch(event)}
            />
            <br /> <br />
            {/* displaying error message on screen or else display json data (conditional rendering)  using ternary operator */}
            {error ? (
              <div style={{ color: `red` }}>
                some error occurred, while fetching data from db.json file
                please check the URL...
              </div>
            ) : (
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* mapping json data one by one */}
                  {filteredData.map((data) => (
                    <tr>
                      <th>{data.id}</th>
                      <td>{data.name}</td>
                      <td>{data.dateOfBirth}</td>
                      {/* checking age of student is less than 10 or not */}
                      {data.age <= 10 ? (
                        <td style={{ color: "red" }}>{data.age}</td>
                      ) : (
                        <td>{data.age}</td>
                      )}
                      <td>{data.gender}</td>
                      <td>
                        {/* edit student details button */}
                        <Link to={`/students/edit/${data.id}`}>
                          <button className="btn btn-primary mr-2">Edit</button>
                        </Link>
                        {/* delete student details button */}
                        <Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => deletedata(data.id)}
                          >
                            Delete
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <br />
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Students;
