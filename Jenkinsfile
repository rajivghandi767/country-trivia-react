pipeline {
    agent any
    stages {
        stage('Verify Tools') {
            steps {
                sh '''
                docker version
                docker info
                '''
            }
        }
        stage('Prune Docker Data') {
            steps {
                sh 'docker system prune -a --volumes -f'
            }
        }
        stage('Start Container'){
            steps{
                sh 'docker build -t country-trivia-react -f Dockerfile.prod .'
                sh 'docker run -d -p 5000:5000 country-trivia-react'
            }
            
        }
    }
}