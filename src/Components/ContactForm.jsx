import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const subject = "Contact Form Submission";
    const body = Array.from(formData)
      .map((field) => `${field[0]}: ${field[1]}`)
      .join("\n");

    window.location.href = `mailto:anushachennamsetti16@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setIsSent(true);
    alert("Thank you! Your message has been sent.");
    form.current.reset();
  };

  return (
    <div
      className="justify-center"
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
        width: "100%",
        height: "95%",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["LET'S GET IN TOUCH!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-primary-200"
        >
          <div className="w-full flex flex-col">
            <label
              htmlFor="firstname"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              First Name
            </label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Enter your First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          
          <div className="w-full flex flex-col">
          <label htmlFor="email" style={{ fontWeight: 'bold', fontSize: '18px' }}>E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
          <label htmlFor="message" style={{ fontWeight: 'bold', fontSize: '18px' }}>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950 bac bg-primary-200"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-400 rounded-xl cursor-pointer hover:bg-primary-700 mb-5"
              type="submit"
              value={!isSent ? "Send" : "Done!"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
