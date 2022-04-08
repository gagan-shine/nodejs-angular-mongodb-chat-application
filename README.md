# NodeJS/Angular/MongoDB/Socket.io Chat Application





## Installation

1. [Redis](https://redis.io/docs/getting-started/) is required to be installed
2. Sample data is required to be added

    ```bash

    # Open terminal and enter commands as following:

        # To enter Mongodb shell
        mongo

        # Select database
        use wiot360

        # Insert some users in collection 'users'
        db.users.insertMany([
            { "name" : "User1", "email" : "user1@gmail.com", "isDeleted":false }
            { "name" : "User2", "email" : "user2@gmail.com", "isDeleted":false }
            { "name" : "User3", "email" : "user3@gmail.com", "isDeleted":false }
            { "name" : "User4", "email" : "user4@gmail.com", "isDeleted":false }
            { "name" : "User5", "email" : "user5@gmail.com", "isDeleted":false }
        ])

        # Insert some groups in collection 'groups'
        db.groups.insertMany([
            { "groupName" : "Group 1", "isDeleted":false },
            { "groupName" : "Group 2", "isDeleted":false },
            { "groupName" : "Group 3", "isDeleted":false },
            { "groupName" : "Group 4", "isDeleted":false }
        ])

    ```

3. Node are Mongodb are required and following are the commands to setup and start Nodejs project:

    ```bash

        # Install Node Modules
        npm install

        # Start Project
        pm2 start wiot360.js 
        
        # For logs
        pm2 logs

    ```

4. For frontend, I used Angular

    ```bash
        # Install Angular Modules
        npm install

        # Start Project
        ng serve
        # OR
        #Generate Build (local environment port - 8008)
        ng build

    ```

5. Sample .env file

    ```bash

       NODE_ENV="local"
       PORT=8008
       ADMIN_ROUTES=True

    ```