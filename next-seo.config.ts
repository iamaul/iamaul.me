
import { DefaultSeoProps, SocialProfileJsonLdProps } from 'next-seo';

import siteConfig from './site.config';

export const SEO: DefaultSeoProps = {
    openGraph: {
        type: 'website',
        locale: 'en_ID',
        url: siteConfig.url,
        site_name: siteConfig.title,
        // @ToDo: images: []
    },
    title: siteConfig.title,
    titleTemplate: `%s`,
    description: siteConfig.description,
}

export const SocialsProfileSEO: SocialProfileJsonLdProps = {
    type: 'person',
    name: siteConfig.title,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.socials),
}