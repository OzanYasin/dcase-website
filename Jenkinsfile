pipeline {
    agent any
    stages {

        stage('Load Configs') {
            steps {
                configFileProvider([configFile(fileId: 'config', variable: 'CONTENT')]) {
                    script {
                        def props = readProperties file: "$CONTENT"
                        props.each { name, value -> env."${name}" = value }
                   }
                }
            }
        }
        stage('install and build') {
            agent {
                docker { 
                    image 'node:20-alpine'
                    args '-u root:root'
                    reuseNode true
                }
            }
            stages {
                stage('Install') {
                    steps {
                        echo 'Installing Dependencies'
                        sh 'npm install -g pnpm'
                        sh 'pnpm install'
                    }
                }

                stage('Build') {
                    steps {
				        echo 'Building NextJS App'
				        sh 'npx next build'
                    }
                }
            }
        }

        stage('Build Dcase-Website Docker Image') {
            steps {
                sh "docker build -t ${env.APP_CONTAINER_NAME} ."
            }
        }

        stage('Deploy Dcase-Website') {
            steps {
                script {
                    sh "docker stop ${env.APP_CONTAINER_NAME} || true"
                    sh "docker rm ${env.APP_CONTAINER_NAME} || true"
                    sh """
                        docker run -d --name ${env.APP_CONTAINER_NAME} \\
                        -e CORE_API_URL=${env.CORE_API_URL}  \\
                        -e CLIENT_KEY=${env.CLIENT_KEY}  \\
                        -p ${env.APP_SERVER_PORT}:3000 \\
                        ${env.APP_IMAGE_NAME}
                    """
                }
            }
        }
    }
}
