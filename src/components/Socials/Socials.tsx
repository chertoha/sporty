import socialList from "utils/socialList";
import { FC } from "react";
import { List, StyledLink } from "./Socials.styled";

interface ISocialsProps {
  inverse?: boolean;
}

const Socials: FC<ISocialsProps> = ({ inverse = false }) => {
  return (
    <List>
      {socialList.map(({ id, label, link, Icon }) => (
        <li key={id}>
          <StyledLink
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
