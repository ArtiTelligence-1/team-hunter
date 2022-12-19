export interface Discussion {
    id: string,
    sender: {
      id: {
        timestamp: number,
        creationTime: Date
      },
      firstName: string,
      lastName: string,
      photoUrl: string
    },
    text: string,
    editedAt: Date,
    replyTo: Date,
    replies: Date[]
  };

export interface Comments {
  id: Date,
  sender: {
    id: string,
    firstName: string,
    lastName: string,
    photoUrl: string
  },
  text: string,
  editedAt: Date,
  // replies: Date[]
};