import React from 'react';
import type { AutocompleteNamespace } from '@centrodphlibs/autocomplete';
import { OpenLibraryNameSpace } from './types';
import { parseSearchResponseToOption } from './helpers';

export const useAppDemo = () => {
  const apiController = React.useRef<AbortController>(new AbortController());
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState<string>('');
  const [options, setOptions] =
    React.useState<AutocompleteNamespace.AutocompleteProps['options']>(null);
  const [selectedOption, setSelectedOption] =
    React.useState<AutocompleteNamespace.AutocompleteOption | null>(null);

  React.useEffect(() => {
    const apiSearchCall = async () => {
      if (apiController.current)
        apiController.current.abort('abort previous call');
      apiController.current = new AbortController();
      setIsLoading(true);
      setOptions([]);
      setError(null);
      try {
        const response = await fetch(
          `http://openlibrary.org/search.json?q=${search.replace(' ', '+')}`,
          { signal: apiController.current.signal }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: OpenLibraryNameSpace.ResultSearch = await response.json();
        setOptions(parseSearchResponseToOption(data));
        setIsLoading(false);
      } catch (error) {
        if (String(error).includes('AbortError')) return;
        setError(String(error));
        setIsLoading(false);
      }
    };
    if (search && search.length > 4) apiSearchCall();
  }, [search]);

  const onSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const search = event.target.value;
      setSearch(search);
    },
    []
  );

  return {
    isLoading,
    error,
    options,
    selectedOption,
    search,
    setSelectedOption,
    onSearch,
  };
};
