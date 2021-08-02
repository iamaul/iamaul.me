import { IconType } from 'react-icons/lib';
import { 
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub 
} from 'react-icons/fa';

import siteConfig from '~/site.config';

export const useSocialLink = () => {
    const socials: [string, IconType][] = [
        [siteConfig.socials.Instagram, FaInstagram],
        [siteConfig.socials.Twitter, FaTwitter],
        [siteConfig.socials.LinkedIn, FaLinkedin],
        [siteConfig.socials.Github, FaGithub],
    ]

    return socials;
}