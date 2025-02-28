function AboutMe() {
  return (
    <>
      <section className="relative">
        <img
          src="./ressources/images/gymnasium_meet.png"
          alt="Coaching Session"
          className="w-full h-auto"
        />

        <div className="absolute bottom-0 left-8 bg-vibrantorange text-white px-20 rounded-full text-9xl font-squarepeg shadow-lg border-4 border-papyrus">
          <span className="transform -translate-x-1/2">About me!</span>
        </div>
      </section>

      <section className="mx-auto px-6 py-16 space-y-12 bg-papyrus font-raleway text-black flex justify-center">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mx-16">
            <div>
              <p className="mt-4">
                My work is informed by extensive knowledge of communication,
                psychology, and organization theories and research. I work
                through an interdisciplinary lens.
              </p>
              <h2 className="text-2xl font-bold">A Personal Approach</h2>
              <p className="mt-4">
                In my coaching practice, I prioritize a personalized and
                tailored approach to help you achieve your goals. By
                understanding your unique strengths, challenges, and
                aspirations, I work closely with you to develop a customized
                plan that aligns with your individual needs.
              </p>
              <p className="mt-4">
                Through one-on-one sessions, we will explore your potential,
                address obstacles, and foster growth in a way that is meaningful
                and impactful to you. Your journey towards personal and
                professional development is important to me, and I am committed
                to guiding and supporting you every step of the way.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Knowledge</h2>
              <p className="mt-4">
                As a professional coach, I firmly believe in the power of
                knowledge as the cornerstone of personal and professional
                growth.
              </p>
              <p className="mt-4">
                Trained and certified with distinction in Coaching Individuals,
                Teams, and Organizations. Through the use of innovative methods
                I support learners to foster their creativity, and develop their
                potential in public speaking, interpersonal communication, and
                team collaboration.
              </p>
            </div>
          </div>

          <div className="mx-16">
            <h2 className="text-2xl font-bold">Personalization</h2>
            <p className="mt-4">
              Lived in 2 different continents, 3 different countries, 5
              different cities, and many lives. If I were to draw my journey, it
              would not look like a straight line. It would look like the
              branches of a tree: the entrepreneur branch, the artist branch,
              the writer, the yogi, the dancer. I bring to work my whole self,
              the entire tree, with all the lessons learned.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-darkblue text-white py-16 p-8">
        <div className="container mx-auto">
          <h2 className="text-7xl font-bold font-raleway mb-12 text-papyrus">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6 m-12 py-10 px-6">
            <div className="bg-grayblue p-16 shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-8">
              <p className="italic text-center">
                "true gem in the world of coaching. Her couragement have
                empowered me to es and step into my authentic self. I am sitive
                impact she has had on my journey."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-squarepeg text-6xl">Shaw Law</p>
                  <p className="text-sm">Journalist</p>
                </div>
                <img
                  src="./ressources/images/person_3.png"
                  alt="Steven S"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>

            <div className="bg-grayblue p-16 shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-8">
              <p className="italic text-center">
                "Working with Eva Johnson has been a transformative experience.
                Her guidance and support have helped me unlock my full potential
                and achieve my goals with confidence."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-squarepeg text-6xl">Steven S</p>
                  <p className="text-sm">Journalist</p>
                </div>
                <img
                  src="./ressources/images/person.jpg"
                  alt="Steven S"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>

            <div className="bg-grayblue p-16 shadow-lg cursor-pointer transform transition duration-300 hover:-translate-y-8">
              <p className="italic text-center">
                " Eva s coaching style is not only motivating but also deeply
                insightful. She has a unique ability to challenge me to grow
                while providing a safe space for self discovery and reflection "
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-squarepeg text-6xl">Sarah J</p>
                  <p className="text-sm">Architect</p>
                </div>
                <img
                  src="./ressources/images/person_2.png"
                  alt="Steven S"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="/"
              className="flex items-center text-lg font-bold text-white hover:underline"
            >
              {'<<<'} Back to main page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
