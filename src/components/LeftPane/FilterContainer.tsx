import * as React from 'react';
import { FiltersType, FilterTypeProps } from '../model'
import InputGroup from 'react-bootstrap/InputGroup';

export const FilterContainer = (props: FilterTypeProps) => {
    const { filter, selectedFilters } = props;

    const [species, setSpecies] = React.useState<FiltersType[]>([]);
    const [gender, setGender] = React.useState<FiltersType[]>([]);
    const [status, setStatus] = React.useState<FiltersType[]>([]);
    const [selectedCheckbox, setSelectedCheckbox] = React.useState<FiltersType[]>([]);

    const handleCheckboxChange = (e: any, filterData: FiltersType) => {
        let tempFilter = [...selectedCheckbox];
        if (selectedCheckbox.includes(filterData)) {
            tempFilter.splice(tempFilter.indexOf(filterData), 1);
        } else {
            tempFilter = [...tempFilter, filterData];
        }
        setSelectedCheckbox(tempFilter)
    }

    React.useEffect(() => {
        selectedFilters(selectedCheckbox);
    }, [selectedCheckbox]);

    React.useEffect(() => {
        let speciesTemp = [...species];
        let genderTemp = [...gender];
        let statusTemp = [...status];
        filter.forEach((el: FiltersType) => {
            if (el.type === 'Species') {
                speciesTemp = [...speciesTemp, el];
            } else if (el.type === 'Gender') {
                genderTemp = [...genderTemp, el];
            } else if (el.type === 'Status') {
                statusTemp = [...statusTemp, el];
            }
        })
        setSpecies(speciesTemp);
        setGender(genderTemp);
        setStatus(statusTemp);
    }, [])

    const renderFilters = (filterType: FiltersType[]) => {
        return (
            filterType && filterType.length && filterType.map((filterData: FiltersType, i: number) => {
                return (
                    <>
                        <div className="filter-list" key={i}>
                            <InputGroup>
                                <InputGroup.Prepend className="filter-text">
                                    <InputGroup.Checkbox
                                        aria-label="Checkbox for selecting filter"
                                        onChange={(e) => handleCheckboxChange(e, filterData)}
                                        value={filterData.value}
                                    />
                                </InputGroup.Prepend>
                                {filterData.value}
                            </InputGroup>
                        </div>
                    </>

                )
            })
        )
    }


    const speciesFilterList = renderFilters(species);
    const genderFilterList = renderFilters(gender);
    const statusFilterList = renderFilters(status);

    return (
        <>
            <div className="filter-title">
                {'Species'}
            </div>
            {speciesFilterList}
            <div className="filter-title">
                {'Gender'}
            </div>
            {genderFilterList}
            <div className="filter-title">
                {'Status'}
            </div>
            {statusFilterList}
        </>
    )
}