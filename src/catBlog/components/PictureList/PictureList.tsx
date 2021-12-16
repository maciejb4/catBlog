import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

interface PictureListProps {
    cards: number[];
}


export const PictureList = (props: PictureListProps) => {
    return (
        <>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {props.cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    // sx={{
                                    //     // 16:9
                                    //     pt: '56.25%',
                                    // }}
                                    image="https://source.unsplash.com/7AIDE8PrvA0"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}