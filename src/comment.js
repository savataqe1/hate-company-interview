import React from 'react';
import {
  Box,
  // Grid,
  Typography,
  ListItem,
  Avatar
} from '@mui/material';

export default function YetheReplies({ yether }) {
  console.log(yether);
  return yether.map((replies) => (
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
      </Box>
    </ListItem>
  ));
}
