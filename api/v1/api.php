<?php
use OnTrack\Http\Methods;

require_once 'config.php';
require_once 'vendor/autoload.php';

require_once 'src/Http/Methods.php';
require_once 'src/Http/StatusCodes.php';

require_once 'src/Controllers/CategoryController.php';
require_once 'src/Controllers/EntryController.php';

require_once 'src/Models/Category.php';
require_once 'src/Models/Entry.php';

require_once 'src/Utilities/DatabaseConnection.php';

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) use ($baseURI) {

    // Categories

    $handleGetCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->getCategory($args);
    };
    $handleGetCategories = function($args){
        return (new \OnTrack\Controllers\CategoryController())->getCategories($args);
    };
    $handlePostCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->postCategory($args);
    };
    $handlePutCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->putCategory($args);
    };
    $handleDeleteCategory = function($args){
        return (new \OnTrack\Controllers\CategoryController())->deleteCategory($args);
    };

    $r->addRoute('GET', $baseURI . '/category/{id:\d+}', $handleGetCategory);
    $r->addRoute('GET', $baseURI . '/category/{id:\d+}/', $handleGetCategory);
    $r->addRoute('GET', $baseURI . '/category', $handleGetCategories);
    $r->addRoute('GET', $baseURI . '/category/', $handleGetCategories);
    $r->addRoute('POST', $baseURI . '/category', $handlePostCategory);
    $r->addRoute('POST', $baseURI . '/category/', $handlePostCategory);
    $r->addRoute('PUT', $baseURI . '/category', $handlePutCategory);
    $r->addRoute('PUT', $baseURI . '/category/', $handlePutCategory);
    $r->addRoute('DELETE', $baseURI . '/category', $handleDeleteCategory);
    $r->addRoute('DELETE', $baseURI . '/category/', $handleDeleteCategory);


    // Entries

    $handleGetEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->getEntry($args);
    };
    $handleGetEntries = function($args){
        return (new \OnTrack\Controllers\EntryController())->getEntries($args);
    };
    $handlePostEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->postEntry($args);
    };
    $handlePutEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->putEntry($args);
    };
    $handleDeleteEntry = function($args){
        return (new \OnTrack\Controllers\EntryController())->deleteEntry($args);
    };

    $r->addRoute('GET', $baseURI . '/entry/{id:\d+}', $handleGetEntry);
    $r->addRoute('GET', $baseURI . '/entry/{id:\d+}/', $handleGetEntry);
    $r->addRoute('GET', $baseURI . '/entry', $handleGetEntries);
    $r->addRoute('GET', $baseURI . '/entry/', $handleGetEntries);
    $r->addRoute('POST', $baseURI . '/entry', $handlePostEntry);
    $r->addRoute('POST', $baseURI . '/entry/', $handlePostEntry);
    $r->addRoute('PUT', $baseURI . '/entry', $handlePutEntry);
    $r->addRoute('PUT', $baseURI . '/entry/', $handlePutEntry);
    $r->addRoute('DELETE', $baseURI . '/entry', $handleDeleteEntry);
    $r->addRoute('DELETE', $baseURI . '/entry/', $handleDeleteEntry);

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
        http_response_code(OnTrack\Http\StatusCodes::NOT_FOUND);
        //Handle 404
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        http_response_code(OnTrack\Http\StatusCodes::METHOD_NOT_ALLOWED);
        //Handle 403
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler  = $routeInfo[1];
        $vars = $routeInfo[2];

        $response = $handler($vars);
        echo json_encode($response);
        break;
}