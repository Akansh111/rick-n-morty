import * as React from 'react';
import { speciesFilters, genderFilters, statusFilters } from '../constants';
import { FilterContainer } from './FilterContainer';
import './LeftPane.css';

export const LeftPane = () => {

    return (
        <>
            <div className="left-pane-header">
                Filters
            </div>
            <div className="filter-container">
                <FilterContainer filter={speciesFilters} />
            </div>
            <div className="filter-container">
                <FilterContainer filter={genderFilters} />
            </div>
            <div className="filter-container">
                <FilterContainer filter={statusFilters} />
            </div>
        </>
    )
}