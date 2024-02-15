import React from 'react'
import QuestionCard from '../components/question/QuestionCard'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import Search from '../components/search/Search'
import { searchQuestion } from '../store/reducer/QuestionsSlice'

const Questions = () => {

  const {questions, searchedQuestions} = useSelector(state => state.questions)

  const [search, setSearch] = React.useState('')

  const dispatch = useDispatch()
  
  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(searchQuestion(search))
  }


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}
    >


      <Search 
        onSubmit={handelSubmit}
        onChange={(e) => dispatch(searchQuestion(e.target.value))}
        placeholder="Search questions"
      />

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
        height: '78vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}

    >
      
      {
        
        (
          searchedQuestions.length ? searchedQuestions : questions).map((question, index) => {
          return (
            <QuestionCard 
              key={index}
              {...question}
            />
          )
        }
        )
      }
    </Box>

    </Box>
  )
}

export default Questions