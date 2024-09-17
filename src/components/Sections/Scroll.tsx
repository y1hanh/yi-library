import {useRef, FC, useEffect, useState, memo} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PortfolioItem} from '../../data/dataDef';
import {isMobile} from '../../config';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import classNames from 'classnames';

export const Scroll: FC<{item: PortfolioItem[]}> = memo(({item}) => {
  const ref = useRef(null);
  const linkRef = useRef(null);
  // const { scrollXProgress } = useScroll({ container: ref });
  const [mobile, setMobile] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  useDetectOutsideClick(linkRef, () => setSelectedId(null));

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg> */}
      <ul ref={ref}>
        {item.map((i, index) => (
          <li key={i.title}>
            <motion.div layoutId={index.toString()} onClick={() => setSelectedId(index)}>
              <img src={i.image} alt={i.title} />
            </motion.div>
          </li>
        ))}
        <li></li>
        <li></li>
      </ul>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div layoutId={selectedId.toString()} className={classNames('selected-modal', {[mobile ? '' : 'flex']: true})} ref={linkRef}>
            <img
              className={classNames('object-scale-down',{[mobile ? 'w24' : '']: true}, 'w-3/4')}
              src={item[selectedId].image}
              alt={item[selectedId].title}
              onClick={() => handleClick(item[selectedId].url)}
            />
            <div>
              <div className="flex flex-col gap-y-4 w-full ml-2">
                <h1 className="font-mono text-xl sm:text-sm">{item[selectedId].title}</h1>
                <p className="font-mono sm:text-sm">{item[selectedId].description}</p>
              </div>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="fixed top-0 right-0 text-2xl h-5 w-5 bg-transparent sm:h-6 sm:w-6">
                X
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
