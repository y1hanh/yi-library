import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC, memo,useState, useRef, useEffect } from 'react';

import { heroData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const { imageSrc, name, description } = heroData;
  const [typewriteStart, setTypewriteStart] = useState(0);
  const typeWriterRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typewriteStart < description.length) {
        if (typeWriterRef.current) {
          (typeWriterRef.current as HTMLElement).innerHTML += description[typewriteStart]
        }
        setTypewriteStart(typewriteStart + 1);
      } else {
        setTimeout(() => {
          if (typeWriterRef.current) {
            (typeWriterRef.current as HTMLElement).innerHTML = '';
          }
          setTypewriteStart(0);
        }, 2000); 
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typewriteStart, description]);

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-full items-center justify-center ">

        <Image
          alt={`${name}-image`}
          className='min-w-full'
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className=' absolute text-pretty inset-0 flex items-center md:text-3xl text-sm font-bold sm:w-2/5 md:w-3/5 ' >
        <p className='hero-type' ref={typeWriterRef}></p></div>
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

// Add this CSS to your global stylesheet or in a CSS module
<style jsx>{`
  .blinking-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from, to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`}</style>
