import Image from 'next/image';
import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-2 py-16 scroll-mt-[2rem] md:h-screen"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill source="html.png" text="html"></Skill>
          <Skill source="css.png" text="css"></Skill>
          <Skill source="javascript.png" text="javascript"></Skill>
          <Skill source="react.png" text="react"></Skill>
          <Skill source="tailwind.png" text="tailwind"></Skill>
          <Skill source="nextjs.png" text="nextJS"></Skill>
          <Skill source="python.png" text="python"></Skill>
          <Skill source="github1.png" text="github"></Skill>
          <Skill source="node.png" text="node"></Skill>
          <Skill source="bootstrap.png" text="bootstrap"></Skill>
          <Skill source="mongo.png" text="mongo"></Skill>
          <Skill source="postgres.png" text="postgreSQL"></Skill>
          <Skill source="prisma.png" text="prisma"></Skill>
        </div>
      </div>
    </section>
  );
};

export default Skills;
