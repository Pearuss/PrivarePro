export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "5",
      body: "Giọng hát, thần thái, nhan sắc quá ổn luôn!",
      username: "Pearuss",
      userId: "3",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "6",
      body: "Giọng hát, thần thái, nhan sắc quá ổn luôn!",
      username: "Test",
      userId: "3",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "7",
      body: "Giọng hát, thần thái, nhan sắc quá ổn luôn!",
      username: "Test",
      userId: "3",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "8",
      body: "Giọng hát, thần thái, nhan sắc quá ổn luôn!",
      username: "Test",
      userId: "3",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "9",
      body: "Giọng hát, thần thái, nhan sắc quá ổn luôn!",
      username: "Test",
      userId: "3",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
