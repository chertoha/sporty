import socialList from "utils/socialList";
import { FC } from "react";
import { List, StyledLink } from "./Socials.styled";

interface ISocialsProps {
  inverse?: boolean;
  size?: number;
}

const Socials: FC<ISocialsProps> = ({ inverse = false, size }) => {
  return (
    <List>
      {socialList.map(({ id, label, link, Icon }) => (
        <li key={id}>
          <StyledLink
            size={size}
            to={link}
            target="_blank"
            aria-label={label}
            inverse={inverse}
          >
            <Icon />
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

export default Socials;
