import Button from "components/button.js";

import Profile from "@/components/pages/Profile";
import Spinner from "@/components/common/Spinner";
import dynamic from "next/dynamic";

const DynamicProfile = dynamic(()=> import("@/components/pages/Profile"),{
  loading: ()=> <><Spinner/></>
})

export const metadata = {
	title: 'MediAid | Profile',
	description: 'User Profile Page',
};

export default function HomePage() {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg inset-0 m-auto flex flex-col mt-3">
      {/* <UploadImage /> */}
      <DynamicProfile />
    </div>
  );
}
