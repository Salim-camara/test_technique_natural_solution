import * as React from "react";
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Metric = (props) => {

    const [totalSpecies, setTtotalSpecies] = useState(null);
    const [totalCount, setTotalCount] = useState(null);

    useEffect(() => {

        setTtotalSpecies(props.items.length);

    }, []);


    return (
        <div className="metric">
            <Card sx={{ maxWidth: 500}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Nombre total d'espèce: <br />
                        <strong>{totalSpecies}</strong>
                    </Typography>
                    <Typography variant="body2">
                        Nombre total d'observation:
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default Metric;