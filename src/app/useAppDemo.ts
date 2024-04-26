import React from 'react';
import type { AutocompleteNamespace } from '@centrodphlibs/autocomplete';
import { OpenLibraryNameSpace } from './types';
import { parseSearchResponseToOption } from './helpers';

export const useAppDemo = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [options, setOptions] =
    React.useState<AutocompleteNamespace.AutocompleteProps['options']>(null);
  const [selectedOption, setSelectedOption] =
    React.useState<AutocompleteNamespace.AutocompleteOption | null>(null);

  React.useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      setOptions([]);
      try {
        const response = await fetch(
          'http://openlibrary.org/search.json?q=the+lord+of+the+rings'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: OpenLibraryNameSpace.ResultSearch = await response.json();
        setOptions(parseSearchResponseToOption(data));
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    };
    search();
  }, []);

  return {
    isLoading,
    error,
    options,
    selectedOption,
    setSelectedOption,
  };
};
