-- Adds debut date, album
CREATE TABLE artists (
    id int(100),
    name varchar(200),
    debut_date timestamp,
    PRIMARY KEY (id)
)

CREATE TABLE songs (
    id int(100),
    title varchar(200),
    artist int(100),
    duration int(10),
    album varchar(200),
    PRIMARY KEY (id),
    FOREIGN KEY (artist) REFERENCES artists(id)
)