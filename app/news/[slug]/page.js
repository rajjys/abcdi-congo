// Created by: Jonathan Idy
// Date: 10-05-25
// This is the page that will be rendered when a user visits the news item page
// It will fetch the news item data from the GraphCMS and display it
// It will also include a social media sharing banner and a rich text viewer for the news item description
import RichTextViewer from '@/app/components/RichTextViewer';
import SocialBanner from '@/app/components/SocialBanner';
import { fetchNewsItem } from '@/app/services/graphcms';
import { formatDate } from '@/app/utils/format';
import Image from 'next/image';



const NewsPage = async ({ params }) => {
  const { slug } = await params; // Extract the slug from the URL
  const newsItem = await fetchNewsItem(slug);
  const shareUrl = `https://abcdi.org/news/${slug}`;
  const shareText = encodeURIComponent(newsItem.title);
  console.log(newsItem)
  if (!newsItem) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">News item not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <section className="relative mb-8">
        <div className="relative flex justify-center h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] mb-8">
          <Image
            src={newsItem.profile.url}
            alt={newsItem.title}
            width={800}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/60 to-transparent"></div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 left-4 sm:left-8 md:left-12 text-white  w-full max-w-4xl">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {newsItem.title}
            </p>
              <div className="text-sm sm:text-base md:text-lg mt-2 text-gray-400">
                <span className="">{newsItem.author}</span>
                <span className="mx-2 sm:mx-4 md:mx-6">|</span>
                <span className=''>{newsItem.place}</span>
                <span className="mx-2 sm:mx-4 md:mx-6">|</span>
                <span className="">{formatDate(newsItem.date)}</span>
              </div>
            </div>
        </div>
      </section>
      <section className='container mx-auto px-4 sm:px-8 lg:px-16 mb-8 pb-8'>
          {/* Social Media Links */}
          <SocialBanner shareUrl shareText />
          <div className="prose dark:prose-invert max-w-none margin-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Render the rich text content */}
          <RichTextViewer description={newsItem.description} title = {newsItem.title}/>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;