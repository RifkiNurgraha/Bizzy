node("sdet-node-staging") {
  timestamps {
    wrap([$class: "AnsiColorBuildWrapper", "colorMapName": "XTerm", "defaultFg": 1, "defaultBg": 2]) {

      stage("Prepare the Repo") {
        step([$class: 'WsCleanup'])
        checkout scm
      }

      stage("Functional Automation Testing"){
         dir ('sdet_test') {
          docker.image(['node:6.14.2-alpine').withRun('-e NPM_CONFIG_LOGLEVEL=info') { c ->
            sh 'npm install --verbose'
          }
         }
      }
    }
  }
}