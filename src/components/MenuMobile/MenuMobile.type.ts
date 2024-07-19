interface MenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface MenuMobileStyledProps {
  isvisible: string | undefined;
}


export type { MenuMobileProps, MenuMobileStyledProps };