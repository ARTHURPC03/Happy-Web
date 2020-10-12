import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    landing: string

    colors: {
      primary: string
      secondary: string

      background: string
      backgroundLanding: string
      li: string
      text: string
      inputColor: string
      inputPlaceholder: string
      strongSchedule: string
      appointmentBackground: string
      dayPicker: string
      dayAvailableBackground: string
      dayAvailableBackgroundHover: string
    }
  }
}
