# FriendFinder
Week 13 homework

FriendFinder is an app that takes in a user's responses to a survey (or questionnaire) and matches them up with other friends that already exist within a data file (not a database). Once the user's inputs have been taken in, they are now added to the data set and can be matched up with other users who complete the survey.

## Getting Started
Through routing, the user should be able to navigate to two different pages - the home page and the survey. The home page acts as the main hub where the user is initially led to upon page load. Once they decide to take part in the survey, they will be taken to the corresponding page and be asked to answer 10 questions (from 1 to 5 - 1 being strongly disagree and 5 being strongly agree). Once the user clicks on submit, a window will pop up, displaying a 'friend' that is most compatible with that user. This is based on the difference between the sum of the responses.

The user's response is stored, and if another user answers the 10 questions, the initial user may end up matching with the second user.

## Prerequisites
For this application to work, you will need to have installed the express and body-parser npm packages.

## Installing
To install an NPM package, type "npm install" followed by the NPM package name or simply enter in "npm install" as the package.json file should automatically detect which packages will be needed.
