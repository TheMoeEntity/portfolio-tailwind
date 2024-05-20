// context/SectionContext.tsx
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { SectionType, SectionContextType, ActiveSectionProviderType } from '../types';

const defaultState = {
    section: 'home' as SectionType,
    setSection: () => { },
} as SectionContextType;

export const SectionContext = createContext<SectionContextType>(defaultState);

export const SectionProvider = ({ children }: ActiveSectionProviderType) => {
    const [section, setSection] = useState<SectionType>('home');

    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    );
};
