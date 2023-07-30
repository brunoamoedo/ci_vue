// Importe as funções necessárias para o teste
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WelcomeItem from '../WelcomeItem.vue';

// Descreva o teste
describe('WelcomeItem', () => {
  it('contem uma div com a classe="item"', () => {
    // Monte o componente
    const wrapper = mount(WelcomeItem);

    // Encontre o elemento <a> com o atributo href="https://vuejs.org/sponsor/"
    const linkElement = wrapper.find('div[class="item"]');

    // Verifique se o elemento <a> está presente
    expect(linkElement.exists()).toBe(true);
  });
});
