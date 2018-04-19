#!/bin/bash
cd "$(dirname "$0")"
COMMIT= "auto push at "
TIME=$(date '+%Y-%m-%d %H:%M:%S')

# Executing GitHub API parser to feed JSON data to the frontend
cd data
python parser.py

# Automate Git
git add --all
git commit -m "$COMMIT$TIME"
git push origin master

# Crontab Command
# */1 * * * * /Users/yui/Dropbox/github/portfolio/update.sh > /var/log/myjob.log 2>&1
