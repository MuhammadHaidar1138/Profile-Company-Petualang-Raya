
import Icon from '../components/Icon.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import InfiniteSpiral from '../components/infinite_spiral/InfiniteSpiral.jsx';
import Statistic from '../components/Statistic.jsx';
import { about, statistics } from '../data/companyData.js';

const spiralImages = [
  {
    src: '/images/TesHijau.avif',
    alt: 'Proyek konstruksi gedung',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Pekerjaan konstruksi bangunan',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Pembangunan infrastruktur',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Proyek pembangunan',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Aktivitas konstruksi',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Hasil proyek konstruksi',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Peralatan konstruksi',
  },
  {
    src: '/images/TesHijau.avif',
    alt: 'Pembangunan gedung',
  },
];

function AboutSection() {
  return (
    <section id="about" className="section section--light about">
      <div className="about__grid">
        {/* Kolom kiri: About dan Statistik */}
        <div className="about__content">
          <SectionTitle title={about.title} />

          {about.profile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {/* Statistik glassmorphism */}
          <section
            className="stats"
            aria-label="Statistik perusahaan"
          >
            <div className="stats__grid">
              {statistics.map((stat) => (
                <Statistic
                  key={stat.id}
                  number={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Kolom kanan: Infinite Spiral */}
        <div className="about__media">
          <InfiniteSpiral
            items={spiralImages}
            speed={0.45}
            direction="up"
            animationMode="auto"
            radius={150}
            cardWidth={105}
            cardHeight={105}
            verticalSpacing={48}
            perspective={1000}
            cardsPerTurn={7}
            rotation={0}
            cardTilt={0}
            cardRadius={12}
            centerScale={1.2}
            edgeFade={0.3}
            edgeBlur={3}
            pauseOnHover
            imageFit="cover"
            grayscale={0}
            className="about__spiral"
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="vm__grid">
        <article className="vm__card">
          <h3>Visi</h3>
          <p>{about.vision}</p>
        </article>

        <article className="vm__card">
          <h3>Misi</h3>
          <ul className="check-list">
            {about.mission.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;