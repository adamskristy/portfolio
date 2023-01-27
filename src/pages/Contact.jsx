function Contact() {
    return (
      <div className="container py-6 ">
        <div className="section px-6">
          <span className="title">Contact</span>
          <form
            name="contact"
            action="mailto:kladams128@gmail.com"
            method="post"
            encType="text/plain"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="box mt-6 p-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input type="submit" value="Send" className="button is-primary" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  