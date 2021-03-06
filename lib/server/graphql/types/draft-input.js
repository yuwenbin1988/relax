import GraphQLJSON from 'graphql-type-json';
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLID
} from 'graphql';

const draftInputType = new GraphQLInputObjectType({
  name: 'DraftInput',
  fields: {
    _id: {
      type: GraphQLID
    },
    itemId: {
      type: GraphQLID
    },
    userId: {
      type: GraphQLID
    },
    __v: {
      type: GraphQLInt
    },
    data: {
      type: GraphQLJSON
    },
    actions: {
      type: GraphQLJSON
    },
    schemaLinks: {
      type: GraphQLJSON
    }
  }
});

export default draftInputType;
