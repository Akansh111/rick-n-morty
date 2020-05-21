import { FiltersType } from "../model";

export const speciesFilters: FiltersType[] = [
    {
        type: "Species",
        value: "Human"
    },
    {
        type: "Species",
        value: "Alien"
    },
    {
        type: "Species",
        value: "Mytholog"
    },
    {
        type: "Species",
        value: "Other Species"
    },
]

export const genderFilters: FiltersType[] = [
    {
        type: "Gender",
        value: "Male"
    },
    {
        type: "Gender",
        value: "Female"
    }
]

export const statusFilters: FiltersType[] = [
    {
        type: "Status",
        value: "Dead"
    },
    {
        type: "Status",
        value: "Alive"
    }
]