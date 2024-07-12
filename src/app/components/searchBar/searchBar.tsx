'use client';
import SVGIcon from '@/app/assets/SVGIcon';
import { MainDiv, SearchDiv, SearchIcon } from './style';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList } from '@/actions/brandActions';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { isEmpty } from '@/helper/common';

interface Props {
  width?: boolean;
  tabletWidth?: boolean;
  isBlogpage?: boolean;
}
const SearchBar: React.FC<Props> = (Props) => {
  const { width, tabletWidth, isBlogpage } = Props;
  const [searchText, setSearchText] = useState<string>('');
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { brandList } = brandSelector;
  const dispatch = useDispatch();

  const onSearchValue = useCallback(
    (searchText: string) => {
      if (!isEmpty(searchText)) {
        const searchNewText = searchText.trim().toLowerCase();
        const words = searchNewText.split(' ').filter((word) => word.length > 0);
        const filteredCard = brandList.filter((card) => {
          const title = card?.title.trim().toLowerCase() || '';
          const key = card?.key;
          return words.some((word) => title.includes(word)) || words.some((word) => key?.includes(word.toLowerCase()));
        });
        dispatch(setFilteredList(filteredCard));
      } else {
        dispatch(setFilteredList(brandList));
      }
    },
    [brandList, dispatch],
  );

  const handleChange = useCallback(
    (value: string) => {
      setSearchText(value);
      setTimeout(() => {
        onSearchValue(value);
      }, 300);
    },
    [onSearchValue],
  );

  return (
    <form>
      <MainDiv tabletWidth={tabletWidth} isBlogpage={isBlogpage}>
        <SearchDiv
          placeholder='Search'
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
          width={width}
          tabletWidth={tabletWidth}
          isBlogpage={isBlogpage}
        />
        <SearchIcon>
          <SVGIcon name='search-icon' width='18' height='18' viewBox='0 0 18 18'></SVGIcon>
        </SearchIcon>
      </MainDiv>
    </form>
  );
};
export default SearchBar;
