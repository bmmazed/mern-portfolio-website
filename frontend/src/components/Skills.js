import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/skills");
        setLoading(false);
        setSkills(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="content">
      <div className="title">
        <span>My Skills</span>
      </div>
      <div className="skillsText">
        <p>
          I have learned programming languages C, C++, Java, and internet
          programming languages JavaScript, PHP with HTML, CSS through my
          university courses. I have done my Research Methodology course on Web
          Design and Development. So I needed to learn many technologies to
          complete my research. Here are my skilled and learned technologies
          showing below.
        </p>
      </div>
      <div className="skills-details">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="boxes">
            {skills.map((skill) => (
              <div key={skill._id} className="box">
                <div className={skill.icName}>
                  <img src={skill.icon} alt={skill.topic}></img>
                </div>
                <div className={skill.tcName}>{skill.topic}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
