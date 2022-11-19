export const Yorumlar = async () => {
  return [
    {
      id: '1',
      username: 'Ekmek reis',
      userId: '1',
      comment: 'mmmmm kemik sulu ekmek',
      image: '/static/images/avatars/ekmek-reis.jpg',
      vote: false,
      votedStatus: false,
      parentId: null,
      writeComment: false,
      createdTime: '20.11.2022'
    },
    {
      id: '2',
      username: 'Poncuk reis',
      userId: '2',
      comment: 'hav hav',
      image: '/static/images/avatars/poncuk-reis.jpg',
      vote: false,
      votedStatus: false,
      parentId: null,
      writeComment: false,
      createdTime: '20.11.2022'
    },
    {
      id: '3',
      username: 'Poncuk reis',
      userId: '2',
      image: '/static/images/avatars/poncuk-reis.jpg',
      comment: 'ekmek reise yorum',
      vote: false,
      votedStatus: false,
      parentId: '1',
      writeComment: false,
      createdTime: '20.11.2022'
    }
  ];
};
