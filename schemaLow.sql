
CREATE TABLE artists (
    id int(100),
    name varchar(200),
    debut timestamp,
    PRIMARY KEY (id)
)

CREATE TABLE songs (
    id int(100),
    title varchar(200),
    artist int(100),
    duration int(10),
    PRIMARY KEY (id),
    FOREIGN KEY (artist) REFERENCES artists(id)
)
