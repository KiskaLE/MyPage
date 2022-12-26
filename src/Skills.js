import React from "react";
import skillData from "./data/VojtaSkills";
import starSVG from "./icons/icons8-starburst-shape-64.png";

function Skills() {
  return (
    <div className="dark:bg-black bg-white py-5 px-16 select-none">
      {/* <h1 className="font-serif font-bold text-3xl underline text-blue">
        Skills
      </h1> */}
      <SkillsData />
    </div>
  );
}

function SkillsData(props) {
  const data = skillData.map((data) => (
    <div
      className=" mt-5 py-5 rounded-lg flex flex-col items-center mb-5 md:px-2"
      key={data.id}
    >
      <img src={data.logo} alt="svg logo" />
      <h2 className="dark:text-white text-2xl pb-5">{data.skill}</h2>
      <SkillLevel level={data.level} />
    </div>
  ));

  return (
    <div className="flex justify-center">
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {data}
      </section>
    </div>
  );

  function SkillLevel(props) {
    const balls = [];
    const level = props.level;
    for (let i = 0; i < 10; i++) {
      if (i < level) {
        balls.push(true);
      }
    }
    const Level = balls.map((ball) => <Ball isFull={ball} />);

    return <div className="flex justify-evenly w-full lg:mx-10">{Level}</div>;

    function Ball(props) {
      return (
        <div
          id={props.id}
          // className={`border-[2px] rounded-[50%] w-7 h-7 ${
          //   props.isFull ? "bg-blue" : "bg-white"
          // }`}
        >
          {props.isFull && <img src={starSVG} alt="star" width="35px" />}
        </div>
      );
    }
  }
}

export default Skills;
