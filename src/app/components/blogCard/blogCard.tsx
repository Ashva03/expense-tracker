'use client';
import { BlogContent, BlogImage, BlogLink, BlogText, CardDiv, RightArrow, Time, Title } from './style';
import SVGIcon from '@/app/assets/SVGIcon';

interface Props {
  image: string;
  title: string;
  time: string;
}
const BlogCard: React.FC<Props> = (Props) => {
  const { image, title, time } = Props;
  return (
    <>
      <CardDiv href={'/newsletter/xdcuy'}>
        <BlogImage>
          <img src={image} alt='blog image' width={384} height={260} className='blogimg' />
        </BlogImage>
        <BlogContent>
          <BlogText>
            <Time>{time}</Time>
            <Title>{title}</Title>
          </BlogText>
          <BlogLink>
            <span>Read More</span>
            <RightArrow>
              <SVGIcon name='right-icon' width='16' height='16' viewBox='0 0 16 16' />
            </RightArrow>
          </BlogLink>
        </BlogContent>
      </CardDiv>
    </>
  );
};
export default BlogCard;
