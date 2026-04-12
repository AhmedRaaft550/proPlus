import { retrieveUser } from "@/actions/supabaseGetUserAction";
import { getLocation } from "@/services/locationServices";
import ProfileLayout from "./ProfileLayout";

const Profile = async () => {
  const response = await retrieveUser();
  const user = response?.data;
  const userLocation = await getLocation();

  // handle the date
  const joinedDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "N/A";

  return (
    <ProfileLayout
      user={user}
      joinedDate={joinedDate}
      userLocation={userLocation}
    />
  );
};

export default Profile;
