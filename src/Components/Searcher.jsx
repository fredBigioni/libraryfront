
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export const Searcher = ({ onBookDataChange }) => {
    const [searchText, setSearchText] = useState('');

    const searchBook = () => {
        axios.get('https://dented-buttercup-tithonia.glitch.me/api/search-books', {
            params: {
                q: searchText
            }
        })
            .then(res => {
                const bookData = res.data.items;
                onBookDataChange(bookData); // Llamar a la función proporcionada por el componente padre para actualizar el estado en el componente padre
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        searchBook();
    };

    const preloadImages = (bookData) => {
        bookData.forEach((item) => {
            if (item.thumbnail) {
                const img = new Image();
                img.src = item.thumbnail;
            }
        });
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '2%',
                    height: '5vh',
                    width: '92vw',
                    '@media (max-width: 1440px) and (max-height: 3088px)': {
                        width: '92vw',
                        height: '4vh',
                    },
                }}
                onSubmit={handleSubmit}
            >
                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1,
                        fontSize: '1.5vw',
                        '@media (max-width: 1440px) and (max-height: 3088px)': {
                            fontSize: '3vh',
                        },
                    }}
                    placeholder="Ingresa la búsqueda"
                    value={searchText}
                    onChange={handleInputChange}
                />
                <IconButton
                    type="button"
                    sx={{
                        p: '10px',
                        '& svg': {
                            fontSize: '5vw',
                        },
                    }}
                    aria-label="search"
                    onClick={searchBook}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    );
};
