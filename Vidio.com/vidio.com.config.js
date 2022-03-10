**------------------------------------------------------------------------------------------------
* @header_start
* @Site: vidio.com
* @MinSWversion: 3.1
* @Revision 0  - [26/10/2021] Mat8861
*   - creation
* @Remarks:
* @header_end
**------------------------------------------------------------------------------------------------
site {url=vidio.com|timezone=Asia/Jakarta|maxdays=10.1|cultureinfo=en-GB|charset=UTF-8|titlematchfactor=90}
* 
urldate.format {datestring|yyyyMMdd}
url_index{url|https://www.vidio.com/live/|channel|/schedules?locale=en#}
url_index.headers {customheader=Accept-Encoding=gzip,deflate}     * to speedup the downloading of the index pages
index_showsplit.scrub {multi|id="schedule-content-|<div class="b-livestreaming-daily-schedule__item"||</div></div></div></div></div>}
index_start.scrub {regex||item-content-caption">(\d{2}:\d{2})\s-\s\d{2}:\d{2}.+?<\/div>||}
index_stop.scrub {regex||item-content-caption">\d{2}:\d{2}\s-\s(\d{2}:\d{2}).+?<\/div>||}
index_title.scrub {single|item-content-title">||</div>|</div>}

