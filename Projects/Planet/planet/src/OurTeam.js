import React from 'react';
import './OurTeam.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Kristine Ma",
    role: "UI/UX Designer + Developer",
    image: './Kristine.png',
    linkedin: "https://www.linkedin.com/in/kristine-ma",
  },
  {
    name: "Carolyn Lee",
    role: "UI/UX Designer + Developer",
    image: './Carolyn.jpeg',
    linkedin: "https://www.linkedin.com/in/carolyn-lee-266991186/",
  },
  {
    name: "Lucas Wang",
    role: "UI/UX Designer + Developer",
    image: './Lucas.jpeg',
    linkedin: "https://www.linkedin.com/in/lucas-wang-3160b720a/",
  },
  {
    name: "Evelyn Song",
    role: "User Researcher + UI/UX Designer",
    image: "./Evelyn.png",
    linkedin: "https://www.linkedin.com/in/evelyn-jy-song/",
  },
];

function OurTeam() {
  return (
    <section id="OurTeam">
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-circle">
              <img src={member.image}/>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
