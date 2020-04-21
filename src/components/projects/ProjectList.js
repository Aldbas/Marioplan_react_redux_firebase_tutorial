import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

// new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
const ProjectList = ({ projects }) => {
    // console.log('TIME: ' + start);
    return (
        <div className="project-list-section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>

                )
            })}
        </div>
    )
}

export default ProjectList;