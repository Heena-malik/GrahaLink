import { useState } from "react";
import "../Components/FreeKundli.css";

export default function FreeKundli() {
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
    <div>
      <div className="kundli-wrapper">
        <p>
          Kundli, also known as Kundali, is one of the most important charts in
          Indian astrology (Vedic astrology). This Kundali chart is prepared
          according to the date of birth, time of birth and place of birth of a
          person.
        </p>

        <h1 className="kundli-title">Kundli – Free Kundali Online</h1>

        <form className="kundli-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="row-grid">
            <input
              type="number"
              name="day"
              placeholder="Day"
              value={formData.day}
              onChange={handleChange}
            />
            <input
              type="number"
              name="month"
              placeholder="Month"
              value={formData.month}
              onChange={handleChange}
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>

          <div className="row-grid">
            <input
              type="number"
              name="hours"
              placeholder="Hours"
              value={formData.hours}
              onChange={handleChange}
            />
            <input
              type="number"
              name="minutes"
              placeholder="Minutes"
              value={formData.minutes}
              onChange={handleChange}
            />
            <input
              type="number"
              name="seconds"
              placeholder="Seconds"
              value={formData.seconds}
              onChange={handleChange}
            />
            <select
              name="ampm"
              value={formData.ampm}
              onChange={handleChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <div className="form-group">
            <label>Birth Place</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            GET KUNDLI
          </button>
        </form>
      </div>

      <div>
        <h1>GET KUNDLI Online Free Kundli Software </h1>
        <p></p>
      </div>
    </div>
  );
}