#!/usr/bin/python3

from bs4 import BeautifulSoup
import requests
import json
import csv


WEAPON_DICT = {
    '剣': 'sword',
    '銃': 'gun',
    '短剣': 'dagger',
    '槍': 'spear',
    '楽器': 'instrument',
    '格闘': 'knuckle',
    '杖': 'stuff',
    '斧': 'axe',
    '弓': 'bow',
    '刀': 'blade',
}


def csvreader_to_list(csvreader):
    return list([data for data in csvreader])


# スキル一覧を読みこむ
skill_list = dict()

with open(r'skill_list_normal.csv') as f:
    skill_list['normal'] = csvreader_to_list(csv.reader(f))
with open(r'skill_list_magna.csv') as f:
    skill_list['magna'] = csvreader_to_list(csv.reader(f))
with open(r'skill_list_ex.csv') as f:
    skill_list['ex'] = csvreader_to_list(csv.reader(f))


# スキル辞書を構築する
skill_dict = dict()

for k, v in skill_list.items():
    for l in v:
        res_dict = {
            'attribute': l[1],
            'slot': l[2],
            'type': l[3]
        }
        skill_dict[l[0]] = res_dict


# SSR武器ページを読みこむ
request_ssr = requests.get(r'http://mirror.gbf-wiki.com/index.php?%C9%F0%B4%EFSSR')  # SSRはスキル2つの可能性あり
request_sr = requests.get(r'http://mirror.gbf-wiki.com/index.php?%C9%F0%B4%EFSR')  # SRはスキル2つの可能性あり\
request_r = requests.get(r'http://mirror.gbf-wiki.com/index.php?%C9%F0%B4%EFR')  # Rはスキル1つ
request_n = requests.get(r'http://mirror.gbf-wiki.com/index.php?%C9%F0%B4%EFN')  # Nはスキル無し

soup = {
    'SSR': BeautifulSoup(request_ssr.text, 'html.parser'),
    'SR': BeautifulSoup(request_sr.text, 'html.parser'),
    'R': BeautifulSoup(request_r.text, 'html.parser'),
    'N': BeautifulSoup(request_n.text, 'html.parser')
}

# 通常武器一覧を抜きだす
items = {k: v.find('h2', id='content_1_1').find_next('table').find_all('tr') for k, v in soup.items()}
items = {k: v[1:] for k, v in items.items()}  # タイトルはいらない

# 武器一覧を格納するリストを作る
weapons = dict()

# 武器一覧を一行ずつなめていく
for rarelity, rows in items.items():
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
        weapon['type_name'] = ''.join(w_type.contents)
        weapon['type'] = WEAPON_DICT[weapon['type_name']] if weapon['type_name'] in WEAPON_DICT else 'none'
        # スキル文字列の抽出
        if (rarelity == 'R'):
            s_type_tmp = [tds[6]]
        elif (rarelity == 'N'):
            s_type_tmp = []
        else:
            s_type_tmp = [tds[6], tds[7]]
        s_type = []
        for s in s_type_tmp:
            if(s.a):
                s.a.unwrap()
            while(s.a):
                s.a.decompose()
            try:
                s_type.append(''.join(s.contents))
            except TypeError:
                s_type.append('')
        skill_temp = [
            skill_dict.get(
                skill,
                {'attribute': 'none', 'slot': 'none', 'type': 'none'}
            )
            for skill in s_type
        ]
        weapon['skill'] = [
            {'slot': skill['slot'], 'type': skill['type']}
            if (weapon['attribute'] == skill['attribute'])
            else {'slot': 'none', 'type': 'none'}
            for skill in skill_temp
        ]
        # MinHPの抽出
        if (rarelity == 'N' or rarelity == 'R'):
            min_hp = tds[7]
        else:
            min_hp = tds[8]
        weapon['min_hp'] = int(''.join(min_hp.contents))
        # MinATKの抽出
        min_atk = tds[9]
        weapon['min_atk'] = int(''.join(min_atk.contents))
        # maxHPの抽出
        if (rarelity == 'N' or rarelity == 'R'):
            max_hp = tds[9]
        else:
            max_hp = tds[10]
        try:
            weapon['max_hp'] = int(''.join(max_hp.contents))
        except ValueError:
            weapon['max_hp'] = weapon['min_hp']
        # maxATKの抽出
        if (rarelity == 'N' or rarelity == 'R'):
            max_atk = tds[10]
        else:
            max_atk = tds[11]
        try:
            weapon['max_atk'] = int(''.join(max_atk.contents))
        except ValueError:
            weapon['max_atk'] = weapon['min_atk']
        # レアリティを格納
        weapon['rarelity'] = rarelity
        # 武器一覧に格納
        if weapon['type_name'] in weapons:
            weapons[weapon['type_name']].append(weapon)
        else:
            weapons[weapon['type_name']] = [weapon]


weapons_converted = [{'type': k, 'weapons': v} for k, v in weapons.items()]
json_data = {'WEAPONS': weapons_converted}

with open('temp_weapons.json', 'w', encoding='utf-8') as f:
    json.dump(json_data, f, ensure_ascii=False, indent=2)
