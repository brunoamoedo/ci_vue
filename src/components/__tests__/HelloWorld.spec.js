// Importe as funções necessárias para o teste
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

// Descreva o teste
describe('HelloWorld', () => {
  it('contains a link with href="https://vitejs.dev/"', () => {
    // Monte o componente
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })

    // Encontre o elemento <a> dentro do componente
    const linkElement = wrapper.find('a')

    // Verifique se o elemento <a> está presente
    expect(linkElement.exists()).toBe(true)

    // Verifique se o atributo href do elemento <a> tem o valor correto
    expect(linkElement.attributes('href')).toBe('https://vitejs.dev/')
  })
})
