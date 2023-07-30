// Importe as funções necessárias para o teste
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheWelcome from '../TheWelcome.vue';

// Descreva o teste
describe('TheWelcome', () => {
  it('contains a link with href="https://vuejs.org/sponsor/"', () => {
    // Monte o componente
    const wrapper = mount(TheWelcome);

    // Encontre o elemento <a> com o atributo href="https://vuejs.org/sponsor/"
    const linkElement = wrapper.find('a[href="https://vuejs.org/sponsor/"]');

    // Verifique se o elemento <a> está presente
    expect(linkElement.exists()).toBe(true);
  });
});
