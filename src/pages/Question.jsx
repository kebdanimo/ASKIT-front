import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Question = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.questions.questions.find((question) => question.post_id === id)
  );

  useEffect(() => {
    console.log(question);
    // Get the question By ID
  }, [question]);


  // get the max number of the question that will be displayed
  const maxNumber = Math.max.apply(Math, question?.answers.map(function(o) { return o.upvotes; }))

console.log(maxNumber);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
          borderLeft: "8px solid #BB00DA",
          borderRight: "8px solid #BB00DA",
          padding: "16px",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#1c1c1c",
              fontWeight: 700,
              mb: "16px !important",
            }}
          >
            {question?.title_post}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#1c1c1c",
            }}
          >
            {question?.description_post}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              mt: "16px",
            }}
          >
            {question?.tags_post.map((tag, index) => {
              return <Chip label={"#" + tag} key={index} />;
            })}
          </Box>
        </Box>
      </Box>

      <Divider>
        <Typography
          variant="body1"
          sx={{
            color: "#1c1c1c",
            fontWeight: 700,
            mt: "16px",
            mb: "16px",
          }}
        >
          Answers
        </Typography>
      </Divider>
      {question?.answers.map((answer, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",

              gap: "16px",
              width: "100%",
              borderLeft: answer.upvotes == maxNumber ? "8px solid #6b5" : "8px solid #BB00DA",
              borderRight: answer.upvotes == maxNumber ? "8px solid #6b5" : "8px solid #BB00DA",
              padding: "16px",
              borderRadius: "16px",
              backgroundColor: "#FFFFFF",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  flexDirection: "column",

                }}
              >
                <IconButton
                  sx={{
                    color: "#1c1c1c",
                    fontSize: "20px",
                    fontWeight: 700,

                  }}
                  size="large"
                >
                  <ArrowDropUpIcon 
                    sx={{
                      color: "#1c1c1c",
                      fontSize: "40px",
                      fontWeight: 700,
                    }}
                   />
                </IconButton>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#1c1c1c",
                    fontWeight: 700,
                  }}
                >
                  {answer?.upvotes}
                </Typography>

                <IconButton
                  sx={{
                    color: "#1c1c1c",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                  size="large"
                >
                  <ArrowDropDownIcon
                  sx={{
                      color: "#1c1c1c",
                      fontSize: "40px",
                      fontWeight: 700,
                    }}
                   />
                </IconButton>
              </Box>

              <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
              >
              <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              >
              <Typography
                variant="body2"
                sx={{
                  color: "#1c1c1c",
                }}
              >
                {answer?.user}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#1c1c1c",
                }}
              >
                {answer?.date_of_answer}
              </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#1c1c1c",
                }}
              >
                {answer?.content}
              </Typography>
              </Box>

            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Question;
