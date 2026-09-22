import { useEffect } from 'react';
import { profile } from '../data/profile';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function personJsonLd(url) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${url}#person`,
        name: profile.name,
        givenName: profile.firstName,
        jobTitle: profile.headline,
        description: profile.seo.description,
        image: profile.avatar,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        url,
        address: {
          '@type': 'PostalAddress',
          addressLocality: profile.location.city,
          addressRegion: profile.location.region,
          addressCountry: profile.location.country,
        },
        worksFor: {
          '@type': 'Organization',
          name: profile.worksFor,
        },
        sameAs: [
          profile.social.github,
          profile.social.linkedin,
          profile.social.upwork,
          profile.social.stackoverflow,
        ],
        knowsAbout: profile.knowsAbout,
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        name: profile.name,
        url,
        description: profile.seo.description,
        inLanguage: 'en',
        publisher: { '@id': `${url}#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        name: profile.seo.title,
        description: profile.seo.description,
        inLanguage: 'en',
        mainEntity: { '@id': `${url}#person` },
      },
    ],
  };
}

export default function Seo() {
  useEffect(() => {
    const url = `${profile.siteUrl}/`;

    document.title = profile.seo.title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', profile.seo.description);
    upsertMeta('name', 'author', profile.name);
    upsertMeta('name', 'keywords', profile.seo.keywords.join(', '));
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large');
    upsertMeta('name', 'application-name', profile.name);
    upsertMeta('name', 'apple-mobile-web-app-title', profile.name);

    upsertMeta('property', 'og:title', profile.seo.title);
    upsertMeta('property', 'og:description', profile.seo.ogDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', profile.name);
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', profile.avatar);
    upsertMeta('property', 'og:image:alt', profile.name);

    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', profile.seo.title);
    upsertMeta('name', 'twitter:description', profile.seo.ogDescription);
    upsertMeta('name', 'twitter:image', profile.avatar);
    upsertMeta('name', 'twitter:image:alt', profile.name);

    upsertLink('canonical', url);

    let script = document.getElementById('seo-jsonld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(personJsonLd(url));
  }, []);

  return null;
}
