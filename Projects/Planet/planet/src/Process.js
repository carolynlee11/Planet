import React from 'react';
import './Process.css';

function Process() {
  const items = [
    {
      title: "A1: Needfinding",
      links: [
        { label: "PDF", url: 'Assignments/A1.pdf' },
        { label: "PPTX", url: 'Assignments/A1.pptx' }
      ]
    },
    {
      title: "A2: POVs, HMWs, and Experience Prototypes",
      links: [
        { label: "PDF", url: "Assignments/A2.pdf" },
        { label: "PPTX", url: "Assignments/A2.pptx" }
      ]
    },
    {
      title: "A4: Concept Video",
      links: [
        { label: "PDF", url: "Assignments/A4.pdf" },
        { label: "PPTX", url: "Assignments/A4.pptx" },
        { label: "YouTube", url: "https://www.youtube.com/watch?v=-F-jwwRCpN4" },
        { label: "Video", url: "https://drive.google.com/file/d/1PM7kklcBftvgV8SySaiRzrHXF1C336Jn/view?usp=sharing" }
      ]
    },
    {
      title: "A5: Low-fi Prototyping",
      links: [
        { label: "PDF", url: "Assignments/A5.pdf" },
        { label: "PPTX", url: "Assignments/A5.pptx" },
        { label: "Sketching Report", url: "Assignments/SketchingReport.pdf" }
      ]
    },
    {
      title: "A6: Medium-fi Prototyping",
      links: [
        {label: "PDF", url: "Assignments/A6.pdf"},
        {label: "PPTX", url: "Assignments/A6.pptx"},
        {label: "Figma", url: "https://www.figma.com/proto/9hwMPO2lph9sZswtvlreY2/Planet-Med-Fi-Prototype?node-id=0-1&t=5t9ni8WFuaHHcPs0-1"},
        {label: "Read Me", url: "Assignments/PlanetREADME.pdf"}
      ]
    },
    {
      title: "A8: Hi-fi Prototyping",
      links: [
        {label: "PDF", url: "Assignments/A8.pdf"},
        {label: "PPTX", url: "Assignments/A8.pptx"},
        {label: "Prototype", url: "exp://u.expo.dev/83507517-fd0b-48b0-aef2-c1dcb7db0570/group/11ef3c02-d1ad-4b36-b0c0-782ff2aa9bd3"},
        {label: "Read Me", url: "Assignments/HifiPlanetREADME.pdf"}
      ]
    },
    {
      title: "A9: Heuristic Evaluation Synthesis",
      links: [
        {label: "PDF", url: "Assignments/A9.pdf"},
        {label: "XLSX", url: "Assignments/A9.xlsx"}
      ]
    },
    {
      title: "A10: Poster, Pitch, & Demo Video",
      links: [
        {label: "Pitch Slide (PDF)", url: "Assignments/PitchSlide.pdf"},
        {label: "Pitch Slide (Source)", url: "https://www.canva.com/design/DAGYHczYcCE/U6Q5kUFKuvIVU3_esOu5yw/edit?utm_content=DAGYHczYcCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
        {label: "Poster (PDF)", url: "Assignments/PlanetPoster.pdf"},
        {label: "Poster (Source)", url: "https://www.canva.com/design/DAGX_Oed_nY/sss21C9qWdqig4LtkIEuXA/view?utm_content=DAGX_Oed_nY&utm_campaign=designshare&utm_medium=link&utm_source=editor"},
        {label: "Pitch Script", url: "Assignments/PitchScript.pdf"},
        {label: "Youtube", url: "https://www.youtube.com/watch?v=j_qaeIyMq_U"},
        {label: "Video", url: "https://drive.google.com/file/d/1dr79yfnMffks4cJFlmODWo-FaarLKLCG/view?usp=sharing"},

      ]
    },
    {
      title: "A11: Final Report",
      links: [
        {label: "PDF", url: "https://drive.google.com/file/d/1bb-6NOvfKp-oaAjxHxfXbe1CabmYzoW-/view?usp=sharing"},
        {label: "DOCX", url: "https://docs.google.com/document/d/1KFWEpHFvqpiXZveJIxgsB39HFyLQuHrdvBRAeuBz_gk/edit?usp=sharing"},
      ]
    }
  ];

  return (
    <section id="Process">
      <div className="process-grid">
        {items.map((item, index) => (
          <div className="process-card" key={index}>
            <h3>{item.title}</h3>
            <div className="process-links">
              {item.links.map((link, i) => (
                <a href={link.url} key={i} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
