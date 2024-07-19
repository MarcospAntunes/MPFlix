import { CardDataProps } from "../../interfaces";

interface CardDataContextType {
    clickedCardData: CardDataProps | null;
    setOpenModal: (isOpen: boolean) => void;
    openModal: () => void;
    modalOpen: boolean;
    setClickedCard: (data: CardDataProps | null) => void;
  }

export default CardDataContextType;