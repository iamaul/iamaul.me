
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Stack } from '@chakra-ui/react';

import AppLayout from '@/components/layout/App';
import { Section } from '@/components/section';
import { Activity } from '@/components/activity';

import { ActivityEntity } from '@/models/Activity';

import activities from '@/data/activities.json';

const HomePage = ({ activities }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <AppLayout>
      <Section header="Activities">
        <Stack spacing={8}>
          <Activity activities={activities} />
        </Stack>
      </Section>
    </AppLayout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const activitiesData: ActivityEntity[] = activities;

  return {
    props: {
      activities: activitiesData,
    },
  }
}


export default HomePage;