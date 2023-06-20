import useOnline from "../helper/useOnline";

const Contact = () => {
  const online = useOnline();
  return (
    <>
      <div className="container-flex">
        <h1>Contact Us</h1>
        <p>
          Feel free to contact us at
          <a href="mailto:20je0649@pe.iitism.ac.in">
            {" "}
            20je0649@pe.iitism.ac.in
          </a>
        </p>
        {online ? "✅" : "❌"}
      </div>
    </>
  );
};

export default Contact;
