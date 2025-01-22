// Handles chat data.
const prisma = require('../prisma/client');

/**
 * Handles operations related to chat messages.
 */
const ChatModel = {
  /**
   * Sends a new chat message.
   * @param {Object} data - Message data.
   * @returns {Promise<Object>} - Sent message.
   */
  sendMessage: async (data) => {
    return prisma.chat.create({ data });
  },

  /**
   * Retrieves chat history between two users.
   * @param {number} senderId - Sender ID.
   * @param {number} receiverId - Receiver ID.
   * @returns {Promise<Array>} - Chat history.
   */
  getChatHistory: async (senderId, receiverId) => {
    return prisma.chat.findMany({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });
  },
};

module.exports = ChatModel;