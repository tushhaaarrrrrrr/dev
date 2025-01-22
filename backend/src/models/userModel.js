// Defines logic related to user data.
const prisma = require('../prisma/client');

/**
 * Handles operations related to user accounts.
 */
const UserModel = {
  /**
   * Creates a new user.
   * @param {Object} data - User data.
   * @returns {Promise<Object>} - Created user.
   */
  createUser: async (data) => {
    return prisma.user.create({ data });
  },

  /**
   * Retrieves a user by their email.
   * @param {string} email - User email.
   * @returns {Promise<Object|null>} - User or null if not found.
   */
  getUserByEmail: async (email) => {
    return prisma.user.findUnique({ where: { email } });
  },

  /**
   * Retrieves a user by their ID.
   * @param {number} id - User ID.
   * @returns {Promise<Object|null>} - User or null if not found.
   */
  getUserById: async (id) => {
    return prisma.user.findUnique({ where: { id } });
  },

  /**
   * Updates user information by ID.
   * @param {number} id - User ID.
   * @param {Object} data - Updated user data.
   * @returns {Promise<Object>} - Updated user.
   */
  updateUser: async (id, data) => {
    return prisma.user.update({ where: { id }, data });
  },
};

module.exports = UserModel;