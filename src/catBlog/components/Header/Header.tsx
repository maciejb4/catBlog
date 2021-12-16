import {Button, IconButton, Toolbar, Typography} from "@mui/material";

interface HeaderProps {
    title: string;
}

export const Header = (props:HeaderProps) => {
    const { title } = props;


    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
            </Toolbar>
        </>
    )
}