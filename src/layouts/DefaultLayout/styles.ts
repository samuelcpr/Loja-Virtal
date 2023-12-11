import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`
const BULLET_COLORS = {
  yellow: 'yellow-700',
  lightYellow: 'yellow-500',
  base: 'base-600',
  purple: 'purple-500',
} as const

interface BulletWithIconProps {
  color: keyof typeof BULLET_COLORS
}

export const BulletWithIcon = styled.li<BulletWithIconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background-color: ${(props) => props.theme[BULLET_COLORS[props.color]]};
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  span {
    line-height: 130%;
    color: ${(props) => props.theme['base-600']};
  }
`
