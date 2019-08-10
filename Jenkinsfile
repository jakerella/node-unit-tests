pipeline{
    agent none
    stages {
        stage("Build") {
            
            steps {
                script {
                    node {
                        println "mi primer pipeline Build"
                    }
                }
            }
            
        }
        stage("Unit Test") {
            
            steps {
                script {
                    node {
                        println "mi primer pipelinen de Unit Test"
                    }
                }
            }
            
        }
        stage("Sonar Analisis") {
            
            steps {
                script {
                    node {
                        println "mi primer pipeline Sonar Analisis"
                    }
                }
            }
            
        }
    }
}
