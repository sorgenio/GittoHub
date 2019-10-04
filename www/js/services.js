angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Alessio Rossi' },
    { id: 1, name: 'Mario Russo' },
    { id: 2, name: 'Franco Franchi' },
    { id: 3, name: 'Gino Latino' },
    { id: 4, name: 'Tino Acc' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
