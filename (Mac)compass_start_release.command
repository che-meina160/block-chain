#!/bin/sh

# そのディレクトリへのパス
cd `dirname $0`

compass compile -c config_release.rb
compass watch -c config_release.rb