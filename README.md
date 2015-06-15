# EmwiGallery

<h2>Om Emwi Gallery</h2>

<p>Emwi Gallery är en enkelt galleri med slidefunktion för att enkelt men professionellt visa dina alster. Dina besökare kan enkelt navigera bland bilderna via pilarna, piltangenterna eller helt enkelt låta bildspelet rulla själv för att kunna luta sig tillbaka och njuta. Om besökaren skulle vilja stänga galleriet så görs detta via ESCknappen eller att klicka utanför bilden(ej på pilarna). Bildspelet kommer automatiskt att avslutas när bilderna är slut. </p>

Installation/implementation
------------------------------------

<p>Installationen kan ske på två vis. Antingen så laddas en zipfil ner och packas upp eller så kan du ta hem detta via GitHub. Gå till <a href="http://www.student.bth.se/~emwi14/javascript/kmom07-project/webroot/download">Ladda ner</a> för att ladda ner dinn kopia. </p>

<p><b>Inkludera CSS i headtaggen</b><br />
    &lt;link rel='stylesheet' type='text/css' href='gallery.css'&gt;</p>


<p><b>Inkludera jQuery innan body avslutas</b><br />
    &lt;script src='jquery.js'&gt;</p>

<p><b>Inkludera gallery.js</b><br />Ska inkluderas efter jquery.js<br />
    &lt;script src='jquery'&gt;</p>

<p><b>Inkludera bildera i din sida</b><br />Kopiera in följade kod i din HTML sida. Du byter ut "myImg.jpg" mot din egen sökväg till din bild. Du kan även lägga till flera bilder.<br />    
    &lt;div class='emwi-gallery-group'><br />
&nbsp;&nbsp;&nbsp;&lt;ul id="emwi-gallery"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="myImg.jpg" title="My picture 1"&gt;&lt;/li&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br />
&nbsp;&nbsp;&nbsp;&lt;img src="myImg2.jpg" title="My picture 2"&gt;&lt;/li&gt;<br />
&nbsp;&nbsp;&lt;/ul&gt;<br />
    &lt;/div&gt;</div></p>

<p><b>Inkludera detta script efter bilderna för att initiera galleriet</b><br />
    &lt;script&gt;<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;$(document).ready(function () {<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Initiate the Gallery<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$('#emwi-gallery').showGallery({<br />
&nbsp;&nbsp;&nbsp;&nbsp;});<br />
&nbsp;&nbsp;&nbsp;});<br />
    &lt;/script&gt;</div></p>
