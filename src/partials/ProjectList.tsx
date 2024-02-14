import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Proyectos <GradientText>recientes</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Aplicación de RUTAS en tiempo real"
        description=""
        link="/posts/sixth-post/"
        img={{
          src: '../../public/assets/expressjs.svg',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>ExpressJS</Tags>
            <Tags color={ColorTags.LIME}>Typescript</Tags>
            <Tags color={ColorTags.SKY}>MongoDB</Tags>
            <Tags color={ColorTags.SKY}>Redis</Tags>
            <Tags color={ColorTags.RED}>SocketIO</Tags>
            <Tags color={ColorTags.YELLOW}>Mapbox</Tags>
          </>
        }
      />
      <Project
        name="Learnflow AI"
        description=""
        link="/"
        img={{ src: '../../public/assets/svelte.svg', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Sveltekit</Tags>
            <Tags color={ColorTags.EMERALD}>Typescript</Tags>
            <Tags color={ColorTags.FUCHSIA}>NestJS</Tags>
            <Tags color={ColorTags.YELLOW}>PostgreSQL</Tags>
            <Tags color={ColorTags.RED}>OpenAI</Tags>
          </>
        }
      />
      <Project
        name="Doctor System"
        description=""
        link="/"
        img={{ src: '../../public/assets/nestjs.svg', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>NestJS</Tags>
            <Tags color={ColorTags.INDIGO}>Typescript</Tags>
            <Tags color={ColorTags.ROSE}>TypeORM</Tags>
            <Tags color={ColorTags.EMERALD}>MongoDB</Tags>
            <Tags color={ColorTags.CYAN}>Tauri</Tags>
            <Tags color={ColorTags.PURPLE}>React</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
