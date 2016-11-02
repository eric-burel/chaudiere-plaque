import React, {PropTypes} from 'react'
import { assert } from 'chai'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import UsersPage from './UsersPage'
// NOTE : this necessary to avoid the onTouchTap error
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// we must pass the theme when using material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme'


describe('<UsersPage />', () => {
  const defaultProps =  {
    title:"title",
    changeDisplay:()=>{},
    onSubmit:(done)=>{done ()},
    buttonLabel:"buttonLabel"
  }

  const muiTheme = getMuiTheme();
  // set up the context
  const shallowWithContext = (node) => shallow(node, {context: {muiTheme}});
  const mountWithContext = (node) => mount(node, {
    context: {muiTheme},
    childContextTypes: {muiTheme: PropTypes.object},
  });

  describe('Without children', ()=>{
    const noChildren = <UsersPage {...defaultProps} />
    it('should render', () => {
      const spies = [
        sinon.spy(UsersPage.prototype,"renderFormInputs"),
        sinon.spy(UsersPage.prototype,"renderForm"),
        sinon.spy(UsersPage.prototype,"renderHeader"),
        sinon.spy(UsersPage.prototype,"renderFooter"),
        sinon.spy(UsersPage.prototype,"render"),
      ]
      const wrapper = shallowWithContext(noChildren)
      spies.map((spy)=>{
        assert.isTrue(spy.calledOnce)
      })
    })

    it("should init state correctly", ()=>{
      const wrapper = shallowWithContext(noChildren)
      assert.isNull(wrapper.state('error'))
      assert.isNull(wrapper.state('message'))

    })
  })
  describe('Footer', ()=>{

  })
  describe('Header', ()=>{

    it("should set up title", ()=>{
      let props = defaultProps
      props.title="foobar"
      // need to mount so that props are copied, shallow is not sufficient
      const wrapper = mountWithContext(<UsersPage {...props} />)
      assert.equal(wrapper.prop('title'),'foobar')
    })
    it("should setup subtitle if necessary",()=>{
      let props = Object.assign(defaultProps, {
        subtitle:"barfoo"
      })
      const wrapper = mountWithContext(<UsersPage {...props} />)
      assert.equal(wrapper.prop('subtitle'),'barfoo')
    })
    it("should show a redirection button if necessary",()=>{
      let props = Object.assign(defaultProps,{
        redirection:'foobar',
        redirectionMessage:'go-to-foobar'
      })
      const wrapper = mountWithContext(<UsersPage {...props}/>)
      const button = wrapper.find('FlatButton')
      assert.isFalse(button.isEmpty())
      assert.isNotNull(button)
      assert.equal(button.prop('label'), 'go-to-foobar')

    })
    it("should pass the changeDisplay function to the redirection button", ()=>{
      const spy = sinon.spy()
      let props = Object.assign(defaultProps, {
        changeDisplay: spy
      })
      const wrapper = mountWithContext(<UsersPage {...props} />)
      wrapper.prop('changeDisplay')()
      assert.isTrue(spy.calledOnce)
    })

    it("should trigger changeDisplay on button click", ()=>{
      const spy = sinon.spy()
      let props = Object.assign(defaultProps, {
        changeDisplay: spy,
        redirection:'redirection',
        redirectionMessage:'foobar'
      })
      const wrapper = mountWithContext(<UsersPage {...props} />)
      wrapper.find('.header button').simulate('change')
      // TODO trigger on the flattbutton click
      assert.isTrue(spy.calledOnce)
      assert.isTrue(spy.calledWithExactly("redirection"))
    })

    it("should throw if redirection is incorrect",()=>{

    })

  })
  describe('Form', ()=>{

  })

})
