#!/usr/bin/env python

import subprocess
import datetime


subprocess.call(["python3", "data/parser.py"])
subprocess.call(["git", "add", "."])
subprocess.call(["git", "commit", "-m", "auto push at " + str(datetime.datetime.now())]) # 加上当前系统的时间
subprocess.call(["git", "push"])
