import Image from 'next/image';
import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <section className="w-full lg:h-screen p-2">
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
          <Skill source="firebase.png" text="firebase"></Skill>
          <Skill source="github1.png" text="github"></Skill>
          <Skill source="shopify.png" text="shopify"></Skill>
        </div>
      </div>
    </section>
  );
};

export default Skills;
