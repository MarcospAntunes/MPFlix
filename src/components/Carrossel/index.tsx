import { motion } from 'framer-motion';
import styles from './Carrossel.module.css';
import { useEffect, useRef, useState } from 'react';
import {BotaoCarrossel, Card, ContainerDivParaTituloDosVideos } from '../index';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { ResizeCarrosselWidth, handleScroll } from '../../utils';
import CarrosselProps from './Carrossel.type';
import { movie } from '../../interfaces';

function Carrossel({ secao, data }: CarrosselProps) {
  const carrossel = useRef<any>();
  const [width, setWidth] = useState<number>(0);
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  ResizeCarrosselWidth({setLarguraDaTela, useEffect})

  useEffect(() => {
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  });

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
          <ul className={`${styles.inner}`}>
            {data.map((movie: movie, index) => (
              <Card
                key={`${movie.id}-${index}`}
                id = {movie.id}
                genre_ids = {movie.genre_ids}
                poster = {movie.poster_path}
                title = {movie.title}
                release_date = {movie.release_date}
                overview = {movie.overview}
                vote_average = {movie.vote_average}
              /> 
            ))}
            </ul>
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
            {data.map((movie: movie, index) => (
              <Card
                key={`${movie.id}-${index}`}
                id = {movie.id}
                genre_ids = {movie.genre_ids}
                poster = {movie.poster_path}
                title = {movie.title}
                release_date = {movie.release_date}
                overview = {movie.overview}
                vote_average = {movie.vote_average}
              /> 
            ))}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}

export default Carrossel;
