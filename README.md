# LogIt Beaver

LogIt Beaver is a simple application designed to help tradies log and manage jobs. This application allows the User to view their job list, job details, update job statuses, and manage job notes.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/engrkebin24/JobList-Project.git
    ```
2. Navigate to the main project directory:
    ```sh
    cd Joblist-Project/logit-beaver
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the app in development mode:
    ```sh
    npm run dev
    ```

## Usage

1. Ctrl + Click the link in your terminal, or navigate to http://localhost:5173 to view the app in your browser.
2. In the homepage, click on the Log In button
3. In Jobs Page, click on any Job Row to view its Job Details.
4. In the Job Details Panel, you may change the selected Job's Status, and manage its Job Notes.
5. You may use the Sort Buttons at the top of the Job List Panel to sort the Job Rows by Job Number or by Job Creation Date.
6. You may use the Filter Button to filter the Job Rows based on Job Status.


## Project Structure
 ```
|--node_modules
|--public
|--src
|  |-assets
|  |  |-beaver.png (for User Profile placeholder)
|  |  |-BeaverLogo.svg (for Logo used in NavBar)
|  |-components
|  |  |-JobDetails
|  |  |  |-JobDetails.jsx
|  |  |  |-JobDetails.module.css
|  |  |-JobListPanel
|  |  |  |-JobListPanel.jsx
|  |  |-JobNotes
|  |  |  |-JobNotes.jsx
|  |  |  |-JobNotes.module.css
|  |  |-JobRow
|  |  |  |-JobRow.jsx
|  |  |  |-JobRow.module.css
|  |  |-NavBar
|  |  |  |-NavbarComponents
|  |  |  |  |-UserProfile.jsx
|  |  |  |  |-UserProfile.module.css
|  |  |  |-Navbar.jsx
|  |  |  |-Navbar.module.css
|  |-pages
|  |  |-Homepage
|  |  |  |-Homepage.jsx
|  |  |  |-Homepage.module.css
|  |  |-JobsPage
|  |  |  |-JobsPage.jsx
|  |  |  |-JobsPage.module.css
 ```

## Components

### `JobDetails`
Located in [src/components/JobDetails/JobDetails.jsx](logit-beaver/src/components/JobDetails/JobDetails.jsx)
- Displays detailed Job and Customer information about the selected job from the Job List Panel.
- Contains the Job Notes (list) which can be appended to.

### `JobListPanel`
Located in [src/components/JobListPanel/JobListPanel.jsx](logit-beaver/src/components/JobListPanel/JobListPanel.jsx)
- Displays a list of jobs by rendering the Job Rows.
- Allows selecting a job, which displays its information in the Job Details Panel.

### `JobNotes`
Located in [src/components/JobNotes/JobNotes.jsx](logit-beaver/src/components/JobNotes/JobNotes.jsx)
- Manages and displays the Notes for each Job.
- Allows adding, and editing of Job Notes.

### `JobRow`
Located in [src/components/JobRow/JobRow.jsx](logit-beaver/src/components/JobRow/JobRow.jsx)
- Displays Job information in a row format

### `NavBar`
Located in [src/components/NavBar/NavBar.jsx](logit-beaver/src/components/NavBar/NavBar.jsx)
- Navigation bar with placeholder links for future additional features of the app, as well as a User Profile element.

### `UserProfile`
Located in [src/components/NavBar/NavBarComponents/UserProfile.jsx](logit-beaver/src/components/NavBar/NavBarComponents/UserProfile.jsx)
- Displays user profile information and settings; A placeholder for possible user session management.

## Pages

### `Homepage`
Located in [src/pages/Homepage/Homepage.jsx](logit-beaver/src/pages/Homepage/Homepage.jsx)
- The landing page of the application.
- Provides options to log in or sign up (aka 'join the lodge').

### `JobsPage`
Located in [src/pages/JobsPage/JobsPage.jsx](logit-beaver/src/pages/JobsPage/JobsPage.jsx)
- Displays the Job List and Job Details Panels
- Allows for sorting and filtering of Job Rows in the Job List Panel
