/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      name
      desc
      createdAt
      messages {
        items {
          id
          username
          payload
          createdAt
          room {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      name
      desc
      createdAt
      messages {
        items {
          id
          username
          payload
          createdAt
          room {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      name
      desc
      createdAt
      messages {
        items {
          id
          username
          payload
          createdAt
          room {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      username
      payload
      createdAt
      room {
        items {
          id
          name
          desc
          createdAt
          messages {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      username
      payload
      createdAt
      room {
        items {
          id
          name
          desc
          createdAt
          messages {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      username
      payload
      createdAt
      room {
        items {
          id
          name
          desc
          createdAt
          messages {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
