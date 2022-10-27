pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sshPublisher(publishers: [sshPublisherDesc(configName: 'app-server-dev', transfers: [sshTransfer(cleanRemote: false, excludes: ''
               
                npm install
                npm start
                ''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '.', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])        
            }
        }
    }
}
