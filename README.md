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
* Task
    * id (primary key)
    * title (required)
    * status
    * team_id
    * assignee_id

## Development

### Used Technologies
* [React JS](https://reactjs.org/)
* [Node JS](https://nodejs.org/en/)
* [Express JS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Jest](https://jestjs.io/)