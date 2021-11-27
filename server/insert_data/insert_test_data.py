
mongoimport --db=lyric_trend_db --collection=tb_song --type=csv --headerline --file=years.csv --columnsHaveTypes
## 인서트 에러날 경우 mongodb에서 db.my_coll.dropIndexes() 하고 위의 명령어 다시 실행하면 됨

## TypeError: Object of type type is not JSON serializable  이런 에러가 발생할 경우 csv 파일을 열어 속성을 지정해주면 해결됨