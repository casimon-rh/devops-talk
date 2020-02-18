const sonarqubeScanner = require('sonarqube-scanner');
  sonarqubeScanner({
    serverUrl: `http://${process.env.SONAR_URL | 'localhost'}:9000`,
    options : {
    'sonar.sources': '.',
    'sonar.inclusions' : 'js/**' // Entry point of your code
    }
  }, () => {});