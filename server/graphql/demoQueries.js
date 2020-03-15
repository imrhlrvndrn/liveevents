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

`;
