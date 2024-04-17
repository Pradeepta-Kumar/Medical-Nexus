import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="w-[100vw] h-[100vh] flex ">
          <div className="w-[50vw] rounded-xl mx-3 my-4">
            <h1 className="text-center mt-24 text-4xl font-bold text-blue-400 px-8">
              Simplifying your health, impacting LIVES!
            </h1>
            <p className="font-semibold text-center pt-10">Why being healthy is important? </p>
            <p className="text-sm px-16 pt-2">
              Being healthy is super important because it basically lets you
              live your life more fully and enjoyably. When you're healthy, you
              feel good. You have more energy to do things, you don’t get tired
              as easily, and generally, you're in a better mood. Keeping healthy
              can help you live longer. It’s like taking good care of a car so
              it runs better and lasts longer. Eating well, exercising, and
              avoiding bad habits can add years to your life. Being sick can be
              expensive. Doctor visits, medicine, treatments – they all add up.
              Staying healthy can help keep those costs down. When you're
              healthy, you tend to worry less. Chronic illnesses can bring a lot
              of stress, not just from the illness itself but also from managing
              it, worrying about it, and trying to handle everyday tasks while
              feeling bad.
            </p>
          </div>
          <div className=" flex w-[50vw] bg-blue-200 rounded-xl mr-8 my-4 justify-center items-center">
            <img className="w-[95%] h-[95%]"
              src="https://png.pngtree.com/thumb_back/fw800/background/20221209/pngtree-cheerful-female-doctor-holding-clipboard-photographed-against-plain-background-photo-image_41065334.jpg"
              alt="Doctor"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
