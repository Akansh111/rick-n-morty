import * as React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import './RightPane.scss';
import { CharacterCard } from './CharacterCard';
import { CharacterInfo, FiltersType, RightPaneProps } from '../model';

export const RightPane = ({ charactersData, showLoader, filters, searchCharacters, updateSorting }: RightPaneProps) => {

    const [inputSearch, setInputSearch] = React.useState<string>('');

    const handleChange = ((e: any) => {
        setInputSearch(e.target.value);
    })

    const handleSearch = () => {
        const tempSearch = [...charactersData];
        const results = tempSearch.filter((char: CharacterInfo) => {
            return char.name.toLowerCase().includes(inputSearch.toLowerCase());
        })
        searchCharacters(results);
        setInputSearch('');
    }

    const handleOnKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleSort = (type: string) => {
        const tempAsc = [...charactersData];
        tempAsc?.sort((a: CharacterInfo, b: CharacterInfo) => {
            if (type === 'asc') {
                return a.id > b.id ? 1 : -1
            } else {
                return a.id > b.id ? -1 : 1
            }
        })
        updateSorting(tempAsc);
    }
    return (
        <>
            <div className="selected-filters-header">
                {filters && filters.length > 0 ? 'Selected Filters' : ''}
            </div>
            {
                filters && filters.map((el: FiltersType, i: number) => {
                    return (
                        <span className="selected-filter-tag" key={i}>
                            {el.value}
                        </span>
                    )
                })
            }
            <div className="search-n-sort">
                <div className="search">
                    <InputGroup>
                        <FormControl
                            placeholder="Search By Name"
                            aria-label="Seach by Name"
                            onChange={(e) => { handleChange(e) }}
                            value={inputSearch}
                            onKeyDown={(e: any) => handleOnKeyDown(e)}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={handleSearch} >Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="sort">
                    <DropdownButton id="dropdown-item-button" title="Sort By ID">
                        <Dropdown.Item as="button" onSelect={() => handleSort('asc')}>Ascending</Dropdown.Item>
                        <Dropdown.Item as="button" onSelect={() => handleSort('desc')}>Descending</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            {
                showLoader ? (<h4>Loading...</h4>) :
                    <div className="character-card">
                        <CharacterCard charactersData={charactersData} />
                    </div>
            }
        </>
    )
}