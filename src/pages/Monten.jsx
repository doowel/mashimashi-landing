import React from "react";
import { Helmet } from "react-helmet";
import MontenLandingImage from "../images/monten-landing.png";
import MontenHeader from '../partials/MontenHeader';

function Monten() {
  const [subscriberEmail, setSubscriberEmail] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    //call to the Netlify Function you created
    try {
      await fetch(
        `${process.env.URL}/.netlify/functions/emails/subscribed`,
        {
          headers: {
            "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
          },
          method: "POST",
          body: JSON.stringify({
            from: "ptang8@bus.illinois.edu",
            to: subscriberEmail,
            subject: "ご登録ありがとうございます！",
          }),
        }
      );
      alert('Thank you for subscribing! We will keep you updated.')
      setSubscriberEmail("");
    } catch (error) {
      alert('Something went wrong, please try again later.')
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="A new platform we created for information providers and receivers."
        />
        <meta
          property="og:title"
          content="Monten - Learn trending topics"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/seewhatgodsays.appspot.com/o/static%2Fmonten-logo.png?alt=media&token=f3f3ba18-b186-4bce-b21a-bfb8531cbb16&_gl=1*11d8gj1*_ga*MTkwNDg3MDIxMS4xNjc2ODk3OTE5*_ga_CW55HF8NVT*MTY5OTM3MDA4OS42MC4xLjE2OTkzNzA2NTMuMjYuMC4w"
        />
        <meta
          property="og:url"
          content="https://www.creativemashimashi.com/monten"
        />
        <meta
          property="og:description"
          content="A new iOS app we created for learning trending topics."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <MontenHeader />
        {/*  Page content */}
        <main className="px-6 md:px-36 pt-32 md:pt-52 bg-white flex flex-col xl:flex-row xl:justify-between font-inter">
          <div className="max-w-3xl xl:mr-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-14">悩んでいる時、 みんなの意見が気にする？</h1>
            <h2 className="text-xl mb-20">Monten は、好奇心の世界への扉を開き、あなたの興味をそそるものなら何でも、匿名で世間の声を探ります。決断する自信を求めている人も、単純に楽しい時間を求めている人も、Monten は無限の可能性への入り口です。</h2>
            <form className="flex gap-3 flex-col lg:flex-row" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border border-gray-300 pl-4 py-2 rounded-md"
                placeholder="Your email"
                onChange={(event) => setSubscriberEmail(event.target.value)}
                value={subscriberEmail}
              />
              <button
                type="submit"
                className="text-white w-full lg:w-36 h-11 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500"
              >
                Check it out
              </button>
            </form>
          </div>
          <div className="">
            <img src={MontenLandingImage} alt="landing main image" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Monten;
