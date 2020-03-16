`
mutation {
  createEvent(eventInput: {title: "lsdfj", description: "kladsjf", category: "timepass", location: "dombivli", country: "India", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)"}) {
    entity
    title
    description
    category
    country
    isPublished
    startDate
    endDate
  }
}

mutation {
  createEvent(eventInput: {title: "last test please work fine", description: "kladsjf", category: "timepass", location: "dombivli", country: "India", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)"})
}

mutation {
  createUser(userInput: {username: "nisha", fullName: "Nisha Ravi Padayachi", email: "nisha@gmail.com", password: "nisha", country: "India"}) {
    _id
    entity
    username
    fullName
    companyName
    email
    password
  }
}








{
  events {
    entity
    slugUri
    title
    userId {
      username
      email
    }
  }
}
`;
