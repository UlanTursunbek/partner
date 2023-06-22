import { Meta } from '@storybook/react'

type StoryProps = {
  textColor: string
}

export default {
  title: 'Example/Icons',
  args: {
    textColor: 'currentColor'
  },
  argTypes: {
    textColor: { control: 'color' }
  }
} as Meta<StoryProps>

const list = [
  require('./ui/IconClose').IconClose,
  require('./ui/IconEyeClose').IconEyeClose,
  require('./ui/IconEyeOpen').IconEyeOpen,
  require('./ui/Logo').Logo,
  require('./ui/Menu').Menu
]

export const All = ({ textColor }: StoryProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(4rem, 8rem))',
      gridGap: '1rem',
      textAlign: 'center',
      color: textColor
    }}
  >
    {list.map((Icon, index) => (
      <div
        key={index}
        style={{
          background: '#f5f3fb',
          padding: '.8rem',
          borderRadius: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Icon />
        <span style={{ fontSize: '1.2rem' }}>
          {Icon.displayName.replace(/^Icon/, '')}
        </span>
      </div>
    ))}
  </div>
)
