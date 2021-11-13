import { GraphQLClient } from 'graphql-request';

const { API_URL } = process.env;
const { DATOCMS_API_TOKEN } = process.env;

export function datoCmsRequest(
  query: string,
  variables?: any,
  preview?: boolean
) {
  const endpoint = preview ? `${API_URL}preview` : API_URL;

  const client = new GraphQLClient(endpoint as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${DATOCMS_API_TOKEN as string}`,
    },
  });

  return client.request(query, variables);
}
