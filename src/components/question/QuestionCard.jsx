import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';



const QuestionCard = ({
  post_id, title_post, description_post, tags_post, answers, date_post, user, image
}) => {


  return (
    <NavLink to={`/questions/${post_id}`} 
      style={{
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
      }}
    >
    <Box className={styles.card}>

<Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap:"4px"
  }}
>
    <Typography variant="h5" className={styles.title}>

      {title_post}
  
    </Typography>
    <Typography variant="body2" className={styles.title}>
        {date_post}
    </Typography>
</Box>
    

    <Typography variant="body1" className={styles.description}>
      {description_post}
    </Typography>
    {
      image && (
        <Box className={styles.image}>
          <img src={image} alt="question" />
        </Box>
      )
    }

    <Box className={styles.tags}>
      {
        tags_post.map((tag, index) => {
          return (
            <Chip label={"#" + tag} key={index} />
          )
        })
      }
    </Box>

    <Typography variant="body2" className={styles.title}>
        {answers.length} answers
    </Typography>
      
    </Box>
    </NavLink>
  )
}

export default QuestionCard