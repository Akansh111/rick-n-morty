import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { LeftPane } from './components/LeftPane';
import { RightPane } from './components/RightPane';
import { CharacterInfo, FiltersType } from './components/model';
import api from './components/services/api';
import './App.css';

export const App = () => {

    const [characters, setCharacters] = React.useState<CharacterInfo[]>([]);
    const [copyCharacters, setCopyCharacters] = React.useState<CharacterInfo[]>([]);
    const [showSelectedFilters, setShowSelectedFilters] = React.useState<FiltersType[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        async function loadData() {
            setLoading(true);
            try {
                /**
                 * Using 2 Promise calls to fetch more records
                 *  which will help in showing more results while filtering
                 */
                const apiResponse1 = await api.get(`/?page=1`);
                const apiResponse2 = await api.get(`/?page=2`);
                setCharacters([...apiResponse1.data.results, ...apiResponse2.data.results]);
                setCopyCharacters([...apiResponse1.data.results, ...apiResponse2.data.results]);

                setLoading(false);
            } catch (error) {
                throw new Error(error);
            }
        }

        loadData();
    }, []);

    const selectedFilters = (filters: FiltersType[]) => {
        const filteredData = filters && filters.length && copyCharacters.filter((char: CharacterInfo) => {
            for (const filter of filters) {
                if (filter.type === 'Species' && char.species === filter.value) {
                    return true;
                }
                if (filter.type === 'Species' && filter.value === 'Other Species') {
                    if (char.species !== 'Human' && char.species !== 'Alien' && char.species !== 'Mytholog') {
                        return true;
                    }
                }
                if (filter.type === 'Gender' && char.gender === filter.value) {
                    return true;
                }
                if (filter.type === 'Status' && char.status === filter.value) {
                    return true;
                }
            }
        })
        if (filteredData !== 0) {
            setCharacters(filteredData);
        } else {
            setCharacters(copyCharacters);
        }
        setShowSelectedFilters(filters);
    }

    const searchCharacters = (search: CharacterInfo[]) => {
        setCharacters(search);
    }

    const updateSorting = (sortedData: CharacterInfo[]) => {
        setCharacters(sortedData);
    }

    return (
        <div className="App" >
            <div className="app-header">
                Rick N Morty
                </div>
            <Container fluid>
                <Row>
                    <Col md={2} xs={12}>
                        <LeftPane selectedFilters={selectedFilters} />
                    </Col>
                    <Col md={10} xs={12}>
                        <RightPane
                            charactersData={characters}
                            showLoader={loading}
                            filters={showSelectedFilters}
                            searchCharacters={searchCharacters}
                            updateSorting={updateSorting}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
