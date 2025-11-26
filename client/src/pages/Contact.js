import { useState } from "react";
// import "./kundli.css";

export default function Kundli() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    gender: "male",
    day: "",
    month: "",
    year: "",
    hours: "",
    minutes: "",
    seconds: "",
    ampm: "AM",
    birthPlace: "",
    longitudeDegree: "",
    longitudeMinute: "",
    longitudeDirection: "E",
    latitudeDegree: "",
    latitudeMinute: "",
    latitudeDirection: "N",
    timeZone: "5.5",
    ayanamsa: "lahiri",
    houseSystem: "placidus",
    chartStyle: "North_Indian",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Kundli form submitted successfully!");
  };

  return (
    <div className="kundli-wrapper">
      <h1 className="kundli-title">Kundli – Free Kundali Online</h1>

      <form className="kundli-form" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* DOB */}
        <div className="row-grid">
          <input type="number" name="day" placeholder="Day" onChange={handleChange} />
          <input type="number" name="month" placeholder="Month" onChange={handleChange} />
          <input type="number" name="year" placeholder="Year" onChange={handleChange} />
        </div>

        {/* Time */}
        <div className="row-grid">
          <input type="number" name="hours" placeholder="Hours" onChange={handleChange} />
          <input type="number" name="minutes" placeholder="Minutes" onChange={handleChange} />
          <input type="number" name="seconds" placeholder="Seconds" onChange={handleChange} />
          <select name="ampm" onChange={handleChange}>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>

        {/* Birth Place */}
        <div className="form-group">
          <label>Birth Place</label>
          <input type="text" name="birthPlace" onChange={handleChange} />
        </div>

        {/* Advanced Toggle */}
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          {showAdvanced ? "Hide Advanced Settings" : "Show Advanced Settings"}
        </button>

        {/* Advanced Panel */}
        {showAdvanced && (
          <div className="advanced-box">
            <div className="row-grid">
              <input name="longitudeDegree" placeholder="Longitude Degree" onChange={handleChange} />
              <input name="longitudeMinute" placeholder="Longitude Minute" onChange={handleChange} />
              <select name="longitudeDirection" onChange={handleChange}>
                <option value="E">E</option>
                <option value="W">W</option>
              </select>
            </div>

            <div className="row-grid">
              <input name="latitudeDegree" placeholder="Latitude Degree" onChange={handleChange} />
              <input name="latitudeMinute" placeholder="Latitude Minute" onChange={handleChange} />
              <select name="latitudeDirection" onChange={handleChange}>
                <option value="N">N</option>
                <option value="S">S</option>
              </select>
            </div>

            <input
              className="full"
              name="timeZone"
              placeholder="Time Zone"
              onChange={handleChange}
            />

            <select name="ayanamsa" onChange={handleChange}>
              <option value="lahiri">Lahiri</option>
              <option value="krishnamurti">Krishnamurti</option>
            </select>

            <select name="houseSystem" onChange={handleChange}>
              <option value="placidus">Placidus</option>
              <option value="equal_system">Equal System</option>
            </select>

            <select name="chartStyle" onChange={handleChange}>
              <option value="North_Indian">North Indian</option>
              <option value="South_Indian">South Indian</option>
              <option value="East_Indian">East Indian</option>
            </select>
          </div>
        )}

        {/* Submit */}
        <button type="submit" className="submit-btn">
          GET KUNDLI
        </button>
      </form>
    </div>
  );
}