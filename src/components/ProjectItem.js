import React from "react";

function ProjectItem({ name, about, technologies }) {

  const sepProj = technologies.map((tech)=>{
    // console.log(tech)
    return <span key={tech}> {tech} </span> 
    //where is the key passed in and how since there is no unique ID
    
  })

  

  return (

    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
         {sepProj}
      </div>
    </div>
  );
}

export default ProjectItem;
