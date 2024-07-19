import { createContext, useState } from 'react';
import { CardDataProps } from '../../interfaces';
import CardDataContextType from './CardData.type';

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
