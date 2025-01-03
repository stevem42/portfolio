import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <section id="skills" className="w-full px-2 py-16 scroll-mt-[2rem]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Some of the things I have worked with</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <Skill source="html.png" text="html"></Skill>
          <Skill source="css.png" text="css"></Skill>
          <Skill source="javascript.png" text="javascript"></Skill>
          <Skill source="react.png" text="react"></Skill>
          <Skill source="tailwind.png" text="tailwind"></Skill>
          <Skill source="nextjs.png" text="nextJS"></Skill>
          <Skill source="python.png" text="python"></Skill>
          <Skill source="github1.png" text="github"></Skill>
          <Skill source="node.png" text="node"></Skill>
          <Skill source="postgres.png" text="postgreSQL"></Skill>
          <Skill source="prisma.png" text="prisma"></Skill>
          <Skill source="aws.png" text="aws"></Skill>
        </div>
      </div>
    </section>
  );
};

export default Skills;
