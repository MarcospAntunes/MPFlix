interface ResizeCarrosselWidthProps {
    setLarguraDaTela: React.Dispatch<React.SetStateAction<number>>
    setListaWidth: React.Dispatch<React.SetStateAction<number>>
    carrossel: React.MutableRefObject<any>
    useEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
}

function ResizeCarrosselWidth({setLarguraDaTela, setListaWidth, carrossel, useEffect}: ResizeCarrosselWidthProps) {
    useEffect(() => {
        const handleResize = () => {
          setLarguraDaTela(window.innerWidth);
          setListaWidth(carrossel.current?.scrollWidth || 0);
        };
    
        const handleMutation = () => {
          setListaWidth(carrossel.current?.scrollWidth || 0);
        };
    
        const resizeObserver = new ResizeObserver(handleMutation);
    
        window.addEventListener('resize', handleResize);
        resizeObserver.observe(carrossel.current);
    
        setListaWidth(carrossel.current?.scrollWidth || 0);
    
        return () => {
          window.removeEventListener('resize', handleResize);
          resizeObserver.disconnect();
        };
      }, []);
}

function handleScroll(offset: number, carrossel: React.MutableRefObject<any>) {
    carrossel.current.scrollLeft += offset;
  }

export {ResizeCarrosselWidth, handleScroll}