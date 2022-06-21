/*
参考URL
https://www.kipure.com/article/225/
*/
    const types = 
    {
        '.html' : 'text/html',
        '.htm'  : 'text/html',
        '.xml'  : 'text/xml',
        '.xaml' : 'text/xml',
        '.css'  : 'text/css',
        '.js'   : 'text/javascript',
        '.vbs'  : 'text/vbscript',
        '.png'  : 'image/png',
        '.jpg'  : 'image/jpeg',
        '.jpeg' : 'image/jpeg',
        '.gif'  : 'image/gif',
        '.svg'  : 'image/svg+xml',
        '.ico'  : 'image/vnd.microsoft.icon',
        '.mp3'  : 'audio/mpeg',
        '.mp4'  : 'video/mp4',
        '.json' : 'text/json'
    };
    
    exports.GetMimeType = function(_url) 
    {
        for (var key in types) {
          if (_url.endsWith(key)) {
            return types[key];
          }
        }
        return 'text/plane';
    };

    exports.IsMimeType = function(_url) 
    {
        for (var key in types) {
          if (_url.endsWith(key)) {
            return true;
          }
        }
        return false;
    };