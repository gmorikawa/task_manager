# Task Manager

Web application managing team's tasks.

## System Description

### Requirements
Users need to create an new account to use the application. A valid username (must be unique in the system), and password are necessary to complete the registration.

Once registered, the user can create teams and add members (registered users) to it. The creator of the team is considered the team leader. As a team leader the user has the permission of assign tasks to members inside this team, make changes in team's information, also delete the team. The members in the team can only visualize assigned tasks and mark down them as completed. But even as a team leader, a user cannot mark as completed a task that doesn't belongs to him.

### Entities
* User
    * id (primary key)
    * username (required)
    * password (required)
* Team
    * id (primary key)
    * name (required)
    * description
    * leader (user_id)
* Member
    * id (primary key)
    * user_id
    * team_id
    * tasks
* Task
    * id (primary key)
    * title (required)
    * isDone
    * member_id

## Development

### Used Technologies
* [React JS](https://reactjs.org/)
* [Node JS](https://nodejs.org/en/)
* [Express JS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io/)

## External links

* [Writing API Tests with Jest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest);
* [How to Create Relationships with Mongoose and Node.JS](https://dev.to/oluseyeo/how-to-create-relationships-with-mongoose-and-node-js-11c8)

* [Mongoose Crash Course - Beginner Through Advanced](https://www.youtube.com/watch?v=DZBGEVgL2eE)

## Troubleshooting

### 'npm install' taking too much time to install packages
For some reason __npm install__ was longer than normal to install the packages, sometimes coming to fail during installation.
Why exactly I had this trouble I still don't know, but downgrading Node from version 18 to version 16 solved the problem.