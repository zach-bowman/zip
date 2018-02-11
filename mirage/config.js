export default function() {
  this.namespace = '/api';

  let projects = [
    {
      type: 'project',
      id: 'project-1',
      attributes: {
        name: 'Project 1'
      }
    }, {
      type: 'project',
      id: 'project-2',
      attributes: {
        name: 'Project 2'
      }
    }, {
      type: 'project',
      id: 'project-3',
      attributes: {
        name: 'Project 3'
      }
    }
  ];

  this.get('/projects', function(db, request) {
    return {
      data: projects
    };
  });

  this.get('/projects/:id', function(db, request) {
    return { data: projects.find((project) => request.params.id === project.id) };
  });
}
