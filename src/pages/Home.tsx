import MyArticle from '../components/MyArticle';

const articles = [
  {
    title: 'About me',
    paragraphs: [
      'My work is informed by extensive knowledge of communication, psychology and organization theories and research. I work through an interdisciplinary lens.',
      'Certified with distinction in Coaching Individuals, Teams, and Organizations by a reputable business school.',
      'Through the use of innovative methods I support professionals to foster their creativity, and develop their potential in public speaking, interpersonal communication and team collaboration.',
    ],
    link: {
      url: '#',
      text: 'MORE ABOUT ME +',
    },
  },
  {
    title: 'About you',
    paragraphs: [
      'You are a busy professional who wants to share ideas more freely, communicate them with an impact, feel seen, and be rewarded.',
      'You are  an HR manager searching for personalized human development approaches that are realistic, go beyond reified skills checkboxes, and produce sustainable results at the individual, team, and organizational levels.',
      'You are a forward looking organization that fosters diversity, nurtures collective intelligence, and cares for its people.',
    ],
    link: {
      url: '#',
      text: 'MORE ABOUT YOUR NEEDS +',
    },
  },
];

function Home() {
  return (
    <>
      <section className="mt-14 relative">
        <div className="mt-14 bg-meeting w-full h-845px relative bg-cover opacity-25" />
        <div className="flex gap-5 justify-center absolute bottom-0 w-full">
          <img
            src="./ressources/images/eva_johnson_home.png"
            alt="Eva Johnson"
            className="w-619px"
          />
          <article className="flex flex-col justify-center gap-9 max-w-3xl items-center">
            <h1 className="text-6xl font-bold text-white text-center font-raleway">
              I coach diverse teams to collaborate better.
            </h1>
            <p className="bg-vibrantorange text-5xl font-light font-raleway text-center text-white border-4 rounded-full px-10 w-max py-4">
              Are you concerned?
            </p>
            <iframe width="424" src="./ressources/icons/underline.svg" />
          </article>
        </div>
      </section>
      <section className="flex text-gray-100 bg-gray-800 font-raleway relative">
        <MyArticle
          classes="border-r-0 pb-0"
          link={articles[0].link}
          title={articles[0].title}
          paragraphs={articles[0].paragraphs}
        />
        <div className="size-24	bg-vibrantorange rounded-full absolute right-1/2 -translate-y-1/2	translate-x-1/2	z-10" />
        <MyArticle
          classes="bg-grayblue relative -top-20 border-r-0 border-l-4 h-full pb-40"
          link={articles[1].link}
          title={articles[1].title}
          paragraphs={articles[1].paragraphs}
        />
      </section>
      <section className="relative -top-20">
        <div className="flex text-gray-100 bg-gray-800 font-raleway relative">
          <div className="flex-1" />
          <div className="flex-1 rounded-bl-100% border-t-250px border-transparent bg-grayblue"></div>
        </div>
        <div className="-translate-y-64 relative">
          <img
            className="z-10 relative w-full"
            src="./ressources/icons/arc.svg"
            alt="arc"
          />
          <h1 className="text-transparent outlined-text font-bold absolute top-20 left-72 text-10xl z-20">
            Working
          </h1>
          <h1 className="text-papyrus font-bold text-10xl absolute top-20 left-72 z-0">
            Working
          </h1>
          <h1 className="text-papyrus font-bold text-10xl absolute top-72 right-96 z-0">
            Together
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-center text-white italic font-raleway font-thin ml-4">
              Although the coaching plan looks like a linear progression, in
              reality it is an iterative process that allows for ongoing
              evaluation and readjustment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
