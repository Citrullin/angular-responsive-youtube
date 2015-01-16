# angular-responsive-youtube
Responsive Youtube Player for AngularJS

description: The responsive Youtube Player is a simple directive for angular.
The directive get the width of the outer div element, insert a iframe and calculate the height of the iframe.

Usage:

1. Add the Javascript-File to your main html.

2. inject the module with 'citrullin.ryoutubeplayer'.
e.g

angular.module('APPLICATIONNAME', ['citrullin.ryoutubeplayer']);

3. use the youtube element

<youtube-video code="YOUTUBEVIDEOCODE"></youtube-video>

you can find the code at the youtube URL. The code of the url: https://www.youtube.com/watch?v=GNMgEcRIPnc is GNMgEcRIPnc

