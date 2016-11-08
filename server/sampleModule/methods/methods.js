import { Meteor } from 'meteor/meteor'
import { ValidatedMethod} from 'meteor/mdg:validated-method'
import { SimpleSchema} from 'meteor/aldeed:simple-schema'

export const fetchProjects = new ValidatedMethod({
  name:"projects.fetch",
  validate : new SimpleSchema({
    number : {type: Number}
  }).validator(),
  run(){
    // TODO : make an call to get projects
    const projects = ["un projet", "deux projets"]
    return projects
  } // build a validation function using aldeed simple schema
})
