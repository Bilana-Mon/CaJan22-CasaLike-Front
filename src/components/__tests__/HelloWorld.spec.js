import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

describe(() => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
