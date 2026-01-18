import site from '../content/site'

export default function Contact() {
  const { contactSection, contact, company, layoutUsage } = site
  const { contact: contactLayout } = layoutUsage

  const handleSubmit = (event) => {
    if (contactSection.form.submitBehavior === 'mock') {
      event.preventDefault()
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div
        className={`container container--${contactLayout.width} gutter--${contactLayout.gutter}`}
      >
        <div className="section-heading">
          <h2>{contactSection.sectionTitle}</h2>
          <p className="section-intro">{contactSection.sectionText}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <p className="contact-company">{company.name}</p>
            <p className="contact-location">{company.location}</p>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
                {contact.phone}
              </a>
            </div>
          </div>
          {contactSection.form.enabled ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{contactSection.form.fields.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={contactSection.form.fields.namePlaceholder}
                />
              </label>
              <label>
                <span>{contactSection.form.fields.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={contactSection.form.fields.emailPlaceholder}
                />
              </label>
              <label>
                <span>{contactSection.form.fields.messageLabel}</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder={contactSection.form.fields.messagePlaceholder}
                />
              </label>
              <button type="submit">{contactSection.form.fields.submitText}</button>
              <p className="form-disclaimer">
                {contactSection.form.disclaimerText}
              </p>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  )
}
