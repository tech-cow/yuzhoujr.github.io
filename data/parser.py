#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
sys.path.insert(0, '/Users/yui/Dropbox')
import config
from github import Github
import pprint
import json

def parse_python(g, repo_hash, temp_list, res):
    '''
    语言为Python的Repo信息
    根据星星进行从大到小排序
    '''
    res.append({
                "type": "category",
                "name": "Python",
               })

    for repo in g.get_user().get_repos():
        if repo.stargazers_count > 0 and repo.language == 'Python':
            repo_hash['type'] = "repo"
            repo_hash['name'] = repo.name
            repo_hash['description'] = repo.description
            repo_hash['stars'] = repo.stargazers_count
            repo_hash['forks'] = repo.forks_count
            repo_hash['lang'] = repo.language
            repo_hash['url'] = repo.html_url
            temp_list.append(repo_hash)
            repo_hash = {}

    temp_list = sorted(temp_list, key=lambda d: d["stars"])
    temp_list = temp_list[::-1]
    res += temp_list
    temp_list = []
    # pprint.pprint(res)

def parse_js(g, repo_hash, temp_list, res):
    '''
    语言为JavaScript的Repo信息
    根据星星进行从大到小排序
    '''
    res.append({
                "type": "category",
                "name": "JavaScript",
               })
    for repo in g.get_user().get_repos():
        if repo.stargazers_count > 0 and repo.language == 'JavaScript':
            repo_hash['type'] = "repo"
            repo_hash['name'] = repo.name
            repo_hash['description'] = repo.description
            repo_hash['stars'] = repo.stargazers_count
            repo_hash['forks'] = repo.forks_count
            repo_hash['lang'] = repo.language
            repo_hash['url'] = repo.html_url
            temp_list.append(repo_hash)
            repo_hash = {}

    temp_list = sorted(temp_list, key=lambda d: d["stars"])
    temp_list = temp_list[::-1]
    res += temp_list
    temp_list = []

def main():
    g = Github(config.username, config.password)
    res = []
    parse_python(g, {}, [], res)
    parse_js(g, {}, [], res)
    with open('list_data.js', 'w') as outfile:
         outfile.write("var LIST_DATA = ")
         outfile.write(json.dumps(res, indent=4,  sort_keys=True))

if __name__ == "__main__":
    main()
