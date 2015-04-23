<?php
// Home.php
namespace me\adamcameron\twig\controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class SubHome {

	public static function doGet(Request $request, Application $app){
		$messageFromHome = $request->get('messagePassedToSubHome');
		$complexMessageFromHome = $request->get('complexMessagePassedToSubHome');

		$viewData = [
			'messageFromSubHome' => 'this was set in the SubHome controller',
			'messageFromHomePassedToSubHome' => $messageFromHome,
			'complexMessageFromHomePassedToSubHome' => $complexMessageFromHome
		];
		return $app['twig']->render('subhome.html.twig', $viewData);
	}

}