import { Box, Container, type MantineTheme } from '@mantine/core';
import React from 'react'

interface QuizContainerProps {
  children?: React.ReactNode;
  minHeight?: string;
}

const QuizContainer = ({children, minHeight}: QuizContainerProps) => {
  return (
    <Container
      miw={"xl"}
      mih={minHeight || '500px'}
      p="md"
      bg={"white"}
      py={"lg"}
      px={"md"}      
      style={(theme: MantineTheme) => ({
        width: '100%',
        height: '100%',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.md,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.sm,
      })} 
      >{children}</Container>
  )
}

export default QuizContainer