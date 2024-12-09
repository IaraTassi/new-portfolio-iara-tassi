import React, { useState } from "react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Spiderman",
    image: "../../public/assets/spiderman.png",
    description:
      "Este é o repositório do projeto Spiderman Multiverso, desenvolvido durante uma live no Youtube em parceria com a DIO.Com este projeto aprendemos a trabalhar com os principais efeitos de CSS e a explorar o máximo das animações para construir um Layout rico baseado no universo do Spiderman.",
    githubLink: "https://github.com/IaraTassi/spiderman-multiverso",
    projectLink: "https://spiderman-multiverso-five.vercel.app/",
  },
  {
    id: 2,
    title: "Barbearia",
    image: "../../public/assets/barbearia.png",
    description:
      "Este é um projeto desenvolvido durante o curso da Alura, com algumas alterações pessoais para personalizá-lo e torná-lo único.",
    githubLink: "https://github.com/IaraTassi/projeto-barbearia",
    projectLink: "https://projeto-barbearia-neon.vercel.app/",
  },
  {
    id: 3,
    title: "Número Secreto",
    image: "../../public/assets/numeroSecreto.png",
    description:
      "Este é o repositório do projeto Jogo do número Secreto, foi feito durante o curso de Lógica de programação: explore funções e listas. Projeto desenvolvido pela Oracle Oracle - One Next Education.",
    githubLink: "https://github.com/IaraTassi/jogo-do-numero-secreto",
    projectLink: "https://jogo-zaktzniyl-iaratassi.vercel.app/",
  },
  {
    id: 4,
    title: "em breve...",
    image: "src/assets/placeholder.png",
    description: "Informações em breve...",
    githubLink: "",
    projectLink: "",
  },
  {
    id: 5,
    title: "em breve...",
    image: "src/assets/placeholder.png",
    description: "Informações em breve...",
    githubLink: "",
    projectLink: "",
  },
  {
    id: 6,
    title: "em breve...",
    image: "src/assets/placeholder.png",
    description: "Informações em breve...",
    githubLink: "",
    projectLink: "",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects-area" className="container py-5">
      <h2 className="main-title-projects text-center mb-5">Meus Projetos</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <div
              className="card project-card text-center"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid polaroid-img"
              />
              <h5 className="mt-3">{project.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content mac-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mac-card-header">
              <span className="mac-btn red"></span>
              <span className="mac-btn yellow"></span>
              <span className="mac-btn green"></span>
            </div>
            <div className="mac-card-body">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid"
              />
              <h3 className="title-card mt-3 text-center">
                {selectedProject.title}
              </h3>
              <p className="description">{selectedProject.description}</p>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-git btn-primary text-center"
              >
                GitHub
              </a>
              <a
                href={selectedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-projects text-center btn-primary"
              >
                link
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
