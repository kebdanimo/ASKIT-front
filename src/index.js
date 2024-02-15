import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import Questions from './pages/Questions';
import MyQuestions from './pages/MyQuestions';
import AddQuestion from './pages/AddQuestion';
import { ThemeProvider, createTheme } from '@mui/material';
import Question from './pages/Question';


const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: '', element: <Questions />, index:true },
      { path: 'top-questions', element: <Questions />, },
      { path: 'my-questions', element: <MyQuestions />, },
      { path: 'add-question', element: <AddQuestion />,},
      { path: 'questions/:id', element: <Question />,}
    ]
  
  }
]);


// Material UI theme configuration
const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#BB00DA",
      },
      secondary: {
        main: "#1c1c1c",
        dark: "#000",
      },

      background: {
        default: "#1c1c1c",
        paper: "#1c1c1c",
      },
    },
  },
  {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "32px",
            color: "#FFFFFF",
            padding : "8px 16px",
          },
        },
      },
    },
  }
);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}>
    <CssBaseline />
    
  </RouterProvider>
  </ThemeProvider>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
