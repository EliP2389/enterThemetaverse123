import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar(username, logoutOnPress) {
const {user, logout} = useMoralis();

  return (
    <Image
    className="rounded-full bg-black cursor-pointer hover:opacity-75"
    // lougoutOnPress if true then logout
    onClick={() => logoutOnPress && logout()}
    layout="fill"
    src={`https://avatars.dicebear.com/api/adventurer/${username || user.get("username")}.svg`}
     />
  );
}

export default Avatar