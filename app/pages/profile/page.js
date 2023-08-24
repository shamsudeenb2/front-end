import Button from "components/button.js";
import UploadImage from "components/upload";
import Profile from "@/pages/Profile";

export const metadata = {
	title: 'MediAid | Profile',
	description: 'User Profile Page',
};

export default function HomePage() {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg inset-0 m-auto flex flex-col mt-3">
      {/* <UploadImage /> */}
      <Profile />
    </div>
  );
}
