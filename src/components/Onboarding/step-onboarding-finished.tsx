import { NavLink, Stack, Text, Title, createStyles } from '@mantine/core';
import {
  IconChevronRight,
  IconDashboard,
  IconFileText,
  IconManualGearbox,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import { OnboardingStepWrapper } from './common-wrapper';

export const StepOnboardingFinished = () => {
  const { classes } = useStyles();
  return (
    <OnboardingStepWrapper>
      <Stack align="center">
        <Image src="/imgs/logo/logo.svg" alt="" width={50} height={50} />
        <Title order={2} align="center">
          Congratulations, you've set Homarr up!
        </Title>
        <Text>Awesome! What do you want to do next?</Text>

        <Stack>
          <NavLink
            component={Link}
            href="/b/default"
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            className={classes.link}
            icon={<IconDashboard />}
            label="Go to your board"
            variant="light"
            active
          />
          <NavLink
            component={Link}
            href="/manage"
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            className={classes.link}
            icon={<IconManualGearbox />}
            label="Go to the management dashboard"
            variant="light"
            active
          />
          <NavLink
            component='a'
            href="https://homarr.dev"
            target="_blank"
            rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
            className={classes.link}
            icon={<IconFileText />}
            label="Check out the documentation"
            variant="light"
            active
          />
        </Stack>
      </Stack>
    </OnboardingStepWrapper>
  );
};

const useStyles = createStyles((theme) => ({
  link: {
    borderRadius: '0.4rem',
  },
}));
