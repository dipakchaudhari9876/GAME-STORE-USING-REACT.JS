'use strict';

/**
 * mine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mine.mine');
