'use client';

import Link from 'next/link';
import { BlogHeader, Heading, LinkOption, Options, Tab, TabDiv, Top } from './style';
import SearchBar from '../searchBar/searchBar';

interface Props {
  title: string;
  isdetail?: boolean;
}
const BlogSectionHeader: React.FC<Props> = (Props) => {
  const { title, isdetail } = Props;
  return (
    <>
      <Top>
        <BlogHeader className={isdetail ? 'newsletter-detail' : ''}>
          <Heading>{title}</Heading>
        </BlogHeader>
        {!isdetail && (
          <TabDiv>
            <Tab>
              <Link href={''}>
                <LinkOption isactive={true}>New</LinkOption>
              </Link>
              <Link href={''}>
                <LinkOption>Newsletters</LinkOption>
              </Link>
              <Link href={''}>
                <LinkOption>News</LinkOption>
              </Link>
              <Link href={''}>
                <LinkOption>Resources</LinkOption>
              </Link>
            </Tab>
            <SearchBar width={true}  isBlogpage={true}/>
          </TabDiv>
        )}
      </Top>
    </>
  );
};
export default BlogSectionHeader;
