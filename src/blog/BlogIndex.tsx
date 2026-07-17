import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Property Management Guides for Portugal | FindAManagerAL Blog</title>
        <meta
          name="description"
          content="Practical guides for foreign property owners in Portugal. Learn about property management costs, Algarve rental income, and how to find a trusted manager."
        />
        <link rel="canonical" href="https://findamanageral.com/blog" />
      </Helmet>

      <Header />

      <div className="relative overflow-hidden min-h-[420px] flex items-center justify-center" style={{ background: 'var(--surface-ink)' }}>
        {/* Background image — white/brown houses with palm trees, Mert Erbil via Unsplash */}
        <picture>
          <source
            type="image/avif"
            srcSet="/images/blog-hero-768.avif 768w, /images/blog-hero-1280.avif 1280w, /images/blog-hero-1920.avif 1920w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/blog-hero-768.webp 768w, /images/blog-hero-1280.webp 1280w, /images/blog-hero-1920.webp 1920w"
            sizes="100vw"
          />
          <img
            src="/images/blog-hero-1280.webp"
            width={2400}
            height={1800}
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </picture>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="inline-block text-xs font-medium text-white/90
                           border border-white/40 rounded-full px-4 py-1.5 mb-6
                           tracking-widest uppercase">
            Guides & Resources
          </span>
          <h1 className="text-[32px] md:text-5xl font-bold text-white leading-tight mb-4">
            Property management guides<br className="hidden md:block" /> for Portugal
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Practical guides for foreign owners navigating the Portuguese short-term rental market.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-surface-card border border-hairline rounded-xl p-6
                         hover:shadow-card transition-shadow duration-200 group"
            >
              {post.region && (
                <span className="inline-block text-xs font-medium text-brand-coral
                                 border border-brand-coral rounded-full px-3 py-1 mb-3">
                  {post.region}
                </span>
              )}
              <h2 className="text-[18px] font-semibold text-ink mb-2
                             group-hover:text-brand-coral transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
