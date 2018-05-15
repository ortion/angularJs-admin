//配置路由  
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/app/questionList');
    // $urlRouterProvider  
    //     .when('', '/');  
    //首页  
    $stateProvider.state('app', {
        // abstract: true,
        url: '/app',
        templateUrl: 'src/home.html'
    })
    // 二级页面
    .state('app.questionList', {
        url: '/questionList',
        templateUrl: 'src/questionBank/questionList/questionList.html',
        resolve: {
            deps: ['$ocLazyLoad',
              function( $ocLazyLoad ){
                return $ocLazyLoad.load(['src/questionBank/questionList/questionList.js']);
            }]
          }
    })
    .state('app.questionAdd', {
        url: '/questionAdd',
        templateUrl: 'src/questionBank/questionAdd/questionAdd.html',
        resolve: {
            deps: ['$ocLazyLoad',
              function( $ocLazyLoad ){
                return $ocLazyLoad.load(['src/questionBank/questionAdd/questionAdd.js']);
            }]
          }
    })
   
});  