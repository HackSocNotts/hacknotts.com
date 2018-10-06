# HackNotts.com

The website for Hacksoc's official hackathon in November 2015.

## Website URLs

- [Staging](http://staging.hacknotts.com)
- [Production](http://hacknotts.com)


## Travis CI Status

- Staging Build Status: [![Staging Build Status](https://magnum.travis-ci.com/jamietanna/hacknotts.com.svg?token=quY7a4xnvykmQZx9AwhA&branch=master)](https://magnum.travis-ci.com/jamietanna/hacknotts.com)
- Production Build Status: [![Production Build Status](https://magnum.travis-ci.com/jamietanna/hacknotts.com.svg?token=quY7a4xnvykmQZx9AwhA&branch=prod)](https://magnum.travis-ci.com/jamietanna/hacknotts.com)


## How to Build

- Run `sudo npm -g install grunt-cli`
- Run `npm install` in main directory
- In separate terminal windows:
  - Run `grunt watch` to watch folders so that SCSS compiles to CSS & others
  - Run `grunt serve` to test locally at http://localhost:9000/index.html
    - Alternatively, you can specify the port to i.e. 3000 by running `env SERVER_PORT=3000 grunt serve`

## Deploying changes

Changes are done via [Capistrano](http://capistranorb.com), which provides the ability to deploy really easily to our server.

In order to set up the dependencies, you will need to run `bundle install`. This requires `ruby` and `ruby-bundler`.

Changes *must* be sent to staging first, to be checked before being put live. This can be done by running `bundle exec cap staging deploy`, and can be found at [`staging.hacknotts.com`](staging.hacknotts.com).

Once confirmed that the changes are good, they can be sent live via `bundle exec cap production deploy`, and can be found at [`hacknotts.com`](hacknotts.com).

*NOTE*: In order to push to the server, you will need to be given SSH access via @jamietanna.


## Inspiration

- [HackNotts 2014](https://github.com/tfogo/hacknotts-for-luke)
- [Spotify's Diversify Hackathon](http://diversify.confetti.events/)
- [HackTheNorth - Good above the fold content](http://hackthenorth.com/)
- [Pennapps - Good FAQ section (needs map)](http://2015f.pennapps.com/)
- [Pennapps Sponsorship table - Loving this sponsorship table](http://2015f.pennapps.com/files/pennapps_sponsor_general_f15.pdf)
- [WuHack - I like how they use typeform for registering](http://wuhack.com/register.html)
- [Medx io - Nice overall design](http://www.medx.io/)

## Licensing

HackNotts is released under the [GNU Affero General Public License V3](LICENSE).
