import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import CreateTaskForm from "./components/CreateTaskForm";
import CreateProjectForm from "./components/CreateProjectForm";
import ProjectSelector from "./components/ProjectSelector";
import "./App.css";
import { getProjects } from "./api/projects";
import type { Project } from "./models/project";
import api from "./api/api";
import type { Task } from "./models/task";


function App() {
  const [projectId, setProjectId] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshProjects, setRefreshProjects] = useState({});
  const [refreshTasks, setRefreshTasks] = useState({});

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    loadProjects();
  }, [refreshProjects]);

  useEffect(() => {
    if (!projectId) {
      setTasks([]);
      return;
    }
    const loadTasks = async () => {
      const res = await api.get(`/Tasks/project/${projectId}`);
      setTasks(res.data);
    };
    loadTasks();
  }, [projectId, refreshTasks]);

  return (
    <div className="app-container">
      <h1>Task Management</h1>
      <div className="columns">
        <div className="column">
          <CreateProjectForm onCreated={() => setRefreshProjects({})} />
          <ProjectSelector
            projects={projects}
            onSelect={setProjectId}
          />
        </div>
        <div className="column">
          {projectId && (
            <>
              <CreateTaskForm
                projectId={projectId}
                onCreated={() => setRefreshTasks({})}
              />
              <TaskList
                tasks={tasks}
                onTaskCompleted={() => setRefreshTasks({})}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
