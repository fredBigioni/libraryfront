import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { Card, Searcher } from './';
import './style.css';

export const Main = () => {
    const [bookData, setBookData] = useState([]);

    const handleBookDataChange = (data) => {
        setBookData(data);
    }

    return (
        <>
            <div className='pageContent'>
                <Grid container className='bodyContent'>
                    <Grid item className='bodyContentLeft'>
                        <div className="header">
                            <div className="row1">
                                <h1 className="title">Un cuarto sin libros, es como un cuerpo sin alma</h1>
                            </div>
                            <div className="row2">
                                <h2 className="subtitle">Encuentra un libro</h2>
                                <Searcher onBookDataChange={handleBookDataChange} />
                            </div>
                        </div>
                        <div className="imageContainer">
                            <img src='./images/bg2.png' alt="Background" />
                        </div>
                    </Grid>
                    <Grid item className="bodyContentRight">
                        <div className="cardContainer">
                            {bookData && bookData.map((item) => {
                                let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                                let title = item.volumeInfo.title;
                                let authors = item.volumeInfo.authors;
                                let description = item.volumeInfo.description;
                                return (
                                    <Card
                                        key={item.id}
                                        src={thumbnail}
                                        title={title}
                                        authors={authors}
                                        description={description} />
                                )
                                // return (
                                //     <div className="card">
                                //         <div className="cardImage">
                                //             <img src={thumbnail} alt="Book Thumbnail" />
                                //         </div>
                                //         <div className="cardContent">
                                //             <div>
                                //                 <h3>{title}</h3>
                                //                 <p>{authors && authors.join(', ')}</p>
                                //             </div>
                                //             <p>{description}</p>
                                //         </div>
                                //     </div>
                                // )
                            })}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};
