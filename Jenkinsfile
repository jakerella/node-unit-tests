pipeline{
    agent none
    environment {
        myUsername = "OscarBuild"
    }
    stages {
        stage("Build") {
            
            steps {
                script {
                    node {
                        println "mi primer pipeline Build"
                        echo "Nombre de Usuario ${myUsername}"
                    }
                }
            }
            
        }
        stage("Unit Test") {
            environment {
                myUsername = "IrvingTest"
            }         
            steps {
                script {
                    node {
                        println "mi primer pipelinen de Unit Test"
                        echo "Nombre de Usuario ${myUsername}"
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
