import { motion } from 'framer-motion';
import styles from './Carrossel.module.css';
import { useEffect, useRef, useState } from 'react';
import BotaoCarrossel from '../BotaoCarrossel';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { ContainerDivParaTituloDosVideos } from '../Containers/ContainerDiv';

interface CarrosselProps {
  children: any
  secao: string
}

function Carrossel({ children, secao }: CarrosselProps) {
  const carrosel = useRef<any>();
  const [width, setWidth] = useState<number>(0);
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth)
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    };

    window.addEventListener('resize', handleResize);

    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleScroll(offset: number) {
    carrosel.current.scrollLeft += offset;
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }

  return (
    <>
      <ContainerDivParaTituloDosVideos>
        <h1 style={{ marginTop: "10px" }}>{secao}</h1>
        <div>
          <BotaoCarrossel onClick={() => handleScroll(-carrosel.current.offsetWidth)}>
            <FaLessThan />
          </BotaoCarrossel>
          <BotaoCarrossel onClick={() => handleScroll(carrosel.current.offsetWidth)}>
            <FaGreaterThan />
          </BotaoCarrossel>
        </div>
      </ContainerDivParaTituloDosVideos>
      {larguraDaTela >= 984 ? (
        <div ref={carrosel} className={styles.carrosselDesktop}>
          <ul className={`${styles.inner}`}>
            {children}
          </ul>
        </div>
      ) : (
        <motion.div
          ref={carrosel}
          className={styles.carrosselMobile}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.ul
            className={`${styles.inner}`}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}

export default Carrossel;
