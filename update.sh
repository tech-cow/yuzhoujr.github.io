#!/bin/bash
cd "$(dirname "$0")"
COMMIT ="auto push at "
TIME=$(date '+%Y-%m-%d %H:%M:%S')

# Executing GitHub API parser to feed JSON data to the frontend
pip2 install pygithub
python data/parser.py

# Automate Git
git remote -v
git add .
git commit -m "$COMMIT$TIME"
git push origin master

# Crontab Command
# */1 * * * * /Users/yui/Dropbox/github/portfolio/update.sh > /var/log/myjob.log 2>&1
