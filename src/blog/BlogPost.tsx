import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import type { BlogPost as BlogPostMeta } from './blogRegistry';

interface Props {
  meta: BlogPostMeta;
  children: React.ReactNode;
}

export default function BlogPost({ meta, children }: Props) {
  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: {
      '@type': 'Organization',
      name: 'FindAManagerAL',
      url: 'https://findamanageral.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FindAManagerAL',
      url: 'https://findamanageral.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://findamanageral.com/blog/${meta.slug}`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{meta.title} | FindAManagerAL</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://findamanageral.com/blog/${meta.slug}`} />
        <meta property="og:title" content={`${meta.title} | FindAManagerAL`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://findamanageral.com/blog/${meta.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(schemaArticle)}
        </script>
      </Helmet>

      {/* Header do artigo */}
      <div className="bg-canvas border-b border-hairline">
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Linha 1 — link de regresso */}
          <div className="mb-6">
            <Link
              to="/blog"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              ← All articles
            </Link>
          </div>

          {/* Linha 2 — tag de região (linha própria, separada) */}
          {meta.region && (
            <div className="mb-4">
              <span className="inline-block text-xs font-medium text-brand-coral
                               border border-brand-coral rounded-full px-3 py-1">
                {meta.region}
              </span>
            </div>
          )}

          {/* Linha 3 — título */}
          <h1 className="text-[28px] font-bold text-ink leading-tight mb-4">
            {meta.title}
          </h1>

          {/* Linha 4 — meta sem data */}
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{meta.category}</span>
            <span>·</span>
            <span>{meta.readingTime} min read</span>
          </div>

        </div>
      </div>

      {/* Corpo do artigo */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose">
          {children}
        </div>

        {/* CTA final */}
        <div className="mt-16 bg-surface-soft border border-hairline rounded-xl p-8 text-center">
          <p className="text-[20px] font-semibold text-ink mb-2">
            Ready to find your property manager?
          </p>
          <p className="text-base text-muted mb-6">
            Tell us about your property and we'll match you with vetted local managers
            {meta.region ? ` in the ${meta.region}` : ' across Portugal'} — free, no obligation.
          </p>
          <Link
            to={meta.region === 'Algarve' ? '/algarve' : meta.region === 'Lisbon' ? '/lisbon' : meta.region === 'Porto' ? '/porto' : '/#lead-form'}
            className="inline-block text-white font-semibold px-8 py-3 rounded-full transition-all duration-[0.18s]"
            style={{ background: 'var(--accent-ui)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e6314e')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-ui)')}
          >
            Find my property manager →
          </Link>
        </div>
      </div>
    </>
  );
}
