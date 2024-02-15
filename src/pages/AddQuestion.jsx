import { Autocomplete, Box, Button, Chip, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const AddQuestion = () => {

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [tags, setTags] = React.useState([])


  const handelSubmit = (e) => {
    e.preventDefault()
    // check if the title , tags and description are not empty
    if(title && tags.length && description) {
      console.log(title, tags, description)
    }

  }

  return (
    <Box>
      <Typography variant="h4" sx={{
        mb:"12px !important"
      }}>
      Ask Question to the public
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          borderLeft: '8px solid #BB00DA',
        height: '100%',
          backgroundColor:"#FFFFFF",
        }}
      >

      <form onSubmit={handelSubmit}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >

        <Typography variant="h5" style={{
          color: "#1c1c1c",
          fontWeight: 700,
        }}>
          Title
        </Typography>
        <Typography variant="body1" style={{
          color: "#1c1c1c",
        }}>
          Be specific and imagine you’re asking a question to another person
        </Typography>
        <FormControl name="title" fullWidth={true}>
          <TextField required id="title" label="title" variant="outlined"
            placeholder='e.g. How to add a button to the navbar in React?'
            onChange={(e) => setTitle(e.target.value)}
           />
        </FormControl>

        <Typography variant="h5" style={{
          color: "#1c1c1c",
          fontWeight: 700,
        }}>
          Describe your problem 
        </Typography>

        <Typography variant="body1" style={{
          color: "#1c1c1c",
        }}>
          Introduce the problem and expand on what you put in the title. Add parts of the code that is causing you the problem. Talk about solutions you have tried .
        </Typography>

        <FormControl name="description" fullWidth={true}>
          <TextField required id="description" label="description" variant="outlined" multiline rows={20}
            placeholder='Describe your problem here...'
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Typography variant="h5" style={{
          color: "#1c1c1c",
          fontWeight: 700,
        }}>
          Add tags
        </Typography>

        <Typography variant="body1" style={{
          color: "#1c1c1c",
        }}>
          Add tags to describe what your question is about
        </Typography>

        <FormControl name="tags" fullWidth={true}>

        <Autocomplete
        multiple
        id="tags"
        options={tagsEx.map((option) => option)}
     max={5}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label='Tags'
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }}
          />
        )}
        sx={{
          backgroundColor: "#FFFFFF",

        }}
        onChange={(e, value) => setTags(value)}
      />

        </FormControl>
        
        
      </form>


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '16px',
            mt:"20px"
          }}
        >
        <Button variant="contained" sx={{
          backgroundColor: "#1c1c1c",
          color: "#FFFFFF",
          ':hover': {
            backgroundColor: "#000",
          }
        }}
        type='submit'
      
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary"   onClick={handelSubmit}>
          Submit 
        </Button>

        </Box>

      </Box>

    </Box>
  )
}

const tagsEx = [
  "react", 
  "javascript",
  "nodejs",
  "express",
  "mongodb",
  "sql",
  "python",
  "django",
  "flask",
  "html",
  "css",
  "sass",
  "less",
  "bootstrap",
  "material-ui",
  "tailwind",
  "redux",
  "react-router",
  "react-query",
  "laravel",
  "php",
  "wordpress",
  "nextjs",
  "gatsby",
  "graphql",
  "apollo",
  "typescript",
  "angular",
  "java",
  "c",
  "c++",
  "c#",
  "ruby",
  "ruby on rails",
  "swift",
  "kotlin",
  "scala",
  "go",
  "rust",
  "dart",
]
export default AddQuestion