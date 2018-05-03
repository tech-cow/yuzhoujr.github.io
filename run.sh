#!/bin/bash
cd "$(dirname "$0")"
MSG="auto push @ "
DATE=`date '+%Y-%m-%d %H:%M:%S'`

# Executing GitHub API parser to feed JSON data to the frontend
cd static/data
python parser.py

# Automate Git
git add --all
git commit -m "$MSG$DATE"
git push origin master

# Crontab Command
# */1 * * * * /Users/yui/Dropbox/github/portfolio/update.sh > /var/log/myjob.log 2>&1
om
