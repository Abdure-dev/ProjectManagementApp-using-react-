import NewProjects from "./components/NewProjects.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectSideBar.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddproject(projectData) {
    const projectId = Math.random();
    setProjectState((prevState) => {
      const newProejct = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProejct],
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleAddproject} onCancel={handleCancelProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectproject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
