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

### Database connection problems
When using Windows environment I had problems at connecting to localhost because apparently because localhost is not permitted on the IPv6 address ::1, which per default mongoose uses.

To solve this problem, instead of using _localhost_ it was necessary to use _127.0.0.1_ to explicit set the IPv4.

References:
* [Stack Overflow](https://stackoverflow.com/questions/69840504/mongooseserverselectionerror-connect-econnrefused-127017)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
