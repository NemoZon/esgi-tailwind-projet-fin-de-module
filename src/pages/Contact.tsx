import Icons from '../components/Icons';

function Contact() {
  return (
    <>
      <section className="contact-content flex flex-col md:flex-row">
        <div className="form-container p-8 md:w-1/2">
          <div className="text-container text-4xl font-bold mb-8">
            Let's Work
            <br />
            together
          </div>
          <form className="space-y-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Your name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
            />

            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />

            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>

            <button
              type="submit"
              className="w-full p-2 bg-vibrantorange text-white font-bold rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="image-container p-8 md:w-1/2 flex flex-col items-center">
          <img
            className="back w-full"
            src="./ressources/images/vector_1.svg"
            alt="Background Vector"
          />
          <img
            className="w-full my-4"
            src="./ressources/images/eva_johnson_contact.png"
            alt="Contact Image"
          />
          <img
            className="front w-full"
            src="./ressources/images/vector_2.svg"
            alt="Foreground Vector"
          />
          <Icons />
        </div>
      </section>
      <div className="back-section text-center mt-8">
        <a href="/" className="text-vibrantorange font-bold">
          Back to main page
        </a>
      </div>
    </>
  );
}

export default Contact;
