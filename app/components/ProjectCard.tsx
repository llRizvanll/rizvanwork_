/**
 * @fileoverview Project card component that displays individual project information
 * with image, features, technologies, and interactive elements.
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ReactElement } from 'react';

import type { IProject } from '../types';

interface IProjectCardProps {
  project: IProject;
  index: number;
}

interface IProjectImageProps {
  image: string;
  title: string;
  category: string;
}

interface IProjectFeaturesProps {
  features: string[];
}

interface IProjectTechnologiesProps {
  tech: string[];
}

interface IProjectLinkProps {
  link: string;
  title: string;
}

/**
 * ProjectImage component that displays the project thumbnail with overlay information.
 *
 * @param props - The component props
 * @param props.image - The project image URL
 * @param props.title - The project title
 * @param props.category - The project category
 * @returns The ProjectImage component JSX element
 */
const ProjectImage = ({ image, title, category }: IProjectImageProps): ReactElement => (
  <div className="relative h-48 overflow-hidden">
    <Image
      src={image}
      alt={`${title} - ${category} project`}
      fill
      className="object-cover transition-transform duration-300 hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-white/80 text-sm">{category}</p>
    </div>
  </div>
);

/**
 * ProjectFeatures component that displays the key features of the project.
 *
 * @param props - The component props
 * @param props.features - Array of project features
 * @returns The ProjectFeatures component JSX element
 */
const ProjectFeatures = ({ features }: IProjectFeaturesProps): ReactElement => (
  <div className="mb-4">
    <h4 className="text-blue-600 font-semibold mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
      {features.map((feature, i) => (
        <li key={`feature-${i}`}>{feature}</li>
      ))}
    </ul>
  </div>
);

/**
 * ProjectTechnologies component that displays the technologies used in the project.
 *
 * @param props - The component props
 * @param props.tech - Array of technologies used
 * @returns The ProjectTechnologies component JSX element
 */
const ProjectTechnologies = ({ tech }: IProjectTechnologiesProps): ReactElement => (
  <div className="flex flex-wrap gap-2 my-2">
    {tech.map((technology) => (
      <span
        key={technology}
        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100"
        aria-label={`Technology: ${technology}`}
      >
        {technology}
      </span>
    ))}
  </div>
);

/**
 * ProjectLink component that provides a link to view the project.
 *
 * @param props - The component props
 * @param props.link - The project URL
 * @param props.title - The project title
 * @returns The ProjectLink component JSX element
 */
const ProjectLink = ({ link, title }: IProjectLinkProps): ReactElement => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${title} project`}
    whileHover={{
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)',
    }}
    whileTap={{ scale: 0.95 }}
    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md shadow-blue-500/20 transition-all"
  >
    View Project
    <span aria-hidden="true">→</span>
  </motion.a>
);

/**
 * ProjectCard component that displays a complete project card with all information.
 * Includes image, features, technologies, and interactive elements.
 *
 * @param props - The component props
 * @param props.project - The project data to display
 * @param props.index - The index of the project in the grid
 * @returns The ProjectCard component JSX element
 */
export function ProjectCard({ project, index }: IProjectCardProps): ReactElement {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-100/50 flex flex-col"
      role="article"
      aria-labelledby={`project-title-${index}`}
    >
      {/* Project Image */}
      <ProjectImage
        image={project.image}
        title={project.title}
        category={project.category}
      />

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 id={`project-title-${index}`} className="text-xl font-semibold text-gray-800 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

          {/* Project Features */}
          <ProjectFeatures features={project.features} />

          {/* Project Technologies */}
          <ProjectTechnologies tech={project.tech} />
        </div>

        {/* Project Link */}
        <div className="mt-4">
          <ProjectLink link={project.link} title={project.title} />
        </div>
      </div>
    </motion.article>
  );
}

// Legacy default export for backward compatibility
export default ProjectCard;
