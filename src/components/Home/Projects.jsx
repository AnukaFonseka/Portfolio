import React from 'react'
import project1 from '../../assets/images/project-1.png'

const projects = [
  {name: "Book Store", disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. raesentium?", img: project1},
  {name: "Book Store", disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. raesentium?", img: project1},
  {name: "Book Store", disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. raesentium?", img: project1},
]

function Projects() {
  return (
    <section className="relative flex flex-col items-center justify-center md:justify-start bg-fixed bg-cover bg-center py-10 px-40">
        <div className='flex w-full'>
            <div className='w-1/2'>
                <p className="text-deep-blue text-base md:text-lg lg:text-xl leading-relaxed">My Work</p>
                <h2 className="text-4xl md:text-5xl font-bold text-deep-blue tracking-wider">Recent Projects</h2>
            </div>
            <div className='w-1/2 flex justify-end items-center '>
                <button className='bg-primary text-white rounded-md px-3 py-3 outline-none hover:bg-deep-blue'>View More</button>
            </div>
        </div>
        <div className='flex w-full py-4'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
    </section>
  )
}

//Project Card Component
function ProjectCard({project}) {
  return(
    <div className='w-1/3 shadow-md rounded-md mx-3'>
      <img className='rounded-md' src={project.img} alt="project image"/>
      <div className='p-4'>
        <h2 className='text-xl font-bold text-deep-blue tracking-wide'>
          {project.name}
        </h2>
        <p className="text-deep-blue text-base md:text-lg leading-relaxed">{project.disc}</p>
      </div>
    </div>
  )
}

export default Projects

