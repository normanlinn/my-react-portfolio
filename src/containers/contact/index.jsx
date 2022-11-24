import PageHeaderContent from "../../components/PageHeaderContent";
import { RiContactsLine } from "react-icons/ri";
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        title="contact me"
        icon={<RiContactsLine size={30} />}
      />
      <div className="contact-content">
        <h3 className="header-text">let’s talk</h3>
        <div className="contact-form">
          <div className="contact-form-controlsWrapper">
            <div className="name-wrapper">
              <input name="name" type="text" className="inputName" />
              <label htmlFor="name" className="nameLbl">
                name
              </label>
            </div>
            <div className="email-wrapper">
              <input name="email" type="text" className="inputEmail" />
              <label htmlFor="email" className="emailLbl">
                email
              </label>
            </div>
            <div className="description-wrapper">
              <textarea
                name="description"
                className="inputDescription"
                type="text"
                rows={"5"}
                style={{ resize: "none" }}
              />
              <label htmlFor="description" className="descriptionLbl">
                description
              </label>
            </div>
          </div>
          <div>
            <button className="btnSubmit">submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
