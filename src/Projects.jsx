import { projects } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
function Projects() {
  // console.log(projects);
  return (
    <div className="ml-20 " id="projects">
      <h1 className="text-5xl text-white text-center">
        My Projects<span className="text-orange-400 ">.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-5 p-2 sm:p-12 gap-4 ">
        {projects.map((project) => {
          return (
            <div
              key={projects.id}
              className=" flex flex-col border rounded-2xl p-2 w-fit mx-auto"
            >
              <div className="justify-center flex p-2">
                <img
                  src={project.logo}
                  className="border rounded-2xl w-[280px] h-[280px] object-contain grayscale hover:grayscale-0 bg-white "
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-bold text-2xl font-mono text-orange-400">
                  {project.category}
                </h1>
                <h1 className="text-bold  font-mono text-orange-400">
                  {project.name}
                </h1>
                <div className="flex items-center justify-center flex-wrap max-w-sm gap-2 mt-2">
                  {project.technologies.map((element) => {
                    return (
                      <div
                        key={element}
                        className="max-w-sm items-center justify-center p-2 border rounded-full text-white font-bold hover:text-orange-400 hover:border-orange-400 hover:cursor-pointer"
                      >
                        <span>{element}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2xl"
                      className="my-4 text-white hover:text-orange-400 hover:cursor-pointer"
                    />
                  </a>
                  {project.youtubeLink != null ? (
                    <a href={project.youtubeLink}>
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="2xl"
                        className="my-4 text-white hover:text-orange-400 hover:cursor-pointer"
                      />
                    </a>
                  ) : (
                    <></>
                  )}
                  {project.hostedLink != null ? (
                    <a href={project.hostedLink}>
                      <FontAwesomeIcon
                        icon={faExternalLink}
                        size="2xl"
                        className="my-4 text-white hover:text-orange-400 hover:cursor-pointer"
                      />
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
