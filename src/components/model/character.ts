import { FiltersType } from "./filters";

export interface CharacterInfo {
    name: string,
    gender: string,
    id: number,
    status: string,
    species: string,
    image: string,
    origin: {
        name: string
    },
    location: {
        name: string
    }
}

export interface RightPaneProps {
    charactersData: CharacterInfo[];
    showLoader: boolean;
    filters: FiltersType[];
    searchCharacters: (data: CharacterInfo[]) => void;
    updateSorting: (data: CharacterInfo[]) => void
}
