import { useState } from "react";
import "./bootstrap.css";

const DatabaseDetailForm = () => {
  const [formData, setFormDdata] = useState({});
  const [searchByLocation, setSearchByLocation] = useState(false);
  let [LocationType, setLocationType] = useState("");
  const handleLocationChange = (event) => {
    let check = event.target.value;
    if (check == "Yes") setSearchByLocation(true);
    if (check == "No") {
      setSearchByLocation(false);
      setLocationType("void");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFormDdata({
      ...formData,
      [event.target.getAttribute("name")]: event.target.value,
      location: "",
    });
  };

  const handleSubmit = () => {
    if (formData["Longitude"] && formData["Latitude"]) {
      formData[
        "location"
      ] = `[${formData["Latitude"]},${formData["Longitude"]}]`;
    } else if (formData["Address"]) {
      formData["location"] = `"${formData["Address"]}"`;
    }
    // axios
    //   .post("http://localhost:8000/AddTeamData", { teamFormData })
    //   .then((response) => console.log(response))
    //   .then((err) => console.log(err));
  };

  const handleLocationTypeChange = (event) => {
    setLocationType(event.target.value);
  };

  return (
    <div>
      <div className="container mt-4">
        <h1 id="title" className="text-center">
          Enter Details
        </h1>
        <div className="form-wrap mt-5">
          <form id="survey-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">Database Name</label>
                  <select
                    name="DatabaseName"
                    id="DatabaseName"
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="CCAD">CCAD</option>
                    <option value="RMS">RMS</option>
                    <option value="CAD">CAD</option>
                    <option value="UDT">UDT</option>
                    <option value="FI">FI</option>
                    <option value="AFDR">AFDR</option>
                    <option value="ALPR">ALPR</option>
                    <option value="CITATION">CITATION</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">Table Name</label>
                  <input
                    type="text"
                    name="TableName"
                    id="TableName"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Table Name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">Response Format</label>
                  <select
                    name="ResponseFormat"
                    id="ResponseFormat"
                    onChange={handleChange}
                    placeholder="Response Format"
                    className="form-control"
                    required
                  >
                    <option value="html">html</option>
                    <option value="JSON">JSON</option>
                    <option value="xml">xml</option>
                    <option value="csv">csv</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">Key</label>
                  <input
                    type="text"
                    name="Key"
                    id="Key"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Keep empty to return the entire table"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">Search by Location</label>
                  <select
                    name="SearchByLocation"
                    id="SearchByLocation"
                    onChange={handleLocationChange}
                    className="form-control"
                  >
                    <option value="void">Select an Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              {searchByLocation && (
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="email-label">Location Search Type</label>
                    <select
                      name="SearchByLocation"
                      id="SearchByLocation"
                      onChange={handleLocationTypeChange}
                      className="form-control"
                    >
                      <option value="">Select an Option</option>
                      <option value="address">address</option>
                      <option value="LatLong">(latitude,longitude)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {searchByLocation && LocationType == "LatLong" && (
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="name-label">Latitude</label>
                    <input
                      type="text"
                      name="Latitude"
                      id="Latitude"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Latitude"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="email-label">Longitude</label>
                    <input
                      type="text"
                      name="Longitude"
                      id="Longitude"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Longitude"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {searchByLocation && LocationType == "address" && (
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="name-label">Address</label>
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Address"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">centroid_distance</label>
                  <input
                    type="text"
                    name="centroid_distance"
                    id="centroid_distance"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="centroid_distance"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">start_time</label>
                  <input
                    type="text"
                    name="start_time"
                    id="start_time"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="start_time"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label">end_time</label>
                  <input
                    type="text"
                    name="end_time"
                    id="end_time"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="end_time"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">page_start</label>
                  <input
                    type="text"
                    name="page_start"
                    id="page_start"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="page_start"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label">page_size</label>
                  <input
                    type="text"
                    name="page_size"
                    id="page_size"
                    onChange={handleChange}
                    className="form-control"
                    placeholder="page_size"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-primary btn-block"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDetailForm;
