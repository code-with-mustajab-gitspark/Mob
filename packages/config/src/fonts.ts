import { createFont } from 'tamagui'

export const headingFont = createFont({
  family: 'Inria Serif, serif',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    14: 56,
    15: 60,
  },
  weight: {
    4: '300',
    5: '400',
    6: '700',
  },
  letterSpacing: {
    4: 0,
    5: 0,
    6: -1,
  },
  transform: {
    6: 'none', // Remove uppercase transform
  },
  face: {
    300: { normal: 'InriaSerif-Light', italic: 'InriaSerif-LightItalic' },
    400: { normal: 'InriaSerif-Regular', italic: 'InriaSerif-Italic' },
    700: { normal: 'InriaSerif-Bold', italic: 'InriaSerif-BoldItalic' },
  },
})

export const bodyFont = createFont({
  family: 'Urbanist, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    14: 56,
    15: 60,
  },
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: {
    4: 0,
    5: 0.5,
    6: -0.5,
  },
  lineHeight: {
    4: 22,
    5: 24,
    6: 28,
  },
  face: {
    100: { normal: 'Urbanist-Thin' },
    200: { normal: 'Urbanist-ExtraLight' },
    300: { normal: 'Urbanist-Light' },
    400: { normal: 'Urbanist-Regular' },
    500: { normal: 'Urbanist-Medium' },
    600: { normal: 'Urbanist-SemiBold' },
    700: { normal: 'Urbanist-Bold' },
    800: { normal: 'Urbanist-ExtraBold' },
    900: { normal: 'Urbanist-Black' },
  },
})