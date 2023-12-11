import { useState } from 'react';
import PageBanner from '@/src/components/PageBanner';
import Layouts from '@/src/layouts/Layouts';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/system';

import SnackbarFeedback from '../components/feedback/Feedback';
import CircularProgress from '../components/feedback/CircularProgress';

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    title: '',
    description: '',
    icon: '',
    colorIcon: '',
  });
  return (
    <Layouts
      rightPanelBackground={'/assets/images/person/bg-2.jpg'}
      rightPanelImg={'/assets/images/person/7.png'}
    >
      <PageBanner
        pageTitle={'Get in touch!'}
        align={'center'}
        breadTitle={'Contact'}
      />

      {/* snackbar */}
      <SnackbarFeedback content={openSnackbar} setOpen={setOpenSnackbar} />

      {/* info */}
      <div>
        <ul className="mil-puplication-details mil-up mil-mb-90">
          <li>
            <span className="mil-upper mil-accent">Call: </span>&nbsp;&nbsp;
            <span className="mil-upper mil-dark">+55 (11) 99624-0704</span>
          </li>
          <li>
            <span className="mil-upper mil-accent">Write: </span>&nbsp;&nbsp;
            <span className="mil-upper mil-dark">arra347@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* map */}
      {/* <div className="mil-map mil-mb-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
      {/* map end */}

      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>Let&apos;s Talk</h3>
      </div>

      <div id="contact" className="mil-p-90-60">
        <Formik
          initialValues={{ email: '', name: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Must be 3 characters or more')
              .required('Please, tell me your name'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Enter your best email'),
            message: Yup.string()
              .min(20, 'Must be 20 characters or more')
              .required('Give me some feedback, please'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams({
                'form-name': 'contactForm',
                ...values,
              }).toString(),
            })
              .then((response) => {
                console.log(response);
                if (response.ok) {
                  setOpenSnackbar({
                    open: true,
                    title: 'Form Submitted',
                    description: 'Thank you very much for your message!',
                    icon: 'fa-light fa-check',
                    colorIcon: '#66bb6a',
                  });
                  resetForm();
                } else {
                  console.error('Error submitting form: ', response);
                  setOpenSnackbar({
                    open: true,
                    title: 'We had a problem',
                    description:
                      'An error occurred while sending your message!',
                    icon: 'fa-light fa-circle-exclamation',
                    colorIcon: 'rgb(230, 154, 147)',
                  });
                }
              })
              .catch((error) => {
                console.error('Error submitting form:', error);
                setOpenSnackbar({
                  open: true,
                  title: 'We had a problem',
                  description: 'An error occurred while sending your message!',
                  icon: 'fa-light fa-circle-exclamation',
                  colorIcon: 'rgb(230, 154, 147)',
                });
              })
              .finally(() => setSubmitting(false));
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              className="row align-items-center"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="col-lg-6 mil-up">
                <Field
                  id="name"
                  type="text"
                  placeholder="What's your name"
                  name="name"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="error-message-form"
                />
              </div>
              <Box sx={{ m: 3 }} />
              <div className="col-lg-6 mil-up">
                <Field
                  id="email"
                  type="text"
                  placeholder="Your best email"
                  name="email"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="error-message-form"
                />
              </div>
              <Box sx={{ m: 3 }} />
              <div className="col-lg-12 mil-up">
                <Field
                  as="textarea"
                  id="message"
                  placeholder="Give me some feedback"
                  name="message"
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="error-message-form"
                />
              </div>
              <Box sx={{ m: 5 }} />
              <div className="col-lg-8">
                <p className="mil-up mil-mb-30">
                  <span className="mil-accent">*</span> We promise not to
                  disclose your personal information to third parties.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="mil-adaptive-right mil-up mil-mb-30">
                  <button
                    type="submit"
                    className="mil-btn mil-sm-btn"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? <CircularProgress /> : 'Send message'}
                    </span>
                  </button>
                </div>
              </div>
              <div className="form-status" id="contactFormStatus" />
              <div data-netlify-recaptcha="true" />
            </form>
          )}
        </Formik>
      </div>
    </Layouts>
  );
};
export default Contact;
