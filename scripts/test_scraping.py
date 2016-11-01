#!/usr/bin/python3

from bs4 import BeautifulSoup
import requests
import json

# SSR武器ページを読みこむ
request = requests.get(r'http://mirror.gbf-wiki.com/index.php?%C9%F0%B4%EFSSR')
soup = BeautifulSoup(request.text, 'html.parser')

# 通常武器一覧を抜きだす
rows = soup.find('h2', id='content_1_1').find_next('table').find_all('tr')
rows = rows[1:]  # タイトルはいらない

# 武器一覧を格納するリストを作る
weapons = list()

# 武器一覧を一行ずつなめていく
for row in rows:
    # 武器名等を入れる辞書を作る
    weapon = dict()
    # td要素を全て抜きだす
    tds = row.find_all('td')
    # 武器名の抽出
    name = tds[1]
    while (name.br):
        name.br.decompose()
    while (name.a):
        name.a.decompose()
    print(name.contents)
    weapon['name'] = ''.join(name.contents)
    # 属性の抽出
    attr = tds[2]
    attr.span.unwrap()
    weapon['attribute'] = ''.join(attr.contents)
    # 武器種別の抽出
    w_type = tds[3]
    weapon['type'] = ''.join(w_type.contents)
    # MinHPの抽出
    min_hp = tds[8]
    weapon['min_hp'] = int(''.join(min_hp.contents))
    # MinATKの抽出
    min_atk = tds[9]
    weapon['min_atk'] = int(''.join(min_atk.contents))
    # maxHPの抽出
    max_hp = tds[10]
    try:
        weapon['max_hp'] = int(''.join(max_hp.contents))
    except ValueError:
        weapon['max_hp'] = weapon['min_hp']
    # maxATKの抽出
    max_atk = tds[11]
    try:
        weapon['max_atk'] = int(''.join(max_atk.contents))
    except ValueError:
        weapon['max_atk'] = weapon['min_atk']
    # 武器一覧に格納
    weapons.append(weapon)

json_data = {'WEAPONS': weapons}

with open('temp_weapons.json', 'w', encoding='utf-8') as f:
    json.dump(json_data, f, ensure_ascii=False, indent=2)
