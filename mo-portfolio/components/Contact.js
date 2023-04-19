const Contact = () => {
  return (
    <section className="contact-section light-background" data-aos="zoom-in">
      <h1>Reach out!</h1>
      <p>Feel free to drop a message or arrange a coffee chat with me</p>
      <form>
        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">Name</label>
          <input type="text" id="form4Example1" placeholder="enter your full name..." className="form-control" />
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">Email address</label>
          <input type="email" id="form4Example2" placeholder="enter your best email..." className="form-control" />
        </div>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">Message</label>
          <textarea className="form-control" id="form4Example3" placeholder="drop a message or let me know your available timeslots..." rows="4"></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn  btn-block mb-4">submit</button>
      </form>
    </section>
  );
};

export default Contact;