import * as React from 'react';
import { filters } from '../constants';
import { FilterContainer } from './FilterContainer';
import './LeftPane.css';
import { FiltersType } from '../model';

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