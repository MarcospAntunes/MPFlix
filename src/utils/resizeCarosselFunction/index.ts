import ResizeCarrosselWidthProps from "./resizeCarrosselFunction.type";

function ResizeCarrosselWidth({
  setLarguraDaTela,
  useEffect,
}: ResizeCarrosselWidthProps) {
  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
}

function handleScroll(offset: number, carrossel: React.MutableRefObject<any>) {
  carrossel.current.scrollBy({ left: offset, behavior: "smooth" });
}

export { ResizeCarrosselWidth, handleScroll };
