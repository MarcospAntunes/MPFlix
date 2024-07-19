interface ResizeCarrosselWidthProps {
  setLarguraDaTela: React.Dispatch<React.SetStateAction<number>>;
  useEffect: (
    effect: React.EffectCallback,
    deps?: React.DependencyList | undefined
  ) => void;
}

export default ResizeCarrosselWidthProps;