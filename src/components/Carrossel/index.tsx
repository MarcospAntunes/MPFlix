import { motion } from 'framer-motion'
import styles from './Carrosell.module.css'
import { useEffect, useRef, useState } from 'react'
import BotaoCarrossel from '../BotaoCarrossel'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { ContainerDivParaTituloDosVideos } from '../Containers/ContainerDiv'

function Carrossel( {children}: any ) {
    const carrosel = useRef<any>()
    const [width, setWidth] = useState<number>(0)
     useEffect(() => {
        
        setTimeout(() => setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth), 500 ) 
    }, [])

    function ParaADireita(e: Event) {
        e.preventDefault()
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
        useEffect(() => {
        
            setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth) 
        }, [])
    
    }

    function ParaAEsquerda(e: Event) {
        e.preventDefault()
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
        useEffect(() => {
        
            setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth) 
        }, [])
    
    }
    

    return (
        <>
            <ContainerDivParaTituloDosVideos>
                <h1 style={{marginTop:"10px"}}>Trending</h1>
                <div>
                    <BotaoCarrossel onClick={(e: Event) => ParaAEsquerda(e)}><FaLessThan /></BotaoCarrossel>
                    <BotaoCarrossel onClick={(e: Event) => ParaADireita(e)}><FaGreaterThan /></BotaoCarrossel>
                </div>
            </ContainerDivParaTituloDosVideos>
            
            <motion.div ref={carrosel} className={styles.carrossel} whileTap={{cursor: "grabbing"}}>
                <motion.ul className={`${styles.inner}`}  drag="x" dragConstraints={{right: 0, left: -width}} initial={{x: 100}} animate={{x: 0}} transition={{duration: 0.3}}>
                {children}
                </motion.ul>
            </motion.div>
        </>
        
    )
}

export default Carrossel