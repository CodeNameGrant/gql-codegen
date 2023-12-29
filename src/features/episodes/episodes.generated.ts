import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EpisodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type EpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', results?: Array<{ __typename?: 'Episode', episode?: string | null, name?: string | null } | null> | null } | null };


export const EpisodesDocument = gql`
    query Episodes {
  episodes {
    results {
      episode
      name
    }
  }
}
    `;

/**
 * __useEpisodesQuery__
 *
 * To run a query within a React component, call `useEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
      }
export function useEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export function useEpisodesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export type EpisodesQueryHookResult = ReturnType<typeof useEpisodesQuery>;
export type EpisodesLazyQueryHookResult = ReturnType<typeof useEpisodesLazyQuery>;
export type EpisodesSuspenseQueryHookResult = ReturnType<typeof useEpisodesSuspenseQuery>;
export type EpisodesQueryResult = Apollo.QueryResult<EpisodesQuery, EpisodesQueryVariables>;