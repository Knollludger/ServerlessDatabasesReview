-- Adds debut albums as a table.
CREATE TABLE artists (
    id int(100),
    name varchar(200),
    debut timestamp,
    PRIMARY KEY (id)
)

CREATE TABLE albums (
    id int(100),
    title varchar(200),
    artist id(100),
    debut timestamp
    PRIMARY KEY (id),
)

CREATE TABLE songs (
    id int(100),
    title varchar(200),
    artist int(100),
    duration int(10),
    album int(100),
    PRIMARY KEY (id),
)

