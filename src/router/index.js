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
import InputNumber from '@/components/formElement/InputNumber'
import Select from '@/components/formElement/Select'
import Cascade from '@/components/formElement/Cascader'
import Switch from '@/components/formElement/Switch'
import Slider from '@/components/formElement/Slider'
import TimePicker from '@/components/formElement/TimePicker'
import DatePicker from '@/components/formElement/DatePicker'
import DateTimePicker from '@/components/formElement/DateTimePicker'
import Upload from '@/components/formElement/Upload'
import Rate from '@/components/formElement/Rate'
import ColorPicker from '@/components/formElement/ColorPicker'
import Transfer from '@/components/formElement/Transfer'
import Form from '@/components/formElement/Form'
import Table from '@/components/Data/Table'
import Tag from '@/components/Data/Tag'
import Progress from '@/components/Data/Progress'
import Tree from '@/components/Data/Tree'
import Pagination from '@/components/Data/Pagination'
import Badge from '@/components/Data/Badge'
import Avatar from '@/components/Data/Avatar'
import Alert from '@/components/Notice/Alert'
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
    },
    {
      path:'/inputNumber',
      name:'InputNumber',
      component:InputNumber

    },
    {
      path:'/select',
      name:'Select',
      component:Select
    },
    {
      path:'/cascade',
      name:'Cascade',
      component:Cascade
    },
    {
      path:'/switch',
      name:'Switch',
      component:Switch
    },
    {
      path:'/slider',
      name:'Slider',
      component:Slider
    },
    {
      path:'/timePicker',
      name:'TimePicker',
      component:TimePicker
    },
    {
      path:'/datePicker',
      name:'DatePicker',
      component:DatePicker
    },
    {
      path:'/dateTimePicker',
      name:'DateTimePicker',
      component:DateTimePicker
    },
    {
      path:'/upload',
      name:'Upload',
      component:Upload,
    },
    {
      path:'/rate',
      name:'Rate',
      component:Rate,
    },
    {
      path:'/colorPicker',
      name:'ColorPicker',
      component:ColorPicker,
    },
    {
      path:'/transfer',
      name:'Transfer',
      component:Transfer
    },
    {
      path:'/form',
      name:'Form',
      component:Form
    },
    {
      path:'/table',
      name:'Table',
      component:Table
    },
    {
      path:'/tag',
      name:'Tag',
      component:Tag
    },
    {
      path:'/progress',
      name:'Progress',
      component:Progress
    },
    {
      path:'/tree',
      name:'tree',
      component:Tree
    },
    {
      path:'/pagination',
      name:'pagination',
      component:Pagination
    },
    {
      path: '/badge',
      name: 'badge',
      component: Badge
    },
    {
      path:'/avatar',
      name:'avatar',
      component:Avatar
    },
    {
      path:'/alert',
      name:'Alert',
      component:Alert
    }
  ]
})
