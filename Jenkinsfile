pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build and Deploy') {
            steps {
                echo 'Building and Deploying the application...'
                npm install
                node app.js
              
                
            }
        }
        
       
    }
}
