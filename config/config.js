/**
 * Подключение серверной конфигурации
 */

var _ = require('lodash');

var baseConfig = {
  app: {
    env: process.env.NODE_ENV,
    public_config: {
      language: {
        'default': "en"
      },
      env: process.env.NODE_ENV || "development"
    }
  }
};


var platformConfig = {
  development: {
    app: {
      port: process.env.PORT || 2015,
      email: {
        email: "dadubinin@gmail.com",
        pass: "21091091"
      }
    },
    mongo: {
      url: 'mongodb://localhost:27017/AngularDev'
    },
  },

  test: {
    app: {
      port: 3011
    },
    mongo: {
      url: 'mongodb://localhost:27017/AngularDev'
    }
  },

  production: {
    app: {
      port: process.env.PORT || 2015,
      email: {
        email: "dadubinin@gmail.com",
        pass: "21091091"
      },
      cacheTime: 7 * 24 * 60 * 60 * 1000 /* default caching time (7 days) for static files, calculated in milliseconds */
    },
    mongo: {
      url: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/AngularDev'
    }
  }
};

module.exports = _.merge(baseConfig, platformConfig[baseConfig.app.env || (baseConfig.app.env = 'development')]);
