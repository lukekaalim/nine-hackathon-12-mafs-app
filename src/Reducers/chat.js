import { START_CONVERSATION, ADD_MESSAGE, SWITCH_CONVERSATION } from '../actions/chat';

const initalState = {
  currentConversation: 0,
  conversations: {
    0: {
      userId: 1,
      content: [
        {author: 0, text: 'Textual content', time: 0},
        {author: 1, text: 'XD'},
      ],
    },
  },
};

const reduceChat = (state = initalState, action) => {
  switch(action.type) {
    case START_CONVERSATION:
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.conversationId]: {
            userId: action.participantId,
            content: [],
          }
        }
      };
    case ADD_MESSAGE:
      console.log('adding message', action);
      return {
        ...state,
        conversations: {
          ...state.conversations,
          [action.conversationId]: {
            ...state.conversations[action.conversationId],
            content: [
              ...state.conversations[action.conversationId].content,
              {
                author: action.author,
                text: action.text,
                time: action.time,
              },
            ],
          },
        },
      };
    case SWITCH_CONVERSATION:
      return {
        ...state,
        currentConversation: action.converstionId,
      }
    default:
      return state;
  }
};

export default reduceChat;
