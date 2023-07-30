// Importe as funções necessárias para o teste
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutView from './AboutView.vue';

describe('AboutView', () => {
  it('validando se os inputs tem o name igual ao for do label', () => {
    // Monte o componente
    const wrapper = mount(AboutView);

    const inputs = wrapper.findAll('input');
    const labels = wrapper.findAll('label');
    const select = wrapper.findAll('select')
    const elements = inputs.concat(select)
    elements.forEach((input) => {
        if (input != null)
        {
            const inputElement = input.element;
            const inputName = inputElement.getAttribute('name');
            const teste=  labels.some( (item) => 
            {
                const labelElement = item.element
                const labelFor = labelElement.getAttribute('for')
                //console.log(inputName)
                
                if (labelFor == inputName)
                {
                    return true
                }else{
                    if(inputName == null){
                        return true
                    }
                    console.log("inputName: "+inputName)
                    console.log("label: "+labelFor)
                }
            
            })
            console.log(teste)
            expect(teste).toBe(true);
        }
    });
  });
});
