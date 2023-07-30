import { describe,it,expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "./HomeView.vue"

describe( 'HomeVIew',()=>{
    it('validando se um component estar sendo renderizado',()=>{
        const wrapper = mount(HomeView)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('main').exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'TheWelcome' }).exists()).toBe(true);
    })
})