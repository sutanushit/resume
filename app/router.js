import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ResumeENV.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('resume');
  this.route('project');
  this.route('home');
});

export default Router;
