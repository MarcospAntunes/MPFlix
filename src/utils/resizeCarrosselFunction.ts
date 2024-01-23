interface ResizeCarrosselWidthProps {
    setLarguraDaTela: React.Dispatch<React.SetStateAction<number>>
    carrossel: React.MutableRefObject<any>
    useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
}

function ResizeCarrosselWidth({setLarguraDaTela, carrossel, useEffect}: ResizeCarrosselWidthProps) {
    useEffect(() => {
        const handleResize = () => {
          setLarguraDaTela(window.innerWidth);
        };
    
        const handleMutation = () => {
        };
    
        const resizeObserver = new ResizeObserver(handleMutation);
    
        window.addEventListener('resize', handleResize);
        resizeObserver.observe(carrossel.current);
    
        return () => {
          window.removeEventListener('resize', handleResize);
          resizeObserver.disconnect();
        };
      });
}

function handleScroll(offset: number, carrossel: React.MutableRefObject<any>) {
  carrossel.current.scrollBy({ left: offset, behavior: 'smooth' })
}

export {ResizeCarrosselWidth, handleScroll}