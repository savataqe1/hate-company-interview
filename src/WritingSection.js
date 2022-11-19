/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/label-has-for */
import { useState } from 'react';
import {
  // Avatar,
  // Tooltip,
  // IconButton,
  Box,
  Button,
  // Grid,
  styled,
  InputBase,
  useTheme
} from '@mui/material';

// import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(12)};
    padding: ${theme.spacing(0)};
    width: 100%;
    color:${theme.colors.alpha.black[500]}
`
);

// const Input = styled('input')({
//   display: 'none'
// });

function CreateComment({ addComm, parentId }) {
  const theme = useTheme();
  const [text, setText] = useState('');
  const today = new Date().toLocaleDateString();

  return (
    <Box
      sx={{
        background: theme.colors.alpha.white[50],
        display: 'flex',
        alignItems: 'center',
        p: 4,
        height: '50px'
      }}
    >
      <Box flexGrow={1} display="flex" alignItems="center">
        {/* <Avatar
          sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}
          alt={user.name}
          src={user.avatar}
        /> */}

        <MessageInputWrapper
          autoFocus
          placeholder="Yorumunu buraya yazabilirsin"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Box>
      <Box>
        <Button
          startIcon={<SendTwoToneIcon />}
          onClick={() => {
            addComm(text, parentId, today);
            setText('');
          }}
          variant="contained"
        >
          Gönder
        </Button>
      </Box>
    </Box>
  );
}

export default CreateComment;
