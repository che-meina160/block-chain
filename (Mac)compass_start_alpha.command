#!/bin/sh

# そのディレクトリへのパス
cd `dirname $0`

compass compile -c config_alpha.rb
compass watch -c config_alpha.rb