import React from 'react';
import {Header} from './catBlog/components/Header/Header';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {MainFeaturedPost} from "./catBlog/components/MainFeaturedPost/MainFeaturedPost";
import {PictureList} from "./catBlog/components/PictureList/PictureList";


function App() {

    const theme = createTheme();

    const mainFeaturedPost = {
        title: 'Cat Blog',
        description:
            "This is a place for all cat lovers! Here you can share cute photos of your little tigers and lions.",
        image: 'https://source.unsplash.com/RCfi7vgJjUY',
        imageText: 'main image description',
    };

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Container maxWidth="lg">
                <Header title="Cat Blog" />
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost}/>
                        <PictureList cards={cards}/>
                    </main>
                </Container>
        </ThemeProvider>
  );
}

export default App;
