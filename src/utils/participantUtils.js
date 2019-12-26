export const generateId = (length) => {
  const result = [];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    result.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return result.join('');
};

export const sortParticipantsByRoll = (participants) => [...participants].sort((a, b) => {
  if (a.roll > b.roll) return -1;
  if (a.roll < b.roll) return 1;
  return 0;
});

export const sortParticipants = (participants, sortKey) => [...participants].sort((a, b) => {
  if (a[sortKey] > b[sortKey]) return -1;
  if (a[sortKey] < b[sortKey]) return 1;
  return 0;
});

export const refreshParticipantOrder = (participants) => participants
  .reduce((acc, p, i) => [...acc, {
    ...p,
    order: i + 1,
  }], []);
