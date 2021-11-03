# static-server-stream
Host static server using streamable objects
## Installation
```bash
$ npm install static-server-stream -g
```
## Usage
```bash
$ static-server # on directory where to host
```
## Documentation
This package supports argument options

**-p --Port** (Default: 80):

Port to host the server

* * *

**-d --directory** (Default: "./"):

Directory folder which the server will host

* * *

**-s --ssl** (Default: false):

Whether should enable SSL protection to the server

* * *

**-k --key** (Default: null):

The key file for SSL

* * *

**-c --cert** (Default: null):

The certification file for SSL

* * *

**--http-redirect** (Default: false):

Whether the host should create a HTTP server for HTTPS redirection

* * *

**--from-http-server** (Default: 80)

The port value where HTTP server will listen for redirection

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits
Oscar Reyes
## License
[MIT](https://github.com/oscarr-reyes/node-playlist-extractor/blob/master/LICENSE.md)
