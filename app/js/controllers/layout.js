var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $scope.hello = "Hi";
  $scope.posts = [];
  $scope.tags = [];
  $http.get('http://localhost:3000/posts')
    .success(function(data){
      $scope.posts = data;
    }

  );

  $http.get('http://localhost:3000/tags')
  .success(function(data){
    $scope.tags = data;
  }

);



$scope.getTagName = function(id) {
  var ret = "";
  // loops through all of the tags in $scope.tags
  for (i = 0; i < $scope.tags.length; i++){
    // checks to see if the param we passed is equal to the tag id
    if(id == $scope.tags[i].id) {
      ret = $scope.tags[i].name;
    }
  }
  return ret;
};

$scope.orderProp = 'kittykat';

$scope.newPost = {"title": '', "content": '', "tag_ids": []};

$scope.submitNewPost = function(){
  //$scope.posts.push($scope.newPost);
  $http.post('http://localhost:3000/posts',
    {
      post: {
        title: $scope.newPost.title,
        content: $scope.newPost.content,
        tag_ids: $scope.newPost.tag_ids
      }
    });
};

$scope.tagArray = [];

$scope.addTag = function(id) {
  i = $scope.tagArray.indexOf(id);
  if(i == -1) {
    $scope.tagArray.push(id);
  } else {
    $scope.tagArray.splice(i, 1);
  }
};

$scope.toggleId = function(id) {
  //gets the index of the id in the tag_ids array
  i = $scope.newPost.tag_ids.indexOf(id);

  //if the value doesn't exist, indexOf returns -1
  //This if block could be written in pseudo code as "if id not in tag_ids"
  if(i == -1) {

    //adds the id to the array
    $scope.newPost.tag_ids.push(id);

    //if it is already in the array
  } else {
    //remove it from the array
    $scope.newPost.tag_ids.splice(i, 1);
  }
};


}]);



homeControllerModule.filter('selectedTags', function() {
  return function(posts, tagArray) {
    return posts.filter(function(post) {
      for (var i in posts) {

        // shows all posts if no tags have been added to the array
        if (tagArray.length == 0) {
          return true;
        } else {

          // remember that .indexOf returns -1 if the item is not in the array.
          // this filter returns true if the tag IS in the array.
          if (tagArray.indexOf(post.tag_ids[i]) != -1) {
            return true;
          }
        }
      }

      // returns false if it hasn't already returned true
      return false;

    });
  };
});
