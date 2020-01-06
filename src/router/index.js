import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/assembly/Layout'
import Container from '@/components/assembly/Container'
import Button from '@/components/assembly/Button'
import Link from '@/components/assembly/Link'
import Radio from '@/components/formElement/Radio'
import CheckBox from '@/components/formElement/CheckBox'
import Input from '@/components/formElement/Input'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkBox',
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    }
  ]
})
