import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { CharacterInfo } from '../model';

export const CharacterCard = ({ charactersData }: { charactersData: CharacterInfo[] | undefined }) => {
    return (
        <>
            {
                charactersData?.map((char: CharacterInfo) => {
                    return (
                        <Card className="card-container">
                            <Card.Img variant="top" src={char.image} />
                            <div className="card-desc">
                                <div className="character-name">
                                    {char.name}
                                </div>
                                <div className="character-id">
                                    {char.id}
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div className="card-info">
                                        <span className="key">STATUS</span>
                                        <span className="value">{char.status}</span>
                                    </div>
                                    <div className="card-info">
                                        <span className="key">SPECIES</span>
                                        <span className="value">{char.species}</span>
                                    </div>
                                    <div className="card-info">
                                        <span className="key">GENDER</span>
                                        <span className="value">{char.gender}</span>
                                    </div>
                                    <div className="card-info">
                                        <span className="key">ORIGIN</span>
                                        <span className="value">{char.origin.name}</span>
                                    </div>
                                    <div className="card-info">
                                        <span className="key">LAST LOCATION</span>
                                        <span className="value">{char.location.name}</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </>
    )
}