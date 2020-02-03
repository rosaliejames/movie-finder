import * as React from 'react';

const SEARCH_DELAY_MS = 500;

export function useDebouncedSearch<T>(
  onSearch: (searchTerm: string, page?: number) => Promise<T>,
) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState<T>();

  React.useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchTerm).then(setResults);
    }, SEARCH_DELAY_MS);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const onChangeSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return {
    searchTerm,
    onChangeSearchTerm,
    results,
    setResults,
  };
}
