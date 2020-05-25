import * as React from 'react';
import { filters } from '../constants';
import { FilterContainer } from './FilterContainer';
import { FiltersType } from '../model';
import './LeftPane.css';


export const LeftPane = ({ selectedFilters }: { selectedFilters: (filters: FiltersType[]) => void }) => {

    return (
        <>
            <div className="left-pane-header">
                Filters
            </div>
            <div className="filter-container">
                <FilterContainer filter={filters} selectedFilters={selectedFilters} />
            </div>
        </>
    )
}