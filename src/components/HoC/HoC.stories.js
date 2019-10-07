import { storiesOf } from '@storybook/vue'

import HoC from './HoC'
import hocSample from './hocSample'

storiesOf('Higher order components (HoC)', module)
  .add('Sample example', () => {
    return {
      components: {
        Sample: hocSample(HoC)
      },
      template: `
        <Sample>
      `
    }
  })