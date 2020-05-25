export interface FiltersType {
    type: string,
    value: string
}

export interface FilterTypeProps {
    filter: FiltersType[],
    selectedFilters: (filters: FiltersType[]) => void;
}