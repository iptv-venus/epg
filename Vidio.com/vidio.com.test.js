module.exports = {
    site: 'vidio.com', // site domain name (required)
    output: 'vidio.com.guide.xml', // path to output file (default: 'guide.xml')
    channels: 'vidio.com.channels.xml', // path to channels.xml file (required)
    lang: 'id', // default language for all programs (default: 'en')
    days: 3, // number of days for which to grab the program (default: 1)
    delay: 5000, // delay between requests (default: 3000)
  
    request: { // request options (details: https://github.com/axios/axios#request-config)
  
      method: 'GET',
      timeout: 5000,
  
      /**
       * @param {object} context
       *
       * @return {string} The function should return headers for each request (optional)
       */
      headers: function(context) {
        return {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36'
        }
      },
  
      /**
       * @param {object} context
       *
       * @return {string} The function should return data for each request (optional)
       */
      data: function(context) {
        const { channel, date } = context
  
        return {
          channels: [channel.site_id],
          dateStart: date.format('YYYY-MM-DDT00:00:00-00:00'),
          dateEnd: date.add(1, 'd').format('YYYY-MM-DDT00:00:00-00:00')
        }
      }
    },
  
    /**
     * @param {object} context
     *
     * @return {string} The function should return URL of the program page for the channel
     */
    url: function (context) {
      return `https://vidio.com/${context.date.format('YYYY-MM-DD')}/channel/${context.channel.site_id}.html`
    },
    }