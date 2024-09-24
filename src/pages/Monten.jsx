import React from "react";
import { Helmet } from "react-helmet";
import MontenLogo from "../images/logo.png";
import AppStore from "../images/appstore.png";
import AppScreenshot1 from "../images/app-screenshot1.png";
import Mashi from "../images/mashi.png";
import Jasper from "../images/jasper.png";
import AppStore01 from "../images/Appstore_01.png";
import AppStore02 from "../images/Appstore_02.png";
import AppStore03 from "../images/Appstore_03.png";
import AppStore04 from "../images/Appstore_04.png";
import AppStore05 from "../images/Appstore_05.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

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
        <meta name="description" content="A new platform we created for information providers and receivers." />
        <meta property="og:title" content="Monten - Learn trending topics" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/seewhatgodsays.appspot.com/o/static%2Fmonten-logo.png?alt=media&token=f3f3ba18-b186-4bce-b21a-bfb8531cbb16&_gl=1*11d8gj1*_ga*MTkwNDg3MDIxMS4xNjc2ODk3OTE5*_ga_CW55HF8NVT*MTY5OTM3MDA4OS42MC4xLjE2OTkzNzA2NTMuMjYuMC4w"
        />
        <meta property="og:url" content="https://www.creativemashimashi.com/monten" />
        <meta
          property="og:description"
          content="A new iOS app we created for learning trending topics."
        />
      </Helmet>
      <div className="bg-white text-gray-700 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white">
          <div className="text-2xl font-bold">Monten</div>
          <nav>
            <ul className="hidden sm:flex space-x-8 text-lg">
              <li><a href="/" className="hover:text-purple-600">About</a></li>
              <li>
                <a
                  className="hover:text-purple-600"
                  href="mailto:creativemashimashi@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section with Animated Background */}
        <section className="text-center py-16 animate-gradient-move">
          <div className="mb-8">
            <img src={MontenLogo} alt="Monten logo" className="mx-auto w-24 h-24" />
            <h1 className="text-4xl font-bold text-white mt-4">Monten</h1>
            <p className="text-lg text-white mt-2">選択を自信を！</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-4 space-y-4 sm:space-y-0">
            <a href="https://apps.apple.com/jp/app/monten/id6446840865"><img src={AppStore} alt="App Store" className="w-36" /></a>
          </div>
          {/* <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700">
            Learn More
          </button> */}
        </section>

        {/* About Section */}
        <section className="bg-white py-16 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
            <h2 className="text-3xl font-bold mb-4">About Monten</h2>
            <p className="text-lg mb-8">毎日選択に迷いがちなあなたへ</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
              <img src={AppScreenshot1} alt="App Screenshot 1" className="w-80 rounded-lg shadow-lg" />
            </div>

            <blockquote className="relative bg-white rounded-lg shadow-lg mt-12 mb-8">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src={Mashi} alt="Workcation" className="h-16" />
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                  毎日選択に迷いがちなあなたへ Montenはそんな悩みを解決し、あなたの決断を支えるアプリです。レストランのメニューから旅行先の候補まで、あらゆる選択を簡単かつスピーディーに行えます。みんなの声を聞いて、あなたにぴったりの選択肢を見つけましょう。もう迷わず、自信を持って決断を！
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-purple-700 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" src={Jasper} alt="Jasper Wu" />
                </div>
                <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">Jasper Wu</p>
                  <p className="sm:inline ml-2">UXR at Google</p>
                </span>
              </cite>
            </blockquote>

            <a href="https://apps.apple.com/jp/app/monten/id6446840865" className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700">
              アプリを始める
            </a>
          </div>
        </section>

        {/* CTA Buttons Section */}
        <section className="py-12 animate-gradient-move bg-gradient-to-r from-purple-300 to-pink-300 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            <button className="px-6 py-3 bg-white-500 text-white rounded-lg shadow-lg hover:bg-purple-200">
              <img src={AppStore01} alt="気軽に質問できる" className="w-80 rounded-lg shadow-lg" />
              気軽に質問できる
            </button>
            <button className="px-6 py-3 bg-white-500 text-white rounded-lg shadow-lg hover:bg-purple-200">
              <img src={AppStore02} alt="AIが最適な選択肢を提案" className="w-80 rounded-lg shadow-lg" />
              AIが最適な選択肢を提案
            </button>
            <button className="px-6 py-3 bg-white-500 text-white rounded-lg shadow-lg hover:bg-purple-200">
              <img src={AppStore03} alt="詳細を比較する" className="w-80 rounded-lg shadow-lg" />
              詳細を比較する
            </button>
            <button className="px-6 py-3 bg-white-500 text-white rounded-lg shadow-lg hover:bg-purple-200">
              <img src={AppStore04} alt="世間の声を学ぶ" className="w-80 rounded-lg shadow-lg" />
              世間の声を学ぶ
            </button>
            <button className="px-6 py-3 bg-white-500 text-white rounded-lg shadow-lg hover:bg-purple-200">
              <img src={AppStore05} alt="自信を持って決断する" className="w-80 rounded-lg shadow-lg" />
              自信を持って決断する
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 text-center">
          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Subscribe with your email"
              className="px-16 py-2 border border-gray-300 rounded-lg"
              onChange={(event) => setSubscriberEmail(event.target.value)}
              value={subscriberEmail}
            />
            <button className="ml-2 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700">
              Submit
            </button>
          </form>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/creative.mashimashi/" target="_blank"><img src={Instagram} alt="Instagram" className="w-8" /></a>
            <a href="https://x.com/creativemashi2/"><img src={Twitter} alt="Twitter" className="w-8" /></a>
          </div>
          <div className="text-lg mb-4">© 2024 creativemashimashi</div>
        </footer>
      </div>
    </>
  );
}

export default Monten;