import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function privacyPolicy() {
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, []);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />

      <section className="bg-[#212121]">
        <div className="px-20 py-32">
          <h1 className="text-[#00B901] font-light text-3xl mb-8">
            Privacy Policy
          </h1>

          <h2 className="mb-4 text-white">Who we are</h2>
          <p className="mb-4 text-gray-400">
            Our website address is: https://www.barracudabilliards.com.
          </p>

          <h2 className="mb-4 text-white">
            What personal data we collect and why we collect it
          </h2>
          <h3 className="mb-2 text-white font-light">Comments</h3>
          <p className="mb-4 text-gray-400">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor's IP address and browser
            user agent string to help spam detection.
          </p>
          <p className="mb-4 text-gray-400">
            An anonymized string created from your email address (also called a
            hash) may be provided to Gravatar service to see if you are using
            it. The Gravatar service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </p>
          <h3 className="mb-2 text-white font-light">Media</h3>
          <p className="mb-4 text-gray-400">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
          <h3 className="mb-2 text-white font-light">Contact Forms</h3>
          <h3 className="mb-2 text-white font-light">Cookies</h3>
          <p className="mb-4 text-gray-400">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </p>
          <p className="mb-4 text-gray-400">
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </p>
          <p className="mb-4 text-gray-400">
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days and screen options cookies last for a ayear. If
            you select 'Remember Me', your login will persist for two weeks. If
            you log out of your account the login cookies will be removed.
          </p>
          <p className="mb-4 text-gray-400">
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie uncludes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>
          <h3 className="mb-2 text-white font-light">
            Embedded content from other websites
          </h3>
          <p className="mb-4 text-gray-400">
            Articles on this site my include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p className="mb-4 text-gray-400">
            These websites may collect data about you, use cookies, embed
            additional third-party tracking and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>
          <h3 className="mb-2 text-white font-light">Analytics</h3>

          <h2 className="mb-4 text-white">Who we share your data with</h2>
          <h2 className="mb-4 text-white">How long we retain your data</h2>
          <p className="mb-4 text-gray-400">
            If you leave a comment, the comment and it metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.
          </p>
          <p className="mb-4 text-gray-400">
            For users that register on our website (if any), we also store
            personal information they provide in their user profile. All users
            can see, edit or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>

          <h2 className="mb-4 text-white">
            What rights you have over your data
          </h2>
          <p className="mb-4 text-gray-400">
            If you have an account on this site, or have left comments, you can
            request to receive and exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obligated to keep for administrative,
            elgal or security purposes.
          </p>

          <h2 className="mb-4 text-white">Where we send your data</h2>
          <p className="mb-4 text-gray-400">
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
        </div>

        <Footer
          darkBackground={false}
          footerColor="#00B901"
          footerImage="footer.svg"
        />
      </section>
    </>
  );
}

export default privacyPolicy;
