// import { useRoutes } from 'react-router-dom';
// import router from 'src/router';
import React, { useState, useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import useAuth from 'src/hooks/useAuth';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Screen from './ReviewsTab';
import WritingSection from './WritingSection';
import { Yorumlar } from './data/data';
// import AppInit from './components/AppInit';
const createComment = async (comment, parentId = null, createdTime) => {
  return {
    id: Math.random().toString(20).substr(2, 5),
    comment,
    parentId,
    image: '/static/images/avatars/kedi.jpg',
    userId: '4',
    votedStatus: false,
    username: 'Ağlayan kedy',
    vote: false,
    writeComment: false,
    createdTime
  };
};
function App() {
  const [comments, setComments] = useState([]);
  const rootComments = comments.filter((comment) => comment.parentId === null);

  const commentReplies = (commentId) => {
    return comments.filter((comment) => comment.parentId === commentId);
  };

  const addComm = (text, parentId, createdTime) => {
    createComment(text, parentId, createdTime).then((comment) => {
      setComments([...comments, comment]);
    });
  };

  useEffect(() => {
    Yorumlar().then((data) => {
      setComments(data);
    });
  }, []);
  console.log(comments);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={6}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <CssBaseline />
          <WritingSection addComm={addComm} />
          {rootComments.map((rootComment) => (
            <Screen
              comment={rootComment}
              key={rootComment.id}
              addComm={addComm}
              replies={commentReplies(rootComment.id)}
              commentReplies={commentReplies}
            />
          ))}
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
