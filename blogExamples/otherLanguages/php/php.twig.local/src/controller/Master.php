<?php
// Master.php
namespace me\adamcameron\twig\controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class Master {

	public static function doGet(Request $request, Application $app){
		$viewData = [
			'dynamicValue'=>'Set in master',
			'valueForSubMasterFromController' => 'Set in Master controller'
		];
		return $app['twig']->render('master.html.twig', $viewData);
	}

}