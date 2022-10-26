pipeline {
    agent any

    tools {nodejs "node"}

    stage {
        steps {
                echo 'Deploying the application...'
               
                npm start
                ''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '.', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*.tar.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])        
            }
       
    }
}
