/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
