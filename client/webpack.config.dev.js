module.exports = {
  module: {
          loaders: [
              {
                test: /\.(graphql|gql)$/,
                loader: require.resolve('graphql-tag/loader'),
              }
          ]
      }
};