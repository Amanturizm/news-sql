DROP SCHEMA IF EXISTS newsDb;

CREATE SCHEMA newsDb;
USE newsDb;

create table news
(
    id       int auto_increment,
    title    varchar(200) not null,
    content  int          not null,
    image varchar(200),
    datetime datetime     default (CURRENT_TIMESTAMP),
    constraint news_pk
        primary key (id)
);

create table comments
(
    id      int auto_increment,
    author  varchar(100) default 'Anonymous' not null,
    text    varchar(400)                     not null,
    id_news int                              not null,
    constraint comments_pk
        primary key (id),
    constraint comments_news_id_fk
        foreign key (id_news) references news (id)
            on update cascade on delete cascade
);

INSERT INTO news (title, content) VALUES ('Hesus - Lysus', '110');
INSERT INTO comments (author, text, id_news) VALUES ('mzlff', 'axaxax', 1);