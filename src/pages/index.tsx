
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Stack } from '@chakra-ui/react';

import AppLayout from '@/components/layout/App';
import { Section } from '@/components/section';
import { Project } from '@/components/project';

import { ProjectEntity } from '@/models/Project';

import projects from '@/data/projects.json';

const HomePage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <AppLayout>
      <Section header="Projects">
        <Stack spacing={8}>
          <Project projects={projects} />
        </Stack>
      </Section>
    </AppLayout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const projectsData: ProjectEntity[] = projects;

  return {
    props: {
      projects: projectsData,
    },
  }
}


export default HomePage;