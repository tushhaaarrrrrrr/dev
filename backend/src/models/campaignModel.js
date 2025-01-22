// Manages campaign data interactions.
const prisma = require('../prisma/client');

/**
 * Handles operations related to campaigns.
 */
const CampaignModel = {
  /**
   * Creates a new campaign.
   * @param {Object} data - Campaign data.
   * @returns {Promise<Object>} - Created campaign.
   */
  createCampaign: async (data) => {
    return prisma.campaign.create({ data });
  },

  /**
   * Retrieves all campaigns for an advertiser.
   * @param {number} advertiserId - Advertiser ID.
   * @returns {Promise<Array>} - List of campaigns.
   */
  getCampaigns: async (advertiserId) => {
    return prisma.campaign.findMany({ where: { advertiserId } });
  },

  /**
   * Updates a campaign by ID.
   * @param {number} id - Campaign ID.
   * @param {Object} data - Updated campaign data.
   * @returns {Promise<Object>} - Updated campaign.
   */
  updateCampaign: async (id, data) => {
    return prisma.campaign.update({ where: { id }, data });
  },

  /**
   * Deletes a campaign by ID.
   * @param {number} id - Campaign ID.
   * @returns {Promise<Object>} - Deleted campaign.
   */
  deleteCampaign: async (id) => {
    return prisma.campaign.delete({ where: { id } });
  },
};

module.exports = CampaignModel;