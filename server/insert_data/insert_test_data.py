import csv
import os
import sys

mongoimport --db lyric_trend_db --collection tb_song --type csv --headerline --file test_data.csv
## 인서트 에러날 경우 mongodb에서 db.my_coll.dropIndexes() 하고 위의 명령어 다시 실행하면 됨