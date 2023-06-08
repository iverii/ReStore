import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props{
    darMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darMode, handleThemeChange}: Props){
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    Re-Store

                </Typography>

                <Switch checked={darMode} onChange={handleThemeChange} />

               

            </Toolbar>

        </AppBar>
    )
}