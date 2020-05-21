import * as React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import './RightPane.scss';
import { CharacterCard } from './CharacterCard';
import api from '../services/api';
import { CharacterInfo } from '../model';

export const RightPane = () => {

    const [characters, setCharacters] = React.useState<CharacterInfo[] | undefined>(undefined);
    React.useEffect(() => {
        async function loadData() {
            // setLoading(true);
            const apiResponse = await api.get(`/?page=1`);
            setCharacters(apiResponse.data.results);
            // setLoading(false);
        }

        loadData();
    }, []);
    return (
        <>
            <div className="selected-filters-header">
                Selected Filters
            </div>
            <div className="selected-filters-list">
                Human Alive
            </div>
            <div className="search-n-sort">
                <div className="search">
                    <InputGroup>
                        <FormControl
                            placeholder="Search By Name"
                            aria-label="Seach by Name"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="sort">
                    <DropdownButton id="dropdown-item-button" title="Sort">
                        <Dropdown.Item as="button">Ascending</Dropdown.Item>
                        <Dropdown.Item as="button">Descending</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="character-card">
                <CharacterCard charactersData={characters} />
            </div>
        </>
    )
}