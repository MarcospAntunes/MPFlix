import { createContext, useState } from 'react';
import { CardDataProps } from '../interfaces/cardData';

interface CardDataContextType {
  clickedCardData: CardDataProps | null;
  setOpenModal: (isOpen: boolean) => void;
  openModal: () => void;
  modalOpen: boolean;
  setClickedCard: (data: CardDataProps | null) => void;
}

export const CardDataContext = createContext<CardDataContextType | null>(null);

export function CardDataProvider({ children }: any) {
  const [clickedCardData, setClickedCardData] = useState<CardDataProps | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const setClickedCard = (data: CardDataProps | null) => {
    setClickedCardData(data);
    
  };

  const setOpenModal = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <CardDataContext.Provider value={{ clickedCardData, setClickedCard, setOpenModal, openModal, modalOpen }}>
      {children}
    </CardDataContext.Provider>
  );
}
