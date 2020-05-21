import * as React from 'react';
import { FiltersType, FilterTypeProps } from '../model'
import InputGroup from 'react-bootstrap/InputGroup';

export const FilterContainer = (props: FilterTypeProps) => {
    const { filter } = props;
    const filterList = filter.map((filterData: FiltersType, index: number) => {
        return (
            <div className="filter-list">
                <InputGroup>
                    <InputGroup.Prepend className="filter-text">
                        <InputGroup.Checkbox aria-label="Checkbox for selecting filter" />
                    </InputGroup.Prepend>
                    {filterData.value}
                </InputGroup>
            </div>
        )
    })

    return (
        <>
            <div className="filter-title">
                {filter[0].type}
            </div>
            {filterList}
        </>
    )
}