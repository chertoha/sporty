import { facebook, instagram, youtube } from "./contacts";
import { ReactComponent as FaceebokIcon } from "assets/images/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icons/instagram.svg";
import { ReactComponent as YoutubeIcon } from "assets/images/icons/youtube.svg";

const socialList = [
  { id: 1, label: "Facebook", link: facebook, Icon: FaceebokIcon },
  { id: 2, label: "Instagram", link: instagram, Icon: InstagramIcon },
  { id: 3, label: "Youtube", link: youtube, Icon: YoutubeIcon },
];

export default socialList;
