node("sdet-node-staging-1") {
  timestamps {
    wrap([$class: "AnsiColorBuildWrapper", "colorMapName": "XTerm", "defaultFg": 1, "defaultBg": 2]) {

      stage("Prepare the Repo") {
        step([$class: 'WsCleanup'])
        checkout scm
      }

      stage("Functional Automation Testing"){
        docker.image('timbru31/node-alpine-git').inside { c ->
          sh 'npm install --verbose'
          sh 'npm run test-api --verbose'
        }
      }
    }
  }
}
