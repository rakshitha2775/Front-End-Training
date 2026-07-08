function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
  }

  return (
    <section className="section page text-page">
      <span className="tag">Contact Us</span>
      <h2>Have a question?</h2>
      <p>Send us a message and our team will get back to you soon.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea rows="5" placeholder="Your message" required></textarea>
        <button type="submit" className="btn primary-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;