# babyGamble

Web app for users to guess different aspects about a baby.

## Sources used during development

### Styling/Components: Material UI

- Material-UI's own documentation [link to Material-UI](https://material-ui.com/).
- React.school's guide on Material-UI [link to react.school Material-UI info](https://react.school/material-ui).

### Database: Firebase

- Frontend Masters Firebase with React course by Steve Kinney [link to course](https://frontendmasters.com/courses/firebase-react-v2/).
- Using Firebase with React Hooks by Ben McMahen [link to article](https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap).
- Brian Bartholomew's React Firebase Starter GitHub repository [link to repo](https://github.com/bcbrian/react-firebase-starter).

### Routing: React-Router-Dom

- Restricting a user's ability to view a page based on credentials. [link to article](https://medium.com/craft-academy/how-to-restrict-your-routes-and-links-in-react-js-now-with-hooks-12b395c1a2fe)

### Charts: react-vis

Utilized the library [react-vis](https://github.com/uber/react-vis) for creating the charts. I am still not sure if I would recommend this library to others.

If you are going to try and use it, I would recommend starting this this [example](https://uber.github.io/react-vis/documentation/getting-started/creating-a-new-react-vis-project) from the documentation site. One aspect I missed early on was that you have to import the libraries styles for the components to function properly. Also, I would recommend using the documentation in the repo over using the documentation in the site I linked to for the getting started example. The repo also links to this same site if you click `Docs`. I had better luck using the hyperlinks and info found under the [More Information](https://uber.github.io/react-vis/documentation/getting-started/creating-a-new-react-vis-project) section of the repos README.

### Lessons Learned

- Design or at least pseudo code the portions of your application that will utilize and depend on the data that you are having the user provide. To many this is probably obvious, and I have been taught this in the past, but dang did this project prove that theory to me.

  - I wanted the ability for users to submit guesses up as soon as possible so I could start collecting data. This meant I developed the form component and all the input options before thinking through what I was going to do with the data. It turns out many of the ways I organized and formatted the data did not go well with how I would need to manipulate it.
  - Also, I learned that I never updated the values for eyeColor options. The labels were updated, but not the values. I had to write code to correct this error for each guess.

- TypeScript indeed is very useful.
  - I have started using TypeScript because it is required at work. I know a big advantage to using TypeScript is it can improve your development experenice, but it took going back to coding a React app without TypeScript to truly see how helpful it is to get all the suggestions that are provided due to you having to give everything a type.

### Future Development

- Data for charts comes from the database. Right now the values for the charts are hard coded. Although I do not plan to recieve any more data for this little experiment app, it would be good pratice to have it functioning the way I had planned, which is every time a guess comes in the data for the charts is updated and displayed.
- Refactor stats.js. This code is messy and there are lots of spots where code is being repeated. Some of this code would be nice to have for future projects where I use charts. Transforming your data so it meets the format for the chart data and figuring out to bucket was a lot more work than I anticipated. I would love to not do it again.
