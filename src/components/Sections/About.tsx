import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useState, useRef} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {motion, useAnimate} from 'framer-motion';


const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;



  return (
    <Section className="bg-[#333ca8]" sectionId={SectionId.About}>
        <motion.div
            className="box"
            initial={{ opacity: 0.2, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                restDelta: 0.001,
              },
            }}
        >
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl md:h-60 md:w-60">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
          <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>

              <div className="text-lg text-white">
                {description}
              </div>

            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>
      </motion.div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
