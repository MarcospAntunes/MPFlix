import { motion } from 'framer-motion';
import styles from './Carrossel.module.css';
import { useEffect, useRef, useState } from 'react';
import BotaoCarrossel from '../BotaoCarrossel';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { ContainerDivParaTituloDosVideos } from '../Containers/ContainerDiv';
import { ResizeCarrosselWidth, handleScroll } from '../../utils/resizeCarrosselFunction';

interface CarrosselProps {
  children: any;
  secao: string;
}

function Carrossel({ children, secao }: CarrosselProps) {
  const carrossel = useRef<any>();
  const [width, setWidth] = useState<number>(0);
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);
  const [listaWidth, setListaWidth] = useState<number>(0);

  ResizeCarrosselWidth({setLarguraDaTela, setListaWidth, carrossel, useEffect})

  useEffect(() => {
    setWidth(listaWidth - carrossel.current?.offsetWidth);
  }, [listaWidth]);

  return (
    <>
      <ContainerDivParaTituloDosVideos>
        <h1 style={{ marginTop: "10px" }}>{secao}</h1>
        <div>
          <BotaoCarrossel
            larguraDaTela={larguraDaTela}
            onClick={() => handleScroll(-carrossel.current.offsetWidth, carrossel)}
          >
            <FaLessThan />
          </BotaoCarrossel>
          <BotaoCarrossel
            larguraDaTela={larguraDaTela}
            onClick={() => handleScroll(carrossel.current.offsetWidth, carrossel)}
          >
            <FaGreaterThan />
          </BotaoCarrossel>
        </div>
      </ContainerDivParaTituloDosVideos>
      {larguraDaTela >= 984 ? (
        <div ref={carrossel} className={styles.carrosselDesktop}>
          <ul className={`${styles.inner}`}>{children}</ul>
        </div>
      ) : (
        <motion.div
          ref={carrossel}
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
