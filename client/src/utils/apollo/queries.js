import { gql } from "@apollo/client";

// For all Events

export const ALL_EVENTS = gql`
query Events {
  events {
    _id
    name
    location
    time
    date
    preparationTips
    isFeatured
    eventDetails
    attendees {
      firstName
      lastName
    }
  }

}
`;


// For home page first card
export const WEEKLY = gql`
  query allWeeklies {
    weekly {
      tableTopics
      quoteDay
      author
    }
  }
`;

