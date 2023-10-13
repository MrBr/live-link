import { User } from "@/modules/user/types";
import styles from "./index.module.css";

interface AvatarProps {
  user: User;
}
const Avatar = ({ user }: AvatarProps) => (
  <img
    className={styles.avatar}
    src={user.imgSrc}
    alt={`${user.name} avatar`}
  />
);

export default Avatar;
