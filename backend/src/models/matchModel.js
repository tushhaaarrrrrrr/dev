// Manages matchmaking records.
const prisma = require('../prisma/client');

/**
 * Handles operations related to matches between advertisers and creators.
 */
const MatchModel = {
  /**
   * Creates a new match.
   * @param {Object} data - Match data.
   * @returns {Promise<Object>} - Created match.
   */
  createMatch: async (data) => {
    return prisma.match.create({ data });
  },

  /**
   * Retrieves matches for a user based on their role.
   * @param {number} userId - User ID.
   * @param {string} role - User role ('advertiser' or 'creator').
   * @returns {Promise<Array>} - List of matches.
   */
  getMatches: async (userId, role) => {
    const field = role === 'advertiser' ? 'advertiserId' : 'creatorId';
    return prisma.match.findMany({ where: { [field]: userId } });
  },

  /**
   * Updates the status of a match.
   * @param {number} id - Match ID.
   * @param {string} status - New status ('pending', 'approved', 'declined').
   * @returns {Promise<Object>} - Updated match.
   */
  updateMatchStatus: async (id, status) => {
    return prisma.match.update({ where: { id }, data: { status } });
  },
};

module.exports = MatchModel;
