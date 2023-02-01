import Link from "next/link"
import Image from "next/image"
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg"
import Projectitem from "components/Projectitem"

const Projects = () => {
  return (
    <div className="w-ful">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="p-4 text-xl tracking-widestuppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="p-4">What I've Build</h2>
        <div className="grid md:grid-cols-2 gap-8">

        <ProjectItem />

        </div>
      </div>
    </div>
  );
}

export default Projects;
