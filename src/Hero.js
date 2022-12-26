import React from "react";

function Hero() {
  return (
    <div className="dark:bg-black bg-white flex flex-col justify-center md:flex-row md:items-center md:px-16 max-sm:py-24">
      <MainImage />
      <AboutMe />
    </div>
  );
}

function MainImage() {
  return (
    <div className="flex justify-center md:my-16 md:mx-10">
      <div className="overflow-hidden w-[60vw] h-[60vw] rounded-[50%] border-[20px] border-whitegrey shadow md:w-[300px] md:h-[300px] md:border-[15px]">
        <img src={require("./images/profile.jpg")} alt="profile" />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="h-full md:px-10 md:flex md:flex-col md:items-center md:max-w-2xl">
      <section className="h-full flex justify-center md:flex-col md:content-center">
        <div className="px-[10vw] py-5 text-center md:text-left md:px-0 md:h-auto">
          <h2 className="dark:text-whitegrey text-grey">Student</h2>
          <h1 className="dark:text-white text-3xl font-serif">Vojtěch Kylar</h1>
          <p className="dark:text-white font-sans">
            I'm studying at the <strong>SPŠE & VOŠ in Pardubice</strong> with
            specialization on <strong>IT</strong>. I enjoy programming
            applications in <strong>java</strong> and{" "}
            <strong>React Native</strong>. Right now I'm learning to create
            applications in React with Tailwind. After school I would like to
            become a programmer
          </p>
        </div>
      </section>
      <section className="flex justify-center md:justify-start md:w-full">
        <Button onClick={downloadCV}>Download CV</Button>
        <Button onClick={contact}>Contact</Button>
      </section>
    </div>
  );
}

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      className="dark:text-white px-4 py-1 mx-2 border-[2px] border-blue hover:bg-blue hover:text-white font-serif transition-all duration-300 rounded-[25px] flex justify-center items-center"
    >
      <button>{props.children}</button>
    </div>
  );
}

function downloadCV() {
  var link = document.createElement("a");
  link.setAttribute("download", "");
  link.href = require("./files/cv.txt");
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function contact() {
  alert("Contact redirect working on it");
}
export default Hero;
