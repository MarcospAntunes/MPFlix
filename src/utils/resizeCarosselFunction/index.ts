interface ResizeCarrosselWidthProps {
    setLarguraDaTela: React.Dispatch<React.SetStateAction<number>>
    useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
}

function ResizeCarrosselWidth({setLarguraDaTela, useEffect}: ResizeCarrosselWidthProps) {
    useEffect(() => {
        const handleResize = () => {
          setLarguraDaTela(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      });
}

function handleScroll(offset: number, carrossel: React.MutableRefObject<any>) {
  carrossel.current.scrollBy({ left: offset, behavior: 'smooth' })
}

export {ResizeCarrosselWidth, handleScroll}