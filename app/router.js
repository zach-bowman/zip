import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('show', { path: '/:project_id' });
  });
  this.route('contact');
  this.route('resume');
  this.route('about');
});

export default Router;
