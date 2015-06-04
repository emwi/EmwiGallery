# EmwiGallery

<h2>Om Emwi Gallery</h2>

<p>Emwi Gallery är en enkelt galleri med slidefunktion för att enkelt men professionellt visa dina alster. Dina besökare kan enkelt navigera bland bilderna via pilarna, piltangenterna eller helt enkelt låta bildspelet rulla själv för att kunna luta sig tillbaka och njuta. Om besökaren skulle vilja stänga galleriet så görs detta via ESCknappen eller att klicka utanför bilden(ej på pilarna). Bildspelet kommer automatiskt att avslutas när bilderna är slut. </p>

Installation/implementation
------------------------------------

<p>Installationen kan ske på två vis. Antingen så laddas en zipfil ner och packas upp eller så kan du ta hem detta via GitHub. Gå till <a href="http://www.student.bth.se/~emwi14/javascript/kmom07-project/webroot/download">Ladda ner</a> för att ladda ner dinn kopia. </p>

<p><b>Inkludera CSS i headtaggen</b><br />
<code>&lt;link rel='stylesheet' type='text/css' href='gallery.css'&gt;</code></p>

<p><b>Inkludera jQuery innan body avslutas</b><br />
<code>&lt;script src='jquery.js'&gt;</code></p>

<p><b>Inkludera gallery.js</b><br />Ska inkluderas efter jquery.js<br />
<code>&lt;script src='jquery'&gt;</code></p>

<p><b>Inkludera bildera i din sida</b><br />Kopiera in följade kod i din HTML sida. Du byter ut "myImg.jpg" mot din egen sökväg till din bild. Du kan även lägga till flera bilder.
<div class="codeblock"><code>&lt;div class='emwi-gallery-group'><br />
 &lt;ul id="emwi-gallery"&gt;<br />
        &lt;li&gt;<br />
       &lt;img src="myImg.jpg" title="My picture 1"&gt;&lt;/li&gt;<br />
        &lt;li&gt;<br />
            &lt;img src="myImg2.jpg" title="My picture 2"&gt;&lt;/li&gt;<br />
    &lt;/ul&gt;<br />
&lt;/div&gt;</code></div></p>

<p><b>Inkludera detta script efter bilderna för att initiera galleriet</b><br />
<div class="codeblock"><code>&lt;script&gt;<br /> 
    $(document).ready(function () {<br />
        // Initiate the Gallery<br />
        $('#emwi-gallery').showGallery({<br />
            'imgCounter': true,<br />
        });<br />
    });<br />
    &lt;/script&gt;</code></div></p>
