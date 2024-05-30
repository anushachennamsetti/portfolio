import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";
import { projects2 } from "../Constants/constants"; // Import the projects2 array

const Projects = () => {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[90%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <Works />

        <div className="w-full">
          <SectionTitle title="ACHIEVEMENT" subtitle="What I have achieved" />
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
          {projects2.map((project, index) => (
            <div className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-full md:w-[30%] lg:w-[23%]" key={index}>
              <img src={project.image} alt={project.name} className="w-full h-auto md:h-[200px] object-cover rounded-lg" />
              <div className="mt-3">
                <h3 className="text-white font-bold text-xl">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px] leading-snug">{project.description}</p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <a className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center" href={project.demo_link} target="_blank" rel="noopener noreferrer">View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
