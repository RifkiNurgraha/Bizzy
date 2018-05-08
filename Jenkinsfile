node("sdet-node-staging-1") {
  timestamps {
    wrap([$class: "AnsiColorBuildWrapper", "colorMapName": "XTerm", "defaultFg": 1, "defaultBg": 2]) {

      stage("Prepare the Repo") {
        step([$class: 'WsCleanup'])
        checkout scm
      }

      stage("Functional Automation Testing"){
          sh '''
            echo "BASE_URL=https://www.bizzy.co.id
            BASE_URL_FACEBOOK=https://www.facebook.com
            BASE_URL_INSTAGRAM=https://www.instagram.com
            BASE_URL_TWITTER=https://twitter.com
            BASE_URL_LINKEDIN=https://www.linkedin.com
            BASE_URL_SELENIUMEASY_PRACTICE=http://www.seleniumeasy.com/test/
            BASE_URL_TOOLSQA=http://toolsqa.com
            BASE_URL_YIZENG=http://yizeng.me/2014/01/31/test-wysiwyg-editors-using-selenium-webdriver/
            API_BASE_URL_BO=http://staging-api-finance.bizzy.co.id/finance/v1
            BASE_URL_BASIC_DEMO=http://www.seleniumeasy.com/test/basic-first-form-demo.html
            API_BASE_URL_BO_TEST=http://test-api.bizzy.co.id/v1

            FACEBOOK_USERNAME=
            FACEBOOK_PASSWORD=
            FACEBOOK_PROFILE_NAME=

            BASE_URL_BO_BUDDY=https://test-boapi.bizzy.co.id/v1%" > .env
          '''
  
        docker.image('timbru31/node-alpine-git').inside { c ->
          sh 'npm install --no-progress'
          sh 'npm run test-api'
        }
      }
    }
  }
}
