import { createContext, ReactNode, useContext, useState } from "react";


interface SelectedTimeProviderProps {
    children: ReactNode;
}

interface UseSelectedTimeContextData {
    selectedTime?: string;
    setSelectedTime: (newSelectedTime: string) => void;
}

const SelectedTimeContext = createContext<UseSelectedTimeContextData>({} as UseSelectedTimeContextData);

export function SelectedTimeProvider({ children }: SelectedTimeProviderProps) {
    const [selectedTime, setSelectedTime] = useState<string>();



    return (
        <SelectedTimeContext.Provider value={{ selectedTime, setSelectedTime }} >
            {children}
        </SelectedTimeContext.Provider>
    )
}
export function useSelectedTime() {
    const context = useContext(SelectedTimeContext);
    return context;
}