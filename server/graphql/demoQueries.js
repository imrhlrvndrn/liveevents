`
mutation {
  createEvent(eventInput: {title: "This is the ultimate optimization test", description: "kladsjf", category: "timepass", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)",capacity:100.00,venue: {streetAddress1: "ramchandra complex", streetAddress2: "Subhash cross road ganeshnagar", city: "Dombivli", state: "Maharashtra", pincode: "421202", country: "India"}}) {
    _id
    entity
    title
    description
    category
    isPublished
    isListed
    isInviteOnly
    slugUri
    startDate
    endDate
  }
}


mutation{
  createBooking(bookingInput:{promocode:"beingcodr20",tier:"premium",eventAmountInfo:{numberOfTicketsForAdults:2,numberOfTicketsForChildren:4,baseAmount:1000}}){
    _id
    entity
    promocode
    isFree
  }
}



mutation {
  createEvent(eventInput: {title: "last test please work fine", description: "kladsjf", category: "timepass", location: "dombivli", country: "India", startDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)", endDate: "Sun Mar 15 2020 20:42:16 GMT+0530 (India Standard Time)"})
}

mutation {
  createUser(userInput: {username: "rahul", fullName: "Rahul Ravindran", email: "rahul@gmail.com", password: "rahul", gender: "male", birthDate: "2020-03-21T07:15:24.214Z", companyName: "Beingcodr", designation: "Full-stack developer", address: {streetAddress1: "ramchandra complex", streetAddress2: "Subhash cross road ganeshnagar", city: "Dombivli", state: "Maharashtra", pincode: "421202", country: "India"}, billingAddress: {streetAddress1: "ramchandra complex", streetAddress2: "Subhash cross road ganeshnagar", city: "Dombivli", state: "Maharashtra", pincode: "421202", country: "India"}}) {
    _id
    entity
    username
    fullName
    companyName
    designation
    email {
      email
    }
    password
  }
}


mutation{
  transferBooking(bookingId:"5e8836cbe94a67151cbe054f",userId:"5e904f99b54f4f1908081e31"){
    _id
    promocode
    refundId{
      amountToBeRefunded
    }
    attendeeId{
      fullName
    }
  }
}



mutation {
  addEventPricing(eventId: "5e8db545c9cf08174439ae8e", pricingInput: {tier: "Basic", amount: 100.00, deliverables: ["hahaahah", "lolwa"],isSelected:false, totalTickets: 100})
}

mutation{
  addValidPromocodes(eventId:"5e8db545c9cf08174439ae8e", validPromocodeInput:{promocode:"beingcodr20",discount: 20.00})
}

mutation {
  updateEventPricing(eventId: "5e8db545c9cf08174439ae8e", updatePricingInput: {_id:"5e8db5e8e712890d0045eda1", tier:"Premium",amount:100000,totalTickets:1000, pendingTickets:1000})
}


mutation {
  updateValidPromocodes(eventId: "5e8db545c9cf08174439ae8e", updateValidPromocodeInput: {_id:"5e8db6eee0a0461bbc9d4294",promocode: "beingcodr"})
}

mutation {
  createArtist(artistInput: {type: "Coder", genres: ["React", "GraphQL"], topics: ["GraphQL"], isHidden: true, isFree: false, sort_order: 1, role: headliner, artistAmountInfo: {baseAmount: 1000, totalInstallments: 12}}) {
    _id
    entity
    isFree
    role
    isFree
    isHidden
    sort_order
    genres
    topics
    artistAmountInfo {
      numberOfTicketsForAdults
      numberOfTicketsForChildren
      tier
      baseAmount
      taxInfo {
        _id
        taxName
        taxPercentage
      }
      totalAmount
      discountedAmount
      isPaid
      paidAmount
      pendingAmount
      totalInstallments
    }
  }
}



mutation{
  updateArtist(artistId:"5e95562b0ed6da1cfce99d80",updateArtistInput:{artistAmountInfo:{baseAmount:5000,taxInfo:[{taxName: "CESS",taxPercentage:3}]}}){
    _id
    genres
    topics
    artistAmountInfo{
      baseAmount
      totalAmount
      isPaid
      taxInfo{
        _id
        taxName
        taxPercentage
      }
    }
  }
}




mutation{
  updateArtistTaxInfo(artistId:"5e95562b0ed6da1cfce99d80",taxInfoId:"5e95562b0ed6da1cfce99d81",updateTaxInfo:{taxName:"GST", taxPercentage:18}){
    _id
    genres
    topics
    artistAmountInfo{
      baseAmount
      totalAmount
      isPaid
      taxInfo{
        _id
        taxName
        taxPercentage
      }
    }
  }
}



mutation {
  deleteArtist(artistId: "5e9552bd5d04b11f207a3b69") {
    _id
    entity
    isFree
    role
    isFree
    isHidden
    sort_order
    genres
    topics
    artistAmountInfo {
      numberOfTicketsForAdults
      numberOfTicketsForChildren
      tier
      baseAmount
      taxInfo {
        _id
        taxName
        taxPercentage
      }
      totalAmount
      discountedAmount
      isPaid
      paidAmount
      pendingAmount
      totalInstallments
    }
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

{
  users {
    _id
    fullName
    createdAt
    createdEvents {
      entity
      _id
      title
      creator{
        username
        email{
          email
        }
        fullName
        gender
      }
      slugUri
      summary
      password
    }
  }
}
`;
