import { User } from "@/modules/user/types";
import Avatar from "@/modules/user/components/avatar";
import styles from "./index.module.css";

interface CreatorCardProps {
  creator: User;
  className?: string;
}

const CreatorCard = ({ creator, className }: CreatorCardProps) => (
  <div className={`${className} ${styles.creatorCard}`}>
    <div className="me-5">
      <Avatar user={creator} />
    </div>
    <div className="flex-auto">
      <h3 className="font-bold">{creator.name}</h3>
      <p>{creator.punchline}</p>
    </div>
  </div>
);

export default CreatorCard;
