import { assert } from 'chai'
import sinon from 'sinon'
import { Meteor } from 'meteor/meteor'

// allow tests on the client too with a stub collection
import StubCollections from 'meteor/hwillson:stub-collections'

import './accounts'

// the Users collection
const Users = Meteor.users

describe("Website deletion", function(){
  let dummyUser
  beforeEach(function(){
    // stub the users collection
    StubCollections.stub(Users)
    dummyUser = {email:'foo@bar.com', password:'foobar'}
  })
  afterEach(function(){
    // restore the stubbed collections
    StubCollections.restore()
    // restore sinon stubs if necessary
    // if (MyStub.method.restor) MyStub.method.restore()
  })
  it("Should create a new user with its email", function(){
    //sinon.stub(MyStub.method, function(){doStuffs()})
    try {
      let userId = Meteor.call('user.signup', dummyUser.email, dummyUser.password)
      assert.isString(userId)
      assert.isAbove(userId.length, 0)
      // @see https://docs.mongodb.com/manual/tutorial/query-documents/#match-an-array-element
      const user = Users.findOne({emails: {$elemMatch :{address:dummyUser.email}}})
      //console.log(Users.find().fetch()[0].emails)
      assert.equal(user.emails[0].address, dummyUser.email)
    } catch (err){
      assert.isUndefined(err, err.message)
    }
  })

  xit("Should fail when the email is invalid", function(){})
  xit("Should fail when email is not supplied", function(){})
  xit("Should fail when password is not supplied", function(){})
  xit("Should fail on password too short", function(){})
})
