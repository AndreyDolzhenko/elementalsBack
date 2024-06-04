 // удалить дублирущиеся строки
 DELETE FROM users WHERE ctid NOT IN (SELECT max(ctid) FROM users GROUP BY fio);