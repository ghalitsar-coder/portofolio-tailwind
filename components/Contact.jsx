import React from "react";

const InputField = ({ type, label }) => (
  <div className="w-full px-4 mb-8">
    <label htmlFor={label} className="text-base font-bold text-gradient">
      {label}
    </label>
    {type !== "textarea" ? (
      <input
        type={type}
        id={label}
        className={`w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gradient focus:border-gradient  `}
      />
    ) : (
      <textarea
        className={`w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gradient focus:border-gradient ${
          type === "textarea" && "h-32"
        } `}
      ></textarea>
    )}
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container font-poppins">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16 ">
            <h4 className="font-semibold md:text-xl text-lg text-gradient mb-2">
              Contact
            </h4>
            <h2 className="font-bold md:text-4xl text-dark text-3xl mb-4">
              Contact Us!
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, ab officia eos exercitationem accusamus doloribus
              quisquam?
            </p>
          </div>
        </div>

        <form className="w-full lg:w-2/3 mx-auto">
          <InputField type="text" label="Name" />
          <InputField type="email" label="email" />
          <InputField type="textarea" label="Message" />
          <div className="w-full  px-4">
            <button className="text-base font-semibold   text-dark border-2 border-gradient transition duration-300 ease-in-out  bg-white py-3 px-8 rounded-full w-full  ">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
