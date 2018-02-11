export default function() {
  this.namespace = '/api';

  this.get('/projects', function() {
    return {
      data: [{
        type: 'project',
        id: 1,
        attributes: {
          code: 'project-1',
          name: 'Project 1'
        }
      }, {
        type: 'project',
        id: 2,
        attributes: {
          code: 'project-2',
          name: 'Project 2'
        }
      }, {
        type: 'project',
        id: 3,
        attributes: {
          code: 'project-3',
          name: 'Project 3'
        }
      }]
    };
  });
}
