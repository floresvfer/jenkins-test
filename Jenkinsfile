pipeline {
  agent {
    docker { image 'node:14-alpine' }
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
            steps { sh 'ng test --watch=false --browsers=ChromeHeadless' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}
