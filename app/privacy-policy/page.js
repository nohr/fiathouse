import React from "react";
import styles from "./privacyPolicy.module.scss";

export const metadata = {
  title: "Fiat House | Privacy Policy",
  description:
    "Make your move! Our sustainable community features unparalleled accessibility, ride-sharing mobility, and indulgent amenities in a prime location. ",
};

function PrivacyPolicyPage() {
  return (
    <div className={styles.pagecontent}>
      <div className={styles.page}>
        <header>
          <svg
            id="a"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 608.6 620.34"
          >
            <path
              d="m260.3.04h133.3c1.2-.2,1.9.4,2.4,1.5,2.7,5.7,5.5,11.3,8.1,17.1,11.6,26.2,19.7,53.5,25.8,81.4,3.3,15.2,6.1,30.4,8.3,45.8,1.6,11,3,22.1,4.2,33.2,1.3,12.1,2.5,24.1,3.4,36.2,1,12.7,1.8,25.4,2.4,38.1.8,18.4,1.5,37,2.1,55.4.4,12.8.5,25.6.7,38.4.2,34.2.4,68.5.6,102.8,0,3,0,5.9.1,8.9v2.2h-59.9c0-.9-.1-1.7-.1-2.5-.1-32.9,0-65.8-.4-98.8-.2-24.7-1-49.4-1.6-74.1-.3-10.7-.9-21.5-1.3-32.1,0-.4-.1-.8-.1-1.4h-70.4v208.9h-57.2c-.9-1.6-.9-458.2-.4-461m57.4,55.8v141.1h66.1c0-.7,0-1.3-.1-1.9-.9-8.4-1.7-16.9-2.8-25.3-2-15.6-4.4-31.2-7.5-46.7-3.9-19.4-8.6-38.5-15-57.2-1.1-3.4-2.4-6.8-3.7-10.1l-37,.1h0Z"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m0,.14h134.7c.5,1.7.6,52.1.2,55.5h-70.8v141.3c2.5.1,51.5,0,54,0,.5,1.7.7,50.1.2,54.9h-53.9q-.2.2-.3.2s-.1.1-.1.2-.1.3-.1.4v.4c0,69.1,0,138.2-.1,207.3q0,.1-.1.4H.1V.14h-.1Z"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m493.9,55.74h-50.9V.24h165.6v55.5h-50.2v405.2h-63.9s-.2-270-.2-404.2v-.4q-.1-.1-.4-.6"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m225.4,461.14h-65.7s-.1-.1-.2-.2c0,0-.1-.1-.1-.2,0-153-.1-306-.1-459,0-.4,0-.8.1-1.3,1.8-.5,63.7-.6,66-.1v460.8Z"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m211,574.74c-2.8,5.5-6.8,9.8-11.7,12.8h0c-5,3-10.9,4.5-17.5,4.5s-12.6-1.5-17.6-4.5c-5-2.9-9-7.2-11.8-12.7-2.9-5.6-4.3-12.3-4.3-19.8s1.4-14.1,4.3-19.7c2.8-5.5,6.8-9.7,11.8-12.6,5.1-2.9,11-4.4,17.6-4.4s12.5,1.5,17.5,4.4,8.9,7.1,11.7,12.6c2.9,5.6,4.3,12.2,4.3,19.7s-1.4,14.1-4.3,19.7m-5.2-61.9c-7.2-4.1-15.3-6.2-24.1-6.2s-16.7,2.1-24,6.2c-7.3,4.1-13.1,9.9-17.3,17.3-4.2,7.3-6.4,15.7-6.4,24.9s2.2,17.7,6.4,25c4.3,7.3,10.1,13.1,17.3,17.3,7.2,4.1,15.3,6.2,24,6.2s16.7-2.1,24-6.2c7.3-4.1,13.1-9.9,17.3-17.3,4.2-7.3,6.3-15.7,6.3-25s-2.1-17.5-6.3-24.9c-4.2-7.4-10-13.2-17.2-17.3"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m228.1,582.94c-4.7,8.2-11.3,14.8-19.5,19.4-8.1,4.6-17.2,7-26.9,7s-18.8-2.4-26.9-7c-8.2-4.6-14.7-11.2-19.5-19.4s-7.2-17.6-7.2-28,2.4-19.6,7.2-27.8,11.3-14.8,19.5-19.4c8.1-4.6,17.2-7,26.9-7s18.9,2.4,27,7c8.1,4.7,14.6,11.2,19.4,19.4,4.7,8.2,7.1,17.6,7.1,27.8,0,10.3-2.4,19.7-7.1,28m10.2-61.5c-5.8-9.9-13.7-17.7-23.6-23.3-9.9-5.6-21-8.4-32.9-8.4s-22.9,2.8-32.8,8.4c-10,5.6-18,13.4-23.8,23.3-5.8,9.9-8.8,21.2-8.8,33.5s3,23.8,8.8,33.7,13.8,17.7,23.8,23.3c9.9,5.6,21,8.4,32.8,8.4s22.9-2.8,32.8-8.4c10-5.6,17.9-13.4,23.7-23.3,5.8-9.9,8.7-21.2,8.7-33.7,0-12.3-2.9-23.6-8.7-33.5"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m275,491.44v79.2c0,7.1,1.5,13.2,4.4,18.1,2.9,4.9,7,8.6,12,11.1,5.1,2.5,10.8,3.7,17,3.7s12.1-1.3,17.2-3.7c5.1-2.5,9.3-6.2,12.3-11.1,3.1-4.9,4.6-11,4.6-18v-79.2h-12.7v78.2c0,7.2-1.8,12.8-5.4,16.4-3.7,3.7-8.8,5.5-15.8,5.5s-12-1.8-15.6-5.5-5.4-9.2-5.4-16.4v-78.2h-12.6v-.1Z"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m348.5,491.44v79.2c0,8.2-1.9,15.3-5.5,21.2-3.7,5.8-8.6,10.3-14.8,13.2-5.9,2.9-12.6,4.3-19.8,4.3s-13.7-1.5-19.6-4.3c-6.1-3-10.9-7.4-14.5-13.3-3.5-5.8-5.3-12.9-5.3-21.1v-79.2h-12.5v78.1c0,10.9,2.3,20.2,6.9,27.8s10.9,13.5,18.8,17.3c7.8,3.8,16.5,5.7,26,5.7s18.5-1.9,26.3-5.7c8-3.8,14.5-9.7,19.2-17.3,4.8-7.6,7.2-17,7.2-27.9v-78.1h-12.4v.1Z"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m394.9,559.84c5,2.3,11.6,4.7,19.6,7,5.6,1.6,10.1,3,13.3,4.3,2.8,1.1,5.2,2.7,7,4.7,1.6,1.7,2.4,3.8,2.4,6.5,0,3.4-1.2,6-3.6,8.1-2.6,2.2-6.4,3.3-11.2,3.3s-8.3-1.1-10.8-3.5c-2.5-2.3-3.9-5.4-4.2-9.5l-.2-3.1h-12.8l.3,4.5c.5,6.9,3.3,12.4,8.2,16.3,4.9,3.9,11.5,5.9,19.4,5.9,5.3,0,10.1-.9,14.2-2.7s7.3-4.4,9.5-7.8c2.3-3.4,3.4-7.4,3.4-12,0-4.9-1.1-8.8-3.3-11.7-2.2-2.9-4.9-5.1-8-6.5-3.2-1.5-7.3-3-12.4-4.5-.3-.1-.6-.2-.9-.3l-6.4-2.1c-.6-.2-1.3-.4-2-.6-5.4-1.6-9.9-3.2-13.3-4.8-4-1.8-7.4-4.6-10.2-8.3-3-3.9-4.5-9.1-4.5-15.2s1.5-10.9,4.4-15.3c2.9-4.3,6.9-7.7,12.1-9.9,4.9-2.2,10.4-3.2,16.6-3.2,9.3,0,17,2.4,23,7.1,6.3,4.9,9.8,11.8,10.4,20.5l.3,4.1h12.9l-.3-3.6c-.9-11.8-5.7-21.1-14.2-27.8-8.4-6.5-19.3-9.8-32.5-9.8-8.7,0-16.7,1.5-23.5,4.5-7,3.1-12.6,7.6-16.5,13.4-3.9,5.9-5.9,12.8-5.9,20.6,0,8.4,2,15.2,6,20.3,3.6,4.8,8.3,8.6,13.7,11.1"
              fill="#000"
              strokeWidth="0"
            />
            <path
              d="m463,560.54c-3.9-5-8.6-8.9-14.1-11.4-5.1-2.4-11.7-4.8-19.7-7.1-5.6-1.7-10-3.2-13.1-4.5-2.8-1.2-5.1-2.7-6.9-4.5-1.5-1.5-2.2-3.4-2.2-5.7,0-3.6,1-6.2,3.1-8,2.2-1.9,5.2-2.8,9.2-2.8,4.6,0,8.3,1.1,10.9,3.3,2.6,2.1,3.9,4.7,4.1,7.9l.2,3.2h14.7l-.3-3.7c-.5-6.9-3.3-12.4-8.2-16.3-4.9-3.9-11.5-5.9-19.4-5.9-5.3,0-10.1.9-14.2,2.7-4.1,1.8-7.3,4.4-9.5,7.8-2.3,3.4-3.4,7.4-3.4,12,0,4.9,1.1,8.8,3.3,11.7,2.2,2.9,4.9,5.1,8,6.5,3.2,1.5,7.3,3,12.4,4.5.3.1.6.2.9.3l6.4,2.1c.6.2,1.3.4,2,.6,5.4,1.6,9.9,3.2,13.3,4.8,4,1.8,7.4,4.6,10.2,8.3,3,3.9,4.5,9.1,4.5,15.2s-1.5,10.9-4.4,15.3c-2.9,4.3-6.9,7.7-12.1,9.9-4.9,2.2-10.4,3.2-16.6,3.2-9.3,0-17-2.4-23-7.1-6.3-4.9-9.8-11.8-10.4-20.5l-.4-4.9h-13.8l.1,3.4c.1,8.1,2.4,15.2,6.7,21.2,4.3,5.9,10.1,10.5,17.4,13.6,7.1,3.1,15.3,4.6,24.1,4.6,9.4,0,17.7-1.8,24.6-5.3,7-3.6,12.4-8.5,16.1-14.5,3.7-6.1,5.5-12.7,5.5-19.8,0-8.1-2-14.9-6-20.1"
              fill="#000"
              strokeWidth="0"
            />
            <rect
              x=".1"
              y="491.44"
              width="12.9"
              height="127.7"
              fill="#000"
              strokeWidth="0"
            />
            <polygon
              points="18.9 491.44 18.9 551.74 89.1 551.74 89.1 491.44 76.2 491.44 76.2 541.24 31.1 541.24 31.1 491.44 18.9 491.44"
              fill="#000"
              strokeWidth="0"
            />
            <rect
              x="95"
              y="491.44"
              width="12.2"
              height="127.7"
              fill="#000"
              strokeWidth="0"
            />
            <polygon
              points="500.2 507.14 500.2 551.24 558.5 551.24 558.5 541.34 512.5 541.34 512.5 517.74 558.5 517.74 558.5 507.14 500.2 507.14"
              fill="#000"
              strokeWidth="0"
            />
            <polygon
              points="512.5 567.34 558.5 567.34 558.5 557.14 500.2 557.14 500.2 603.44 558.5 603.44 558.5 609.34 494.3 609.34 494.3 501.34 558.5 501.34 558.5 491.24 481.5 491.24 481.5 619.14 558.5 619.14 558.5 592.64 512.5 592.64 512.5 567.34"
              fill="#000"
              strokeWidth="0"
            />
            <polygon
              points="89.1 619.14 89.1 557.54 18.9 557.54 18.9 619.14 31.1 619.14 31.1 567.64 76.2 567.64 76.2 619.14 89.1 619.14"
              fill="#000"
              strokeWidth="0"
            />
          </svg>
        </header>

        <h1>Privacy Policy</h1>

        <section>
          <p>
            <span style={{ fontWeight: 400 }}>
              Your trust is very important to us and we provide the following to
              explain our privacy policies with regard to your information. The
              following online Privacy Policy is intended to protect and secure
              the personally identifiable information (any information you
              provide and by which you can be identified) you provide to us
              online and to ensure you that our commitment and realization of
              this obligation is to not only meet, but to exceed, most existing
              privacy standards.&nbsp;&nbsp;
            </span>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              New World Group reserves the right to make changes to this Privacy
              Policy at any time. If you want to ensure that you are up to date
              with the latest changes, we suggest that you visit this page
              frequently. If at any point in time we decide to make use of any
              personally identifiable information on file in a manner vastly
              different than that which was stated when this information as
              initially collected, users will be notified at that time and shall
              have the option whether to permit the use of their information in
              this separate manner.
            </span>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
            <br />
            <br />
          </p>
          <h2>
            <strong>Information We Collect</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We collect information from visitors on our website through online
              requests including: E-newsletters, Contact Requests, Website
              Forms. The information we collect online includes your name,
              e-mail address, a phone number (if you want) and specifics about
              your request, as well as any additional comments you want us to
              know about you to more specifically frame our communications with
              you. In addition, we may have occasion to collect non-personal
              anonymous demographic information such as the type of browser you
              are using, device, or type of operating system, which will assist
              us in providing and maintaining superior quality service. In order
              to continuously improve our service and meet your needs more
              specifically, we may also ask you to provide information specific
              to your request as well.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Please note that this Privacy Policy does not govern the
              collection and use of information and companies that we do not
              control, nor by individuals not employed nor managed by us. If you
              visit a website we mention or link to, be sure to review its
              privacy policy before providing the site with information.
              <br />
              <br />
            </span>
          </p>
          <h2>
            <strong>How the Information You Provide is Used</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We use your information to communicate with you, to learn more
              about your needs and to hopefully provide you with a better
              service experience. We may also use your information to complete a
              transaction you authorize, to update you on happenings or on
              upcoming projects or to personalize our Website and its experience
              for you. We also give you the opportunity to remove your name from
              our contact lists, if you desire to do so. Please review the
              corresponding section of this Privacy Policy below. We, through
              members of our marketing team, may send you e-mails announcing
              news about our organization, event information and other relevant
              information related to our company from time to time.
              Additionally, we&rsquo;ll only send you e-mails that you have
              agreed to receive by submitting your information on this Website
              and you can opt out at any time.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Sharing of Personal Information</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We will never sell, rent, lease or exchange your personal
              information with other organizations. Accordingly, the identity of
              all of those who contact us through this Website will be kept
              confidential. We are also committed to ensuring the security of
              your personal information. To prevent unauthorized access,
              maintain data accuracy, and ensure the proper use of your
              information, we have established and implemented appropriate
              physical, electronic and managerial protocols to safeguard and
              secure the information we collect online.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Cookies</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              Based on your submission to us, from time to time, we may send a
              &quot;cookie&quot; to your computer. A cookie is a piece of data
              that&rsquo;s sent to your browser from a web server and stored on
              your computer&apos;s hard drive to recognize you when you return
              to our Website, or to identify which areas of our Website you have
              visited. A cookie can&apos;t read data off your hard drive or read
              cookie files created by other sites. Cookies also do not damage
              your system. We may use the information collected to better
              personalize the content you see on our Website, or to send you
              more relevant information. You can choose whether to accept
              cookies by changing the settings of your browser. Your browser can
              refuse all cookies, or show you when a cookie is being sent. If
              you choose not to accept these cookies, your experience at our
              Website and other Websites may be diminished and some features may
              not work as intended.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Links to Outside Sites</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              This Website links to other websites and also links to documents
              located on Websites maintained by other organizations or
              individuals. Once you access a link to another Website, please be
              aware that we are not responsible for the privacy practices or the
              content of such Websites and only responsible for the privacy
              practices while you are engaged on our Website.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Removal from Our Mailing List</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We give you the opportunity to remove your name from our postal
              and e-mailing list so that you do not receive any future
              communications. If you desire to permanently remove your name, you
              can contact us to do so, or opt out from an email received. If you
              determine that our information about you is inaccurate or it has
              changed, you may also modify information by contacting us. If you
              have comments or questions about our online Privacy Policy, or
              would like more information about us, or are experiencing
              technical trouble, please contact us.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Non-Marketing Purposes</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We greatly respect your privacy. We do maintain and reserve the
              right to contact you if needed for non-marketing purposes (such as
              bug alerts, security breaches, account issues, and/or changes in
              our products and services). In certain circumstances, we may use
              our website, newspapers, or other public means to post such a
              notice.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Children Under the Age of 13</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              This website is not directed to, and does not intend knowingly to
              collect personal identifiable information from children under the
              age of thirteen (13). If it is determined that such information
              has been inadvertently collected for any reason, we will take
              immediate and necessary steps to ensure that such information is
              deleted from our system&rsquo;s database. Anyone under the age of
              thirteen (13) must seek and obtain parent or guardian permission
              before using this Website.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Notice to European Union Users</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              Our operations are primarily based in the United States. If you
              provide information to us, the information will be transferred out
              of the European Union (EU) and sent to the United States (the
              adequacy decision on EU-US Privacy became operational on August 1,
              2016. This framework protects the fundamental rights of anyone in
              the EU whose personal data is transferred to the United States for
              commercial purposes. It allows the free transfer of data to
              companies that are certified in the US under the Privacy Shield).
              By providing personal information to us, you are consenting to its
              storage and use as described in the Privacy Policy.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>California Residents&apos; Rights</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              The California Consumer Privacy Act (CCPA) may apply to California
              residents whose Personal Information is collected by organizations
              of a certain size or that meet other criteria. If the CCPA applies
              to us, California residents may request to know about Personal
              Information collected about them and request deletion of that
              Personal Information and you can learn more about these rights and
              our processes for consumer requests by contacting us directly.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Acceptance of Terms</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              By using this website, you are hereby accepting the terms and
              conditions stipulated within this Privacy Policy agreement. If you
              are not in agreement with our terms and conditions, then you
              should refrain from further use of our Websites. In addition, your
              continued use of our Website following the posting of any updates
              or changes to our terms and conditions shall mean that you agree
              and accept such changes.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Our Commitment To Digital Accessibility</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We are dedicated to providing an equivalent and accessible digital
              experience for all users. We may provide assistive technologies
              including but not limited to screen readers, magnifiers, and voice
              recognition functionality. Our design, development, and digital
              standards teams regularly collaborate and strive to remain current
              on the latest standards and practices. We consult with experts in
              usability, accessibility, and people with disabilities to ensure
              our products function properly and reflect the latest available
              technologies. It is through these combined efforts that we ensure
              our content is able to be enjoyed by all, including those who rely
              on assistive technologies.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Our Commitment To You</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              We never stop learning and consistently seek to improve our
              process and products over time. If you experience difficulty
              accessing one of our websites or digital experiences due to a
              disability, or have an issue to report, we are eager to receive
              your response and will work diligently to arrive at a solution. We
              encourage all inquiries that help us improve the quality of
              information and functionality of our products. Please contact us
              using our online form, by email, or phone.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>&nbsp;</span>
          </p>
          <h2>
            <strong>Contact Us:</strong>
          </h2>
          <p>
            <span style={{ fontWeight: 400 }}>
              Please contact us if you have any questions or comments about this
              privacy policy or would like to receive more information about
              us.&nbsp;
            </span>
          </p>
          <p>&nbsp;</p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
