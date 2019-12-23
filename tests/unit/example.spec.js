import { shallowMount } from '@vue/test-utils';
import AddTime from '@/components/AddTime.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AddTime, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
