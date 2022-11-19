import {
  Box,
  // Grid,
  Typography,
  Divider,
  ListItem,
  List,
  // Tooltip,
  Button,
  IconButton,
  Avatar,
  lighten,
  styled
} from '@mui/material';
import { useState } from 'react';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';

import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import WritingSection from './WritingSection';
import YetheReplies from './comment';

const IconButtonSuccess = styled(IconButton)(
  ({ theme }) => `
      background: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin: ${theme.spacing(0.5)};

      &:hover {
          background: ${lighten(theme.colors.success.lighter, 0.4)};
      }
   
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
      background: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin: ${theme.spacing(0.5)};

      &:hover {
          background: ${lighten(theme.colors.error.lighter, 0.4)};
      }
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.success.lighter};
    color: ${theme.colors.success.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};


`
);
const AvatarFail = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};


`
);

function ReviewsTab({ comment, replies, addComm }) {
  const commentReplies = (commenTId) => {
    return replies.filter((commenT) => commenT.parentId === commenTId);
  };
  const [deneme, setDeneme] = useState(null);

  const changeVote = (selectedComment, commentVote) => {
    // comment.voted = true;
    console.log(deneme);
    // status.voted = true;

    selectedComment.vote = commentVote;
    selectedComment.votedStatus = true;
    setDeneme(!deneme);
  };
  const showComment = (selectedComment) => {
    console.log(selectedComment);
    selectedComment.writeComment = true;
    setDeneme(!deneme);
  };
  return (
    <>
      <List>
        <Divider />
        <ListItem
          sx={{
            display: { xs: 'block', sm: 'flex' },
            p: 3
          }}
          key={comment.id}
        >
          <Box
            sx={{
              minWidth: 210,
              pb: { xs: 2, sm: 0 }
            }}
          >
            <Avatar src={comment.image} />
            <Typography
              sx={{
                mt: 1,
                mb: 2
              }}
              variant="h5"
            >
              {comment.username} {'\n'}
              <Typography variant="subtitle2" color="text.primary">
                {comment.createdTime}
              </Typography>
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography
              sx={{
                mb: 3
              }}
            >
              {comment.comment}
            </Typography>

            <Box
              sx={{
                display: { xs: 'block', md: 'flex' }
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              {comment.votedStatus ? (
                comment.vote ? (
                  <Box display="flex" alignItems="center">
                    <AvatarSuccess
                      sx={{
                        mr: 1
                      }}
                    >
                      <CheckTwoToneIcon />
                    </AvatarSuccess>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        mr: 4
                      }}
                    >
                      yorumu begendin
                    </Typography>
                  </Box>
                ) : (
                  <Box display="flex" alignItems="center">
                    <AvatarFail
                      sx={{
                        mr: 1
                      }}
                    >
                      <CloseIcon />
                    </AvatarFail>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        mr: 4
                      }}
                    >
                      inceleyecegiz
                    </Typography>
                  </Box>
                )
              ) : null}

              <Box
                sx={{
                  pt: { xs: 2, md: 0 }
                }}
              >
                <Typography
                  sx={{
                    pr: 1
                  }}
                  component="span"
                >
                  Yardimci oldu mu?
                </Typography>
                <Button
                  startIcon={<RateReviewTwoToneIcon />}
                  variant="contained"
                  size="large"
                  onClick={() => showComment(comment)}
                >
                  Yanıtla
                </Button>
                <IconButtonSuccess onClick={() => changeVote(comment, true)}>
                  <ThumbUpTwoToneIcon fontSize="small" />
                </IconButtonSuccess>
                <IconButtonError>
                  <ThumbDownTwoToneIcon
                    fontSize="small"
                    onClick={() => changeVote(comment, false)}
                  />
                </IconButtonError>
              </Box>
            </Box>
            {comment.writeComment && (
              <WritingSection addComm={addComm} parentId={comment.id} />
            )}
          </Box>
        </ListItem>
        {replies.map((replies) => (
          <>
            <ListItem
              sx={{
                display: { xs: 'block', sm: 'flex' },
                pl: { xs: 5, md: 10 },
                pt: 5
              }}
              key={replies.id}
            >
              <Box
                sx={{
                  minWidth: 210,
                  pb: { xs: 2, sm: 0 }
                }}
              >
                <Avatar src={replies.image} />
                <Typography
                  sx={{
                    mt: 1,
                    mb: 2
                  }}
                  variant="h5"
                >
                  {replies.username} {'\n'}
                  <Typography variant="subtitle2" color="text.primary">
                    {replies.createdTime}
                  </Typography>
                </Typography>
              </Box>

              <Box flex={1}>
                <Typography
                  sx={{
                    mb: 3
                  }}
                >
                  {replies.comment}
                </Typography>
                <Box
                  sx={{
                    display: { xs: 'block', md: 'flex' }
                  }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {replies.votedStatus ? (
                    replies.vote ? (
                      <Box display="flex" alignItems="center">
                        <AvatarSuccess
                          sx={{
                            mr: 1
                          }}
                        >
                          <CheckTwoToneIcon />
                        </AvatarSuccess>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            mr: 4
                          }}
                        >
                          yorumu begendin
                        </Typography>
                      </Box>
                    ) : (
                      <Box display="flex" alignItems="center">
                        <AvatarFail
                          sx={{
                            mr: 1
                          }}
                        >
                          <CloseIcon />
                        </AvatarFail>

                        <Typography
                          variant="subtitle2"
                          sx={{
                            mr: 4
                          }}
                        >
                          inceleyecegiz
                        </Typography>
                      </Box>
                    )
                  ) : null}

                  <Box
                    sx={{
                      pt: { xs: 2, md: 0 }
                    }}
                  >
                    <Typography
                      sx={{
                        pr: 1
                      }}
                      component="span"
                    >
                      Yardimci oldu mu?
                    </Typography>
                    <Button
                      startIcon={<RateReviewTwoToneIcon />}
                      variant="contained"
                      size="large"
                      onClick={() => showComment(replies)}
                    >
                      Yanıtla
                    </Button>
                    <IconButtonSuccess
                      onClick={() => changeVote(replies, true)}
                    >
                      <ThumbUpTwoToneIcon fontSize="small" />
                    </IconButtonSuccess>
                    <IconButtonError onClick={() => changeVote(replies, false)}>
                      <ThumbDownTwoToneIcon fontSize="small" />
                    </IconButtonError>
                  </Box>
                </Box>
                {replies.writeComment && (
                  <WritingSection addComm={addComm} parentId={replies.id} />
                )}
              </Box>
            </ListItem>

            <YetheReplies yether={commentReplies(replies.id)} />
          </>
        ))}
        <Divider />
      </List>
    </>
  );
}

export default ReviewsTab;
