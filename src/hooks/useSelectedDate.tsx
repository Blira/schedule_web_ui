import { createContext, ReactNode, useContext, useState } from "react";


interface SelectedDateProviderProps {
    children: ReactNode;
}

interface SelectedDateContextData {
    selectedDate?: Date;
    setSelectedDate: (newSelectedDate: Date) => void
}

const SelectedDateContext = createContext<SelectedDateContextData>({} as SelectedDateContextData);

export function SelectedDateProvider({ children }: SelectedDateProviderProps) {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
        <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </SelectedDateContext.Provider>
    )
}

export function useSelectedDate() {
    const context = useContext(SelectedDateContext);
    return context;
}