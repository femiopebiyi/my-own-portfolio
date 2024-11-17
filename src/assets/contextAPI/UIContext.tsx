import { createContext, ReactNode, useState } from "react";

interface UIContextType {
    hamstate: boolean;
    setHamState: (value: boolean | ((prev: boolean) => boolean)) => void;
    handleClick: () => void;  // Added handleClick to the interface
    isOpen: boolean;
    handleToggle: ()=> void
}

export const UIContext = createContext<UIContextType>({
    hamstate: false,
    setHamState: () => {},
    handleClick: () => {},     // Added default handleClick
    isOpen: false,
    handleToggle: ()=>{}
});

interface Props {
    children: ReactNode;
}

export function UIContextProvider({ children }: Props) {
    const [hamstate, setHamState] = useState(false);
      const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setHamState(prev => !prev);
    }

      const handleToggle = () => {
    setIsOpen(!isOpen);
  };

    const contextData: UIContextType = {
        hamstate,
        setHamState,
        handleClick,    // Added handleClick to the context data
        isOpen,
        handleToggle
    };

    return (
        <UIContext.Provider value={contextData}>
            {children}
        </UIContext.Provider>
    );
}