import {useState } from 'react'
import { TextField, Stack } from '@mui/material';
import { Typography, Button, Checkbox } from '@material-ui/core';

export default function StandardsCard({standard}) {

    const [textValue, setTextValue] = useState("");
    const [savedText, setSavedText] = useState("");

    const handleSave = (e) => {
        console.log(e.target)
        setSavedText(textValue);
        setTextValue('');
    }

    return (<>
        <Stack direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={0.5}>
        <Typography style={{padding: "10px", float: "left"}}>
        <Checkbox color="default"/>
        {standard}
        <TextField id="outlined-basic" label="Evidence" variant="outlined" onChange={(event) => setTextValue(event.target.value)}/>
        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
        {savedText && <div>{savedText}</div>}
        </Typography>
        </Stack>
        </>
    )
}