import Button from "components/button.js";

export default function Home() {
  return (
    <div className="max-w-3xl m-auto relative items-center justify-center">
      <img
        className="w-full h-1/5 m- flex justify-center"
        src="MedAid_main.png"
      />
      <div className="w-21 text-center mt-[0]">
        <h1 className="font-bold text-2xl">Let's get started!</h1>
        <p className="mx-15 my-4 text-xl">
          Login to enjoy the features we've provided, and stay healthy!
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <Button text="Create Account" to="pages/signup" />
      </div>
      <div className="absolute bottom-[-5] right-0">
        <img src="obj.png"></img>
      </div>
    </div>
  );
}
