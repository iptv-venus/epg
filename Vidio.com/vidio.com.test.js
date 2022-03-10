<?xml version="1.0"?>
<settings>
   
  <!-- for detailed info about the settings see http://webgrabplus.com/documentation/configuration/webgrabconfigxml 
  and http://webgrabplus.com/sites/default/files/downloads/Misc/Documented_Configuration_Files.zip -->
   
  <filename>guide.xml</filename>
  <mode></mode>
  <postprocess grab="y" run="n">rex</postprocess>
  <user-agent>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36</user-agent>
  <!--<decryptkey site="site-name">decrypt_userkey</decryptkey>-->
  <!--<license wg-username="Notnowi" registered-email="bydimz00@gmail.com" password="Haryanto87" />-->
  <logging>on</logging>
  <retry time-out="5">4</retry>
  <timespan>6</timespan>
  <update>f</update>
 
  <!--
            Replace the next dummy channel entry with the channels you want.
			You can look into the installed siteini.pack folder on your computer
  
            For the latest version,
            see http://webgrabplus.com/epg-channels for the available sites/channels
  -->
  
    <channel update="i" site="vidio.com" site_id="6711" xmltv_id="MyTV.COCO">MyTV</channel>
    <channel update="i" site="vidio.com" site_id="7432" xmltv_id="Nusantara TV.COCO">Nusantara TV</channel>
    <channel update="i" site="vidio.com" site_id="6482" xmltv_id="DAAI TV.COCO">DAAI TV</channel>
    <channel update="i" site="vidio.com" site_id="8556" xmltv_id="Pet TV.COCO">Pet TV</channel>
    <channel update="i" site="vidio.com" site_id="8558" xmltv_id="Citra Culinary &amp; Travel.COCO">Citra Culinary &amp; Travel</channel>
    <channel update="i" site="vidio.com" site_id="6684" xmltv_id="Citra Bioskop.COCO">Citra Bioskop</channel>
    <channel update="i" site="vidio.com" site_id="6401" xmltv_id="Citra Drama.COCO">Citra Drama</channel>
    <channel update="i" site="vidio.com" site_id="6587" xmltv_id="Citra Dangdut.COCO">Citra Dangdut</channel>
    <channel update="i" site="vidio.com" site_id="6402" xmltv_id="Citra Entertainment.COCO">Citra Entertainment</channel>
    <channel update="i" site="vidio.com" site_id="8237" xmltv_id="Mentari TV.COCO">Mentari TV</channel>
</settings>
