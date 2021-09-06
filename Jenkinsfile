pipeline {
  agent {
    docker { image 'rastasheep/alpine-node-chromium:14-alpine' }
  } 
  environment {
        HOME = '.'
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Unit tests') {
            steps { sh 'npm run-script test --watch=false --browsers=ChromeHeadless' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}
