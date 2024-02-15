import {  Box, Container, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import styles from './styles.module.css';

const Search = ({
    onSubmit,
    onChange,
    placeholder
}) => {

  

  return (
    <Container maxWidth="xl"
      className={styles.searchContainer}
    >




    <form onSubmit={onSubmit}>
        <input type="text" placeholder={placeholder} onChange={onChange} />

        <IconButton onClick={onSubmit}
            type="submit"
            className={styles.searchButton}
        >
            <SearchIcon />
        </IconButton>
    </form>
    </Container>
  )
}

export default Search