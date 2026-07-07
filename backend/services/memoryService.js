const sessions = {};

export const saveMessage = (sessionId, sender, message) => {
  if (!sessions[sessionId]) {
    sessions[sessionId] = [];
  }

  sessions[sessionId].push({
    sender,
    message,
  });

  // Sirf last 10 messages store karenge
  if (sessions[sessionId].length > 10) {
    sessions[sessionId].shift();
  }
};

export const getConversation = (sessionId) => {
  return sessions[sessionId] || [];
};
