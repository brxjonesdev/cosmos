# Cosmos

###### **Description of the project**

This is a project planning app made to cater my particular planning style. The workflow is biased towards software development but could be altered for other types. Users first start with making a collection of brief project descriptions. Then Users, list out the bare functionality (MVP). Then Users are given a dashboard with bins for user stories and engineering stories. Users can then link their repo to the platform to track changes and updates as well as automatically creating issues for your repo that match the user stories and engineering stories. The updates and changes you make can then be converted into shareable updates.

**MVP Aspects**

- Authentication
  - [ ] Allow users to create accounts and log in to access their projects.
- Project Creation and Management
  - [ ] Allow users to create and name new projects.
  - [ ] Enable users to modify or remove existing projects.
  - [ ] Include basic details like project description, status, and deadlines.
  - [ ] Users can create tasks based on User Stories and Engineering Stories
  - [ ] Allow users to set priority levels for tasks.
  - [ ] Allow users to link their GitHub repositories to track commits and issues and display recent commits and their details.

**User Stories**

- [ ] As a user, I want to be able to sign up or log in to my account
- [ ] As a user, I want to be able to view all of my projects
- [ ] As a user, I want to be able to view my project's user and engineering stories
- [ ] Users can drag and drop stories between bins or sections.
- [ ] As a user, I want to create issues in my linked repository that match my user stories and engineering stories so that I can manage tasks directly from the platform.
- [ ] Users can authenticate and connect their GitHub (or other) repository to the platform. The app pulls and displays recent changes, commits, and updates from the linked repository.
- [ ] Users can generate and customize shareable updates from recent changes and commits.

**Engineering Stories**

- [ ] Implement User Authentication using NextAuth
- [ ] Design and implement a database schema for storing project information
- [ ] Implement OAuth authentication for linking GitHub repositories.
- [ ] Create functionality to generate issues in the linked repository based on story details.
