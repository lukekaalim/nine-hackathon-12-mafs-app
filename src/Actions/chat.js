export const START_CONVERSATION = 'START_CONVERSATION';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SWITCH_CONVERSATION = 'SWITCH_CONVERSATION';

export const startConversation = (participantId, conversationId) => ({
  type: START_CONVERSATION,
  participantId,
  conversationId,
});

export const addMessage = (conversationId, text, time, author) => ({
  type: ADD_MESSAGE,
  conversationId,
  text,
  time,
  author,
});

export const switchConversation = (conversationId) => ({
  type: SWITCH_CONVERSATION,
  conversationId,
});
