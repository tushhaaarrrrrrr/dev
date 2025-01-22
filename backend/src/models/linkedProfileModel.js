// Handles linked social profiles.
const prisma = require('../prisma/client');

/**
 * Handles operations related to linked social profiles.
 */
const LinkedProfileModel = {
  /**
   * Links a new social profile.
   * @param {Object} data - Profile data.
   * @returns {Promise<Object>} - Linked profile.
   */
  linkProfile: async (data) => {
    return prisma.linkedProfile.create({ data });
  },

  /**
   * Retrieves all linked profiles for a user.
   * @param {number} userId - User ID.
   * @returns {Promise<Array>} - List of linked profiles.
   */
  getLinkedProfiles: async (userId) => {
    return prisma.linkedProfile.findMany({ where: { userId } });
  },
};

module.exports = LinkedProfileModel;