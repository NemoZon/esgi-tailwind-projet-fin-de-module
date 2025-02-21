import { Link } from 'react-router';

interface MyArticleProps {
  title: string;
  paragraphs: string[];
  link: { url: string; text: string };
  classes?: string;
}

function MyArticle({ title, paragraphs, link, classes }: MyArticleProps) {
  return (
    <div
      className={`flex flex-x-1 flex-col text-gray bg-gray-800 pt-10 px-32 pb-36 font-raleway border-t-4 border-white ${classes}`}
    >
      <div className="p-8">
        <h2 className="font-light mb-12 text-8xl">{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-24	 text-2xl leading-loose	max-w-2xl">
            {paragraph}
          </p>
        ))}
        <Link to={link.url} className="text-white text-2xl font-bold">
          {link.text}
          <iframe
            width="312"
            className="mt-2"
            src="./ressources/icons/underline.svg"
          />
        </Link>
      </div>
    </div>
  );
}

export default MyArticle;
