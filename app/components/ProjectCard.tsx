import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  features: string[];
  link: string;
  key: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Sub-components for better modularity
const ProjectImage: React.FC<{ image: string; title: string; category: string }> = ({ 
  image, 
  title, 
  category 
}) => (
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

const ProjectFeatures: React.FC<{ features: string[] }> = ({ features }) => (
  <div className="mb-4">
    <h4 className="text-blue-600 font-semibold mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
      {features.map((feature, i) => (
        <li key={`feature-${i}`}>{feature}</li>
      ))}
    </ul>
  </div>
);

const ProjectTechnologies: React.FC<{ tech: string[] }> = ({ tech }) => (
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

const ProjectLink: React.FC<{ link: string; title: string }> = ({ link, title }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${title} project`}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)" 
    }}
    whileTap={{ scale: 0.95 }}
    className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md shadow-blue-500/20 transition-all"
  >
    View Project
    <span aria-hidden="true">→</span>
  </motion.a>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <p className="text-gray-600 mb-4">{project.description}</p>

          {/* Features */}
          <ProjectFeatures features={project.features} />

          {/* Technologies */}
          <ProjectTechnologies tech={project.tech} />
        </div>

        {/* Project Link aligned to the bottom */}
        <ProjectLink link={project.link} title={project.title} />
      </div>
    </motion.article>
  );
};
