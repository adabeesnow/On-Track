<?php
use Finance\Http\Methods;

require_once 'config.php';
require_once 'vendor/autoload.php';

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) use ($baseURI) {

    $handleGetCategory = function($args){
        return (new \Finance\Controllers\CategoryController())->getCategory($args);
    };
    $handlePostCategory = function($args){
        return (new \Finance\Controllers\CategoryController())->getCategory($args);
    };
    $handlePutCategory = function($args){
        return (new \Finance\Controllers\CategoryController())->getCategory($args);
    };
    $handleDeleteCategory = function($args){
        return (new \Finance\Controllers\CategoryController())->getCategory($args);
    };

    $r->addRoute('GET', $baseURI . '/category/{id:\d+}/', $handleGetCategory);
    $r->addRoute('POST', $baseURI . '/category', $handlePostCategory);
    $r->addRoute('PUT', $baseURI . '/category', $handlePutCategory);
    $r->addRoute('DELETE', $baseURI . '/category', $handleDeleteCategory);





});

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$pos = strpos($uri, '?');
if ($pos !== false) {
    $uri = substr($uri, 0, $pos);
}

$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($method, $uri);

switch($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        http_response_code(Finance\Http\StatusCodes::NOT_FOUND);
        //Handle 404
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        http_response_code(Finance\Http\StatusCodes::METHOD_NOT_ALLOWED);
        //Handle 403
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler  = $routeInfo[1];
        $vars = $routeInfo[2];

        $response = $handler($vars);
        echo json_encode($response);
        break;
}