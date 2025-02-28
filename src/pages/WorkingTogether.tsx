function WorkingTogether() {
  return (
    <section className="relative w-full">
      <img className="w-full" src="./ressources/images/hands.png" alt="hands" />

      <div className="bg-darkblue text-white py-10 px-6 md:px-20 relative">
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="flex items-center mb-12 flex-col md:flex-row">
            <div className="absolute transform top-[-150px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-vibrantorange text-white text-4xl md:text-6xl font-squarepeg py-3 px-6 rounded-full border-2 text-center">
              Working together
            </div>
            <div className="w-[30px] hidden md:block">
              <div className="w-[2px] bg-white h-12"></div>
            </div>
            <p className="italic text-lg text-center md:text-left mt-8 md:mt-0 md:ml-4">
              Our working relationship is a partnership based on mutual
              commitment and trust.
            </p>
          </div>

          <div className="relative space-y-8">
            <div className="flex flex-col items-center md:items-start md:flex-row">
              <div className="w-[50px] flex justify-center mb-4 md:mb-0">
                <img
                  src="./ressources/icons/target.svg"
                  alt="Clarify your goals Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h3 className="text-white font-bold text-xl italic">
                  Clarify your goals
                </h3>
                <p className="mt-2 text-gray-300 mx-auto md:mx-0 max-w-md md:max-w-none">
                  What do you want to achieve? Sometimes the goal is clear and
                  loud, sometimes it is dissimulated.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row">
              <div className="w-[50px] flex justify-center mb-4 md:mb-0">
                <img
                  src="./ressources/icons/world.svg"
                  alt="Explore the possibilities Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h3 className="text-white font-bold text-xl italic">
                  Explore the possibilities
                </h3>
                <p className="mt-2 text-gray-300 mx-auto md:mx-0 max-w-md md:max-w-none">
                  What kind of solutions are readily available to you? How can
                  you reframe the problems to reveal new possibilities?
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row">
              <div className="w-[50px] flex justify-center mb-4 md:mb-0">
                <img
                  src="./ressources/icons/planet.svg"
                  alt="Assess the reality of your situation Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h3 className="text-white font-bold text-xl italic">
                  Assess the reality of your situation
                </h3>
                <p className="mt-2 text-gray-300 mx-auto md:mx-0 max-w-md md:max-w-none">
                  How far is your goal from where you are now? What are the
                  obstacles on the path from where you are to where you want to
                  go?
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row">
              <div className="w-[50px] flex justify-center mb-4 md:mb-0">
                <img
                  src="./ressources/icons/notes.svg"
                  alt="Plan your next steps Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h3 className="text-white font-bold text-xl italic">
                  Plan your next steps
                </h3>
                <p className="mt-2 text-gray-300 mx-auto md:mx-0 max-w-md md:max-w-none">
                  What do you need to do to make it happen? How will you
                  motivate yourself to stay on track?
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-12 mt-8 flex-col md:flex-row">
            <div className="w-[30px] hidden md:block">
              <div className="w-[2px] bg-white h-12"></div>
            </div>
            <p className="italic text-lg text-center md:text-left mt-4 md:mt-0 md:ml-4">
              Although the coaching plan looks like a linear progression, in
              reality it is an iterative process that allows for ongoing
              evaluation and readjustment
            </p>
          </div>

          <div className="flex items-center mb-12 mt-8 flex-col md:flex-row">
            <div className="w-[30px] hidden md:block">
              <div className="w-[2px] bg-vibrantorange h-12"></div>
            </div>
            <p className="italic text-lg text-center md:text-left mt-4 md:mt-0 md:ml-4">
              Together we work to clarify your goals, identify the obstacles on
              your path and open up the field of possibilities to move forward.
              I help you draw a realistic roadmap and set yourself in action.
            </p>
          </div>

          <div className="text-center md:text-left">
            <a className="font-bold cursor-pointer">
              {' '}
              &laquo;&laquo;&laquo; Back to main page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingTogether;
