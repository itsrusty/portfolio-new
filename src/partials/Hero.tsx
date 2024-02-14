import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, Soy <GradientText>Hiram Gabriel</GradientText> 👋
        </>
      }
      description={
        <>
          Soy <a className="text-cyan-400 hover:underline">Backend Developer</a>{' '}
          Soy un Backend Developer dedicado a la creación de sistemas robustos y
          escalables que impulsan aplicaciones web y servicios en línea. Mi
          experiencia abarca el diseño e implementación de arquitecturas backend
          eficientes utilizando tecnologías como NodeJS con NestJS y typescript,
          bases de datos relacionales y no relacionales como PostgreSQL y
          MongoDB momento.
        </>
      }
      avatar={
        <img
          className="w-70 h-60 rounded-lg"
          src="../../public/assets/images/profile.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/hiram-gabriel-2123bb240/">
            <HeroSocial
              src="../../public/assets/linkedin.svg"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.tiktok.com/@hiram.dev">
            <HeroSocial
              src="../../public/assets/tiktok.svg"
              alt="Tiktok icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
