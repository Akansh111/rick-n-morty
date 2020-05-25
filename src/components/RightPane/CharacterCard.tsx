import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { CharacterInfo } from '../model';

const truncate = (input: string) => input.length > 21 ? `${input.substring(0, 21)}...` : input;


export const CharacterCard = ({ charactersData }: { charactersData: CharacterInfo[] | undefined }) => {
    return (
        <>
            {
                charactersData?.map((char: CharacterInfo, i: number) => {
                    return (
                        <Card className="card-container" key={i}>
                            <Card.Img variant="top" src={char.image} />
                            <div className="card-desc">
                                <div className="character-name">
                                    {truncate(char.name)}
                                </div>
                                <div className="character-id">
                                    id: {char.id}
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
                                        <span className="value">{char.origin ? truncate(char.origin.name) : ''}</span>
                                    </div>
                                    <div className="card-info">
                                        <span className="key">LAST LOCATION</span>
                                        <span className="value">{char.location ? char.location.name : ''}</span>
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