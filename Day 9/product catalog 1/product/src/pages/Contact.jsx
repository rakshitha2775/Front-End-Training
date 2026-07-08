function Contact() {
  return (
    <section className="section page text-page">
      <p className="eyebrow">Contact</p>
      <h2>Get in touch</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea rows="5" placeholder="Your message"></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;