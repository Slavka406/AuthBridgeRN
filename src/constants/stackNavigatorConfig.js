import {TransitionPresets} from '@react-navigation/stack'

const animationParams = {
  animation: 'spring',
  config: {
    stiffness: 500,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

export const stackNavigatorConfig = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
  transitionSpec: {
    open: animationParams,
    close: animationParams,
  },
}
