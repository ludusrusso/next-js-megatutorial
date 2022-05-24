import styled from "@emotion/styled";
import Link from "next/link";
import { GithubIcon, TwitterIcon, YoutubeIcon } from "./icons";

export const Footer = () => {
  return (
    <FooterStyled>
      <CopyContainer className="text-gray-800">
        <p>
          NextJS MegaTutorial; all right reserved {new Date().getFullYear()}
        </p>
      </CopyContainer>
      <SocialsContainer className="text-green-500">
        <ul>
          {socials.map(({ Icon, href, label }, idx) => (
            <li key={idx}>
              <Link href={href}>
                <a target="_blank">
                  <span className="sr-only">{label}</span>
                  <Icon className="h-8" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </SocialsContainer>
    </FooterStyled>
  );
};

const socials = [
  {
    label: "twitter",
    href: "https://twitter.com",
    Icon: TwitterIcon,
  },
  {
    label: "youtube",
    href: "https://youtube.com",
    Icon: YoutubeIcon,
  },
  {
    label: "facebook",
    href: "https://facebook.com",
    Icon: GithubIcon,
  },
];

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialsContainer = styled.div`
  padding: 20px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
`;

const CopyContainer = styled.div`
  padding: 20px;
`;
