import { useContext } from "react";
import { CardDataContext } from "../contexts/CardData";


export function useCardData() {
    const context = useContext(CardDataContext);
    if (!context) {
      throw new Error('useCardDataContext must be used within a CardDataProvider');
    }
    return context;
  }