import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../actions/posts';
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import banner from '../images/backflip_banner.png';
import useStyles from './styles'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function AboutText({ desc }) {
  return <p>{desc ? desc : 'Default description'}</p>
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles(); 

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className={classes.main}>
    <title>Backflip Blog</title>
    <header className={classes.header}>
        <Header title="The Backflip Blog" />
        <br />
        <img className={classes.banner} src={banner} alt='/' width="1200px" height="250px" />
        <br />
        <br />
        <AboutText className={classes.smallDesc} desc="Welcome to the Backflip Blog where imagination goes wild." />
        <AboutText className={classes.smallDesc} desc="The rules are... you are not allowed to post anything you want, unless you are able to do a backflip ;)" />
    </header>
    <br />
    <br />
    <h3>Welcome to your posts</h3>
    <main className={classes.container}>
        <section className={classes.post}>
            <Posts setCurrentId={setCurrentId}/>
        </section>
        <section className={classes.form}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </section>
    </main>
</div>
  );
};

export default Home;
