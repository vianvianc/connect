const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Parent {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    age: Int
    child: [Child]
  }

  type Child {
    _id: ID
    firstName: String!
    lastName: String!
    age: Int!
    interests: [String]
    gender: String
  }
  type Event {
    _id: ID
    name: String!
    location: String!
    time: Int
    date: String
    isFeatured: Boolean
    preparationTips: String
    eventDetails: String
    attendees: [Parent]
  }
  type Weekly {
    tableTopics: String
    quoteDay: String
    author:String
  }
  type Query {
    parents: [Parent]!
    singleParent(email: String!): Parent
    events: [Event]!
    singleEvent(id: ID!): Event
    weekly: [Weekly]!
  }

  type Auth {
    token: ID
    parent: Parent
  }

  type Mutation {
    createParent(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int!
      child: String
    ): Auth
    createChild(
      firstName: String!
      lastName: String!
      age: Int
      interests: [String]
      gender: String
      parentId: ID
    ): Child

    createEvent(
      name: String!
      location: String!
      time: Int!
      date: String!
      preparationTips: String
      isFeatured: Boolean
      eventDetails: String
      attendees: [ID]
    ): Event

    addParentToEvent(eventId: ID!, parentId: ID!): Event

    logIn(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
