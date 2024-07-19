import { movie } from "../../../interfaces";

interface ModalBannerProps {
  movieNowPlayingData: movie[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export default ModalBannerProps;
