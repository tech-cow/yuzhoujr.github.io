#!/usr/bin/env python
# -*- coding: utf-8 -*-

import datetime

def write_file(file):
    with open(file, 'a') as f:
        f.write(str(datetime.datetime.now()) + '\n')
    f.close()

file = 'test.txt'
write_file(file)
