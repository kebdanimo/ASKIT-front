import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { NavLink } from "react-router-dom";

import img from './a.png';
const ProfileCard = () => {
  return (
    <Box className={styles.card}>
      <Box className={styles.info}>
        <Box className={styles.avatar}>
          <img src={img} alt="user avatar" />
        </Box>
        <Box className={styles.cordinations}>
          <Box className={styles.name}>
            <p>John Doe</p>
          </Box>
          <Box className={styles.email}>
            <p> example@gmail.com</p>
          </Box>
        </Box>
      </Box>

      <NavLink
        to="add-question"
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button
          className={styles.addQuestion}
          startIcon={<QuestionAnswerIcon />}
        >
          Add Question
        </Button>
      </NavLink>
    </Box>
  );
};

export default ProfileCard;
