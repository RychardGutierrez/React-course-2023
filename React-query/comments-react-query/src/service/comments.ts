export interface Comment {
  title: string;
  message: string;
  preview?: boolean;
}

export interface CommentWithId extends Comment {
  id: string;
}

// ApiKey could be public as service is 100% free
const apiKey = '$2a$10$8QXr7C3T1kd8fiKFPKTlbe7KiLmlPLnr/8h62W1/iQR.VRtIfUfJ2';

export const getComments = async () => {
  const response = await fetch(
    'https://api.jsonbin.io/v3/b/676c41cde41b4d34e46b107c',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch comments.');
  }

  const json = await response.json();

  return json?.record;
};

const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

export const postComment = async (comment: Comment) => {
  const comments = await getComments();

  const id = crypto.randomUUID();
  const newComment = { ...comment, id };
  const commentsToSave = [...comments, newComment];

  const response = await fetch(
    'https://api.jsonbin.io/v3/b/676c41cde41b4d34e46b107c',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Key': apiKey,
      },
      body: JSON.stringify(commentsToSave),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to post comment.');
  }

  return newComment;
};
