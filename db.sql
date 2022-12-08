create database nextjs;
use nextjs;
create table users(
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    usertype VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

INSERT INTO users ( name, password, usertype) 
    VALUES 
( 'Michael Foo', 'michael@foo.com', 'admin'), 
('John Cena', 'john@example.com', 'volunteer'), 
( 'Zoho S', 'zoho@example.com', 'user');

create table results(
    result_id INT NOT NULL AUTO_INCREMENT,
    sport VARCHAR(100) NOT NULL,
    score VARCHAR(100) NOT NULL,
    PRIMARY KEY (result_id)
    );
INSERT INTO results (sport, score)
    VALUES
    ('Football', 'BELGIUM 1 vs SENEGAL 3'),
     ('Cycling 100m', '1.morgan'),
     ('Cycling 100m', '2.simon'),
     ('Cycling 100m', '3.morgan'),
     ('javelin throw', '1.sarah');
     
   
create table schedule(
    schedule_id INT NOT NULL AUTO_INCREMENT,
    activity VARCHAR(100) NOT NULL,
    date_time VARCHAR(100) NOT NULL,
    PRIMARY KEY (schedule_id)
    );
    
INSERT INTO schedule (activity, date_time)
    VALUES 
('Football man', '23-Nov 1900hrs'),
('Cycling women', '22-Nov 1200hrs'),
('Cycling man', '25-Nov 1900hrs'),
('javelin throw', '23-Nov 1400hrs'),
('Football women', '21-Nov 1900hrs'),
('hammer throw', '23-Nov 1900hrs');

create table rota(
    rota_id INT NOT NULL AUTO_INCREMENT,
    activity VARCHAR(100) NOT NULL,
    volunteer VARCHAR(100) NOT NULL,
    PRIMARY KEY(rota_id)
    );
    
INSERT INTO rota (  activity, volunteer)
    VALUES
 ( 'cleanup', 'Michael scott'),
 ( 'cleanup', 'chris dewey'),
 ( 'security', 'dan dandallion'),
 ( 'kitchen', 'lorato sophy'),
 ( 'cleanup', 'gabriel kant');
 
 create table article (
     article_id INT NOT NULL AUTO_INCREMENT,
     header VARCHAR(100) NOT NULL,
     body VARCHAR(700) NOT NULL,
     image_url VARCHAR(100),
     PRIMARY KEY(article_id)
     );
     
     INSERT INTO article ( header, body, image_url) 
     VALUES
     ( 'Challenges faced by the Tokyo Olympics',
        'When Japan was in the midst of another wave of infections back in January – 80% of citizens did not think the games should happen. A lot can happen over the 100 days – and if Japan manages to contain the virus, public opinion should shift more positively. However, if the public still views the event negatively – and does not want to come out and buy tickets, they may not be able to hold the event (without taking substantial losses).

We hope the Olympics can happen in 2021 – for all the fans and athletes – but would not be shocked if it was officially cancelled.', 
'/example.jpg'),
('Travel restrictions and regulations ', 'This one hurts. Not only will it limit the number of people able to watch the games, but it will also hurt attendance at events without Japanese athletes (or in sports/events less popular in Japan). Japan is lucky enough to have a large population – and is an easy country to get around, so there should be a respectable number of fans. It just will not be nearly as many if their borders were open to international travellers. That is assuming the fans will come', '/sport.jpg');



 
    create table games(
        game_id INT NOT NULL AUTO_INCREMENT,
        game_name VARCHAR(100) NOT NULL, 
        game_url VARCHAR(100) NOT NULL,
        PRIMARY KEY(game_id)
    );

    INSERT INTO games ( game_name, game_url)
    VALUES 
    ('korea vs japan', 'PkYDCikE3kg');

create table comments(
    comment_id INT NOT NULL AUTO_INCREMENT,
    comment_desc VARCHAR(100) NOT null,
    user_comment VARCHAR(100),
    PRIMARY KEY(comment_id)
);

INSERT INTO comments (comment_desc, user_comment)
VALUES ('nice game!!', 'john'),
('incredible scenes, this is the first time in history', 'kate');

create table tickets(
    ticket_id INT NOT NULL AUTO_INCREMENT,
    ticket VARCHAR(100),
    price int,
    user_ticket VARCHAR(100),
    PRIMARY KEY(ticket_id)

);
INSERT INTO tickets ( ticket,price, user_ticket)
VALUES ('athletics',3, 'john');
