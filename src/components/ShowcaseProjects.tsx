import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import classNames from 'classnames';
import * as React from 'react';

import showcaseProjects from './showcase-projects.json';

interface ShowcaseProjectsProps {
  className?: string;
}

export const ShowcaseProjects = ({ className }: ShowcaseProjectsProps) => {
  const { withBaseUrl } = useBaseUrlUtils();
  const containerClassName = classNames(className, 'ShowcaseProjects');
  return (
    <div className={containerClassName}>
      <div className="mt-8 grid grid-cols-4 gap-0.5 md:grid-cols-6 lg:mt-0 lg:grid-cols-8">
        {showcaseProjects.map(({ name, href, image }) => (
          <div
            key={href}
            className="col-span-1 flex justify-center py-2 px-2 text-center"
          >
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              alt={`Discover DocSearch on the ${name} documentation`}
            >
              <img
                className="inline-block h-10 w-10"
                src={withBaseUrl(image)}
                alt={`Discover DocSearch on the ${name} documentation`}
              />
              <div className="text-description uppercase text-xs py-2 font-semibold">
                {name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseProjects;
