import { Group, Image, Text } from '@mantine/core';
import * as React from 'react';
import { useColorTheme } from '../../tools/color';
import { useConfig } from '../../tools/state';

export function Logo({ style, withoutText, size }: any) {
  const { config } = useConfig();
  const { primaryColor, secondaryColor } = useColorTheme();

  return (
    <Group spacing="xs" noWrap>
      <Image
        width={size ?? 50}
        src={config.settings.logo || '/imgs/logo/logo.png'}
        style={{
          position: 'relative',
        }}
      />
      {withoutText ? null : (
        <Text
          sx={style}
          weight="bold"
          variant="gradient"
          gradient={{
            from: primaryColor,
            to: secondaryColor,
            deg: 145,
          }}
        >
          {config.settings.title || 'Homarr'}
        </Text>
      )}
    </Group>
  );
}
