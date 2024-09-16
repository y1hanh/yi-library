import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const { imageSrc, name, description, actions } = heroData;
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-full items-center justify-center ">
        <Image
          alt={`${name}-image`}
          className="h-auto object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />

        {/* <div className="z-10  max-w-screen-lg px-4 lg:px-0 mt-14 mb-14">
          <div className="flex flex-col items-center gap-y-3 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white sm:text-xl lg:text-3xl">{name}</h3>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({ href, text, primary, Icon }) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-pink-500 ring-pink-500' : 'border-white ring-white',
                  )}
                  href={href}
                  target="_blank"
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div> */}

        <div className="absolute z-0 inset-x-0 bottom-6 flex justify-center">
          <a
            className="motion-safe:animate-bounce rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Resume}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
