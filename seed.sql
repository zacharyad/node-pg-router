DROP TABLE IF EXISTS users, dogs;

create table users (
  id serial primary key,
  name text default null,
  imageurl text default null
);

create table dogs (
  id serial primary key,
  name text default null,
  imageurl text default null
);

INSERT INTO users (name, imageurl) values ('Mac', 'https://ca.slack-edge.com/T024FPYBQ-U017Z7YQ0SY-a18868e18f30-512');
INSERT INTO users (name, imageurl) values ('Bart', 'https://ca.slack-edge.com/T024FPYBQ-U0210N4RHJT-ee19f7ce223d-512');
INSERT INTO users (name, imageurl) values ('Anna', 'https://ca.slack-edge.com/T024FPYBQ-U01PC22BL3G-6a2da61fceac-512');
INSERT INTO users (name, imageurl) values ('Dennese', 'https://ca.slack-edge.com/T024FPYBQ-U01HVGXSAUF-b9aa7c770294-512');
INSERT INTO users (name, imageurl) values ('Em', 'https://ca.slack-edge.com/T024FPYBQ-U01PK1HCG9Z-0b369070f4cc-512');
INSERT INTO users (name, imageurl) values ('Hannah', 'https://ca.slack-edge.com/T024FPYBQ-U01JGF6MJTE-c17540d15bbb-512');
INSERT INTO users (name, imageurl) values ('Shirley', 'https://ca.slack-edge.com/T024FPYBQ-U0182PH4H7C-ab9bab30dc64-512');

INSERT INTO dogs (name, imageurl) values ('Casey', 'https://i.ytimg.com/vi/mRf3-JkwqfU/sddefault.jpg');
INSERT INTO dogs (name, imageurl) values ('Bubba', 'https://cf.ltkcdn.net/dogs/images/orig/236742-1600x1030-cutest-puppy-videos.jpg');
INSERT INTO dogs (name, imageurl) values ('Koda', 'https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg');
INSERT INTO dogs (name, imageurl) values ('Porter', 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2019/12/shutterstock_1120210925.jpg?resize=1024%2C684&ssl=1');
