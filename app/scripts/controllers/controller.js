// var myApp = angular.module('myApp', ["ng-fusioncharts", "angular-datepicker", "datatables", "ngResource"]);
var myApp = angular.module('myApp', ["ngResource"]);
myApp.controller("AppCtrl", ['$scope', '$http', function($scope, $http){

  $scope.showMeetupDialog = function() {
    $('#modal1').openModal();
    $('select').material_select();
  };
  $scope.addMeetup = function() {
    console.log("added");
  };
  $scope.moveTo2ndTab = function() {
    $('ul.tabs').tabs('select_tab', 'test2');
  };
  $scope.moveTo3rdTab = function() {
    // 선택한 카드의 (날짜) + (오케이션) + (기존 음식 정보 페치하기)
    $('ul.tabs').tabs('select_tab', 'test3');
  };


  var refresh = function() {
    // 회식 참석자 명단 get
    $http.get('/vote').success(function(response, data, status, headers, config) {
      // console.log("I got the data I requested ",response.length-1);
      $scope.members = response;
      membersNum = response.length-1;
    }). error(function(data, status, headers, config) {

    });
    // 회식 날짜 get
    $http.get('/date').success(function(response, data, status, headers, config) {
      console.log("I got the data I requested", response[0].date.date);
      $scope.datePicker = response[0].date.date;
    }). error(function(data, status, headers, config) {
      // console.log("I got the data I requested failed ", data);
    });
  };
  // refresh();

  $scope.fields = [];
  var count = 0;
  var refreshFood = function() {
    $http.get('/foodmenu').success(function(response, data, status, headers, config) {
      // console.log("I got the data I requested ",response);
      $scope.fields = response;
    }). error(function(data, status, headers, config) {
      console.log("refreshFood error");
    });
  };
  // refreshFood();


  var count = 0;
  // 메뉴 추가
  $scope.foodMenus = [];
  $scope.addFoodMenu = function() {
    count += 1;
    $scope.foodMenu = {
      name : $scope.foodInput,
      checkedNum : 0,
      _id: count
    };
    $scope.foodMenus.push($scope.foodMenu);
    console.log("checked : ", $scope.foodMenu);

    // $http.post("/foodmenu/", $scope.field).success(function(response){
    //   console.log("post success :", response);
    // }).error(function(data, status, headers, config) {
    //   console.log("post error : ", data);
    // });
  };

  $scope.saveList = function() {
    if($scope.fields.length !== 0){
      $http.put("/foodmenu/", $scope.fields).success(function(response) {
        console.log(response);
      }).error(function(data, status, headers, config) {
        console.log("error : ", data);
      });
      alert("소중한 의견 감사합니다.");
      refreshFood();
    } else {
      alert("메뉴가 아직 없습니다");
    }
  };

  $scope.resetList = function() {
    $http.delete("/foodmenu/").success(function(response){
      console.log(response);
    });
    refreshFood();
    alert("메뉴 전체가 리셋되었습니다.");
  };

}]);

myApp.directive('foodDisplay', function($compile) {
  return {
    scope: false,
    templateUrl: 'foodmenu.html',
    link: function(scope, element, attrs) {
      console.log("element : ", element[0]);
      scope.change = function() {
        componentHandler.upgradeElement(element[0].querySelector('#list-checkbox-20'));
        if (scope.checked == true) {
          console.log("true");
          console.log(this.foodMenu.checkedNum);
        } else {
          console.log("false");
        }
      }
    }
  };
});

myApp.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

// myApp.directive("datepicker", ["$http", function ($http) {
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function (scope, elem, attrs, ngModelCtrl) {
//
//       var updateModel = function (dateText) {
//         scope.$apply(function () {
//           ngModelCtrl.$setViewValue(dateText);
//         });
//       };
//
//       var options = {
//         dateFormat: "yy/mm/dd",
//         onSelect: function (dateText) {
//
//           // console.log(dateText);
//           var date = {
//             "date" : dateText
//           };
//
//           // 회식 날짜 선정을 위한 post 요청
//           // $http.put('/date', date).success(function(response, data, status, headers, config) {
//           //   console.log("put response : ",response);
//           // }). error(function(data, status, headers, config) {
//           //   console.log(data);
//           // });
//         }
//       };
//       elem.datepicker(options);
//     }
//   };
// }]);
