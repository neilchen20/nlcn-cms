'use strict';

/**
 * motor-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::motor-system.motor-system');
