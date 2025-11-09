import { createContext, ReactNode, useState, useEffect } from "react";

type Theme = 'light' | 'dark';

interface UIContextType {
    hamstate: boolean;
    setHamState: (value: boolean | ((prev: boolean) => boolean)) => void;
    handleClick: () => void;
    isOpen: boolean;
    handleToggle: ()=> void;
    theme: Theme;
    toggleTheme: () => void;
}

export const UIContext = createContext<UIContextType>({
    hamstate: false,
    setHamState: () => {},
    handleClick: () => {},
    isOpen: false,
    handleToggle: ()=>{},
    theme: 'light',
    toggleTheme: () => {}
});

interface Props {
    children: ReactNode;
}

export function UIContextProvider({ children }: Props) {
    const [hamstate, setHamState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>(() => {
        // Get theme from localStorage or default to light
        const savedTheme = localStorage.getItem('theme') as Theme;
        return savedTheme || 'light';
    });

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    function handleClick() {
        setHamState(prev => !prev);
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const contextData: UIContextType = {
        hamstate,
        setHamState,
        handleClick,
        isOpen,
        handleToggle,
        theme,
        toggleTheme
    };

    return (
        <UIContext.Provider value={contextData}>
            {children}
        </UIContext.Provider>
    );
}