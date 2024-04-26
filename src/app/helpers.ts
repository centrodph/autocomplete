import { MenuItemNamespace } from 'packages/menuitem/src/lib/types';
import { OpenLibraryNameSpace } from './types';

export const parseSearchResponseToOption = (
  searchResult: OpenLibraryNameSpace.ResultSearch
): MenuItemNamespace.MenuOption[] => {
  return searchResult.docs.map((doc) => {
    return {
      label: `${doc.title} - ${doc.author_name?.join(
        ','
      )}`,
      value: doc.key,
    };
  });
};
