import { Project } from "./Project"
import { useFetchProjects } from "../hooks"

const CONTENT = {
  title: 'projects'
}

export const Projects = () => {
  const { isLoading, projects } = useFetchProjects()
  if (isLoading) return <div className="loading" />

  return (
    <section className="projects">
      <div className="title">
        <h2>{CONTENT.title}</h2>
        <div className="title-underline" />
      </div>
      <div className="projects-center">
        {projects?.map((project) => (
          <Project key={ project.id } { ...project } />
        ))}
      </div> 
    </section>
  )
}