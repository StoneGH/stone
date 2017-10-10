## <center>MySQL 基本操作</center>

> ### DDL（数据库定义语言）

1. 查看当前有哪些数据库：

	```mysql
	show databases;
	```

2. 创建数据库：

	```mysql
	create database 数据库名 charset utf8;
	```

2. 删除数据库：

	```mysql
	drop database 数据库名;
	```


3. 选择使用数据库：

	```mysql
	use 数据库名;
	```

4. 查看当前数据库有哪些表：

	```mysql
	show tables;
	```

5. 查看表结构：

	```mysql
	desc 表名; 
	```
	或者

	```mysql
	describe 表名; 
	```

6. 创建表：

	```mysql
	create table 表名（字段名 数据类型,……,字段名n 数据类型）charset utf8;
	```

7. 修改表名：

	```mysql
	alter table 旧表名 rename 新表名;
	```

11. 删除表：

	```mysql
	drop table 表名;
	```

8. 添加表字段：

	```mysql
	alter table 表名 add 字段名 数据类型;
	```

9. 修改表字段：

	```mysql
	alter table 表名 modify 字段名 数据类型;
	```
	或者

	```mysql
	alter table 表名 change 原字段名 新字段名 数据类型;
	```

10. 删除表字段：

	```mysql
	alter table 表名 drop column 字段名;
	```

<br/>

> ###DML（数据库操作语言）

1. 添加表数据

	```mysql
	insert into 表名(字段1,……,字段n) values(值1,……,值n);
	```

	或者

	```mysql
	insert into 表名 values(值1,……,值n);//字段值必须匹配表的所有字段
	```

2. 修改表数据：

	```mysql
	update 表名 set 字段名=字段值 [where];//不加条件修改所有
	```

3. 删除表数据

	```mysql
	delete from 表名 [where];//不加条件删除所有
	```

	或者

	```mysql
	truncate table 表名;//删除表，自增列重置
	```
<br/>

> ### DQL（数据库查询语言）

1. 查询表中的所有数据：
	
	```mysql
	select * from 表名 [where] [order by]
	```


> 四、DCL（数据库控制语言）

<p style="background-color:#f4f4f4;padding:5px;color:#555;"><span style="color:red;">稍等：</span>整理中……</p>
