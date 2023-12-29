import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
  generates: {
    'src/graphql/generated/graphql.ts': {
      plugins: ['typescript']
    }
  }
};

export default config;
